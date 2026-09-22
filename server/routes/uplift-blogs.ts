import type { RequestHandler } from "express";
import sanitizeHtml from "sanitize-html";
import type {
  UpliftBlog,
  UpliftBlogDetailResponse,
  UpliftBlogListResponse,
} from "@shared/uplift";

const UPLIFT_API_BASE_URL = "https://api.upliftai.co/api/public/v1";
const CACHE_CONTROL = "public, s-maxage=300, stale-while-revalidate=600";

const sanitizeArticleHtml = (html: string | undefined) =>
  sanitizeHtml(html ?? "", {
    allowedTags: [
      "p", "br", "hr", "h2", "h3", "h4", "h5", "h6", "strong", "b",
      "em", "i", "u", "s", "a", "ul", "ol", "li", "blockquote", "figure",
      "figcaption", "img", "table", "thead", "tbody", "tr", "th", "td",
      "pre", "code", "span", "div",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      "*": ["id"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["http", "https"] },
    transformTags: {
      a: (_tagName, attribs) => ({
        tagName: "a",
        attribs: {
          ...attribs,
          rel: "noopener noreferrer",
        },
      }),
      img: (_tagName, attribs) => ({
        tagName: "img",
        attribs: {
          ...attribs,
          loading: "lazy",
        },
      }),
    },
  });

const cleanBlog = (blog: UpliftBlog): UpliftBlog => ({
  ...blog,
  content: sanitizeArticleHtml(blog.content),
  bodyContent: sanitizeArticleHtml(blog.bodyContent || blog.content),
});

const cleanBlogSummary = (blog: UpliftBlog): UpliftBlog => {
  const { content, bodyContent, structuredData, analytics, ...summary } = blog;
  const existingReadingTime = blog.customFields?.readingTime;
  const plainText = (bodyContent || content || "").replace(/<[^>]*>/g, " ");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;

  return {
    ...summary,
    customFields: {
      ...blog.customFields,
      readingTime: typeof existingReadingTime === "string" && existingReadingTime.trim()
        ? existingReadingTime
        : `${Math.max(1, Math.ceil(wordCount / 220))} min read`,
    },
  };
};

const getToken = () => process.env.UPLIFTAI_API_TOKEN?.trim();

async function requestUplift<T>(path: string): Promise<{ status: number; body: T }> {
  const token = getToken();
  if (!token) {
    throw new Error("UPLIFTAI_API_TOKEN is not configured");
  }

  const response = await fetch(`${UPLIFT_API_BASE_URL}${path}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    signal: AbortSignal.timeout(10_000),
  });

  const body = (await response.json()) as T;
  return { status: response.status, body };
}

const sendIntegrationError = (res: Parameters<RequestHandler>[1], error: unknown) => {
  console.error("UpliftAI blog request failed", error);
  const message = error instanceof Error && error.message.includes("not configured")
    ? "Blog integration is not configured"
    : "The blog service is temporarily unavailable";
  res.status(503).json({ success: false, error: message });
};

export const listUpliftBlogs: RequestHandler = async (req, res) => {
  const requestedPage = Number.parseInt(String(req.query.page ?? "1"), 10);
  const requestedLimit = Number.parseInt(String(req.query.limit ?? "9"), 10);
  const page = Number.isFinite(requestedPage) ? Math.max(1, requestedPage) : 1;
  const limit = Number.isFinite(requestedLimit)
    ? Math.min(100, Math.max(1, requestedLimit))
    : 9;

  try {
    const { status, body } = await requestUplift<UpliftBlogListResponse | { success: false; error?: string }>(
      `/blogs?page=${page}&limit=${limit}`,
    );

    if (status !== 200 || !body.success) {
      res.status(status >= 400 && status < 500 ? status : 502).json({
        success: false,
        error: status === 401 || status === 403
          ? "Blog integration authorization failed"
          : "Unable to load blog articles",
      });
      return;
    }

    res.setHeader("Cache-Control", CACHE_CONTROL);
    res.json({
      ...body,
      data: {
        ...body.data,
        blogs: body.data.blogs.map(cleanBlogSummary),
      },
    });
  } catch (error) {
    sendIntegrationError(res, error);
  }
};

export const getUpliftBlog: RequestHandler = async (req, res) => {
  const slug = String(req.params.slug ?? "").trim();
  if (!slug || slug.length > 200) {
    res.status(400).json({ success: false, error: "A valid blog slug is required" });
    return;
  }

  try {
    const { status, body } = await requestUplift<UpliftBlogDetailResponse | { success: false; error?: string }>(
      `/blog/${encodeURIComponent(slug)}`,
    );

    if (status !== 200 || !body.success) {
      res.status(status === 404 ? 404 : status >= 400 && status < 500 ? status : 502).json({
        success: false,
        error: status === 404 ? "Blog article not found" : "Unable to load this blog article",
      });
      return;
    }

    res.setHeader("Cache-Control", CACHE_CONTROL);
    res.json({
      ...body,
      data: { blog: cleanBlog(body.data.blog) },
    });
  } catch (error) {
    sendIntegrationError(res, error);
  }
};
