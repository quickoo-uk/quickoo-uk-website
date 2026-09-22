import { useQuery } from "@tanstack/react-query";
import { ArrowRight, BookOpen, CalendarDays, Clock3, RefreshCw } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link, useSearchParams } from "react-router-dom";
import { SectionChip } from "@/components/SectionChip";
import { getBlogs } from "@/lib/upliftBlogsApi";
import type { UpliftBlog } from "@shared/uplift";

const PAGE_SIZE = 9;

const formatDate = (date?: string) => {
  if (!date) return "Recently published";
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime())
    ? date
    : new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(parsed);
};

const getReadingTime = (blog: UpliftBlog) => {
  const customTime = blog.customFields?.readingTime;
  if (typeof customTime === "string" && customTime.trim()) return customTime;
  const plainText = (blog.bodyContent || blog.content || "").replace(/<[^>]*>/g, " ");
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
};

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPage = Number.parseInt(searchParams.get("page") || "1", 10);
  const page = Number.isFinite(requestedPage) ? Math.max(1, requestedPage) : 1;
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["uplift-blogs", page],
    queryFn: () => getBlogs(page, PAGE_SIZE),
  });

  const blogs = data?.data.blogs ?? [];
  const pagination = data?.data.pagination;
  const changePage = (nextPage: number) => {
    setSearchParams(nextPage === 1 ? {} : { page: String(nextPage) });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fff9] via-white to-[#f4fbe9] text-slate-900">
      <Helmet>
        <title>Luxury Travel Journal | Quickoo</title>
        <meta
          name="description"
          content="Expert travel advice, London guides and chauffeur insights from Quickoo's luxury travel journal."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-[#dcebc9] bg-gradient-to-br from-[#0a1a02] via-[#1c3405] to-[#487307]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(212,255,89,0.24),transparent_34%)]" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full border border-white/10" />
        <div className="section-container relative z-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <SectionChip title="The Quickoo Journal" className="border-white/20 bg-white/95" />
            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Refined journeys begin with the right insight.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              London travel guides, airport advice and thoughtful perspectives from a team devoted to seamless chauffeur experiences.
            </p>
          </div>
        </div>
      </section>

      <main className="section-container py-14 sm:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#487307]">Latest stories</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0a1a02] sm:text-4xl">Travel, considered.</h2>
          </div>
          {isFetching && !isLoading ? (
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <RefreshCw className="h-4 w-4 animate-spin" /> Refreshing
            </span>
          ) : null}
        </div>

        {isLoading ? (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3" aria-label="Loading articles">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-lg">
                <div className="h-56 animate-pulse bg-slate-200" />
                <div className="space-y-4 p-7">
                  <div className="h-3 w-1/3 animate-pulse rounded bg-slate-200" />
                  <div className="h-7 animate-pulse rounded bg-slate-200" />
                  <div className="h-16 animate-pulse rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-[32px] border border-red-100 bg-white p-10 text-center shadow-xl">
            <BookOpen className="mx-auto h-10 w-10 text-[#487307]" />
            <h2 className="mt-4 text-2xl font-bold">The journal is taking a short pause</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">{error.message}</p>
            <button onClick={() => refetch()} className="luxury-button-gold mt-6">Try again</button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="relative overflow-hidden rounded-[36px] border border-[#dcebc9] bg-white px-6 py-16 text-center shadow-[0_24px_70px_rgba(26,46,3,0.10)] sm:px-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1a2e03] via-[#6aa80b] to-[#d4ff59]" />
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eff8df] text-[#487307]">
              <BookOpen className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-[#0a1a02]">Our first stories are being prepared.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We’re curating practical guidance for smoother airport transfers, more rewarding London journeys and elevated private travel.
            </p>
            <Link to="/contact" className="luxury-button-gold mt-8 inline-flex items-center gap-2">
              Plan your journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e1ecd3] bg-white shadow-[0_18px_55px_rgba(26,46,3,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(26,46,3,0.16)]"
              >
                <Link to={`/blog/${blog.slug}`} className="relative block h-56 overflow-hidden bg-[#152905]">
                  <img
                    src={blog.featuredImage || "/dark-hero-default.jpg"}
                    alt={blog.featuredImage ? blog.title : "Quickoo luxury chauffeur journal"}
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a02]/70 via-transparent to-transparent" />
                  {blog.categories?.[0] ? (
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#355904] shadow-lg">
                      {blog.categories[0]}
                    </span>
                  ) : null}
                </Link>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-[#6aa80b]" />{formatDate(blog.publishDate)}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-[#6aa80b]" />{getReadingTime(blog)}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold leading-snug text-[#0a1a02]">
                    <Link to={`/blog/${blog.slug}`} className="transition hover:text-[#487307]">{blog.title}</Link>
                  </h2>
                  <p className="mt-4 line-clamp-3 leading-7 text-slate-600">{blog.excerpt || "Discover thoughtful advice from the Quickoo team."}</p>
                  <Link to={`/blog/${blog.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-[#487307]">
                    Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {pagination && pagination.totalPages > 1 ? (
          <nav className="mt-12 flex items-center justify-center gap-4" aria-label="Blog pagination">
            <button
              onClick={() => changePage(page - 1)}
              disabled={page <= 1}
              className="rounded-xl border border-[#dcebc9] bg-white px-5 py-3 font-semibold text-[#355904] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <span className="text-sm text-slate-600">Page {pagination.page} of {pagination.totalPages}</span>
            <button
              onClick={() => changePage(page + 1)}
              disabled={page >= pagination.totalPages}
              className="rounded-xl border border-[#dcebc9] bg-white px-5 py-3 font-semibold text-[#355904] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        ) : null}
      </main>
    </div>
  );
}
