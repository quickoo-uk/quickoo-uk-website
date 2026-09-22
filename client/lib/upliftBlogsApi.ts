import type {
  UpliftBlogDetailResponse,
  UpliftBlogListResponse,
  UpliftErrorResponse,
} from "@shared/uplift";

async function parseResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json()) as T | UpliftErrorResponse;
  if (!response.ok || !(payload as { success?: boolean }).success) {
    throw new Error((payload as UpliftErrorResponse).error || "Unable to load blog content");
  }
  return payload as T;
}

export async function getBlogs(page = 1, limit = 9) {
  const response = await fetch(`/api/blogs?page=${page}&limit=${limit}`);
  return parseResponse<UpliftBlogListResponse>(response);
}

export async function getBlog(slug: string) {
  const response = await fetch(`/api/blogs/${encodeURIComponent(slug)}`);
  return parseResponse<UpliftBlogDetailResponse>(response);
}
