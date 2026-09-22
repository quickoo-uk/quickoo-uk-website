import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, CalendarDays, Clock3, UserRound } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { getBlog } from "@/lib/upliftBlogsApi";

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

export default function BlogDetailPage() {
  const { slug = "" } = useParams();
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["uplift-blog", slug],
    queryFn: () => getBlog(slug),
    enabled: Boolean(slug),
  });
  const blog = data?.data.blog;

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f9fff9] py-20" aria-label="Loading article">
        <div className="section-container max-w-5xl animate-pulse space-y-6">
          <div className="h-5 w-32 rounded bg-slate-200" />
          <div className="h-16 max-w-3xl rounded bg-slate-200" />
          <div className="h-[420px] rounded-[32px] bg-slate-200" />
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="flex min-h-[70vh] items-center bg-[#f9fff9] py-20">
        <div className="section-container text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#487307]">Quickoo Journal</p>
          <h1 className="mt-4 text-4xl font-bold text-[#0a1a02]">This article isn’t available.</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">{error?.message || "The requested article could not be found."}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/blog" className="luxury-button-gold inline-flex items-center gap-2"><ArrowLeft className="h-4 w-4" />Back to journal</Link>
            {error ? <button onClick={() => refetch()} className="rounded-lg border-2 border-[#487307] px-8 py-3 font-semibold text-[#355904]">Try again</button> : null}
          </div>
        </div>
      </main>
    );
  }

  const readingTime = typeof blog.customFields?.readingTime === "string"
    ? blog.customFields.readingTime
    : undefined;
  const canonicalUrl = blog.meta?.ogUrl || `${window.location.origin}/blog/${blog.slug}`;

  return (
    <article className="min-h-screen bg-gradient-to-b from-[#f9fff9] via-white to-white text-slate-900">
      <Helmet>
        <title>{blog.meta?.seoTitle || `${blog.title} | Quickoo`}</title>
        {blog.meta?.seoDescription || blog.excerpt ? <meta name="description" content={blog.meta?.seoDescription || blog.excerpt} /> : null}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={blog.meta?.ogTitle || blog.title} />
        <meta property="og:description" content={blog.meta?.ogDescription || blog.excerpt || ""} />
        <meta property="og:type" content={blog.meta?.ogType || "article"} />
        {blog.featuredImage ? <meta property="og:image" content={blog.featuredImage} /> : null}
      </Helmet>

      <header className="relative overflow-hidden border-b border-[#dcebc9] bg-gradient-to-br from-[#0a1a02] via-[#1a2e03] to-[#355904] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(212,255,89,0.22),transparent_34%)]" />
        <div className="section-container relative z-10 py-14 sm:py-20 lg:py-24">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4ff59] transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to the journal
          </Link>
          <div className="mt-10 max-w-4xl">
            {blog.categories?.length ? (
              <div className="flex flex-wrap gap-2">
                {blog.categories.map((category) => (
                  <span key={category} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90">{category}</span>
                ))}
              </div>
            ) : null}
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{blog.title}</h1>
            {blog.excerpt ? <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">{blog.excerpt}</p> : null}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#d4ff59]" />{formatDate(blog.publishDate)}</span>
              {blog.authorName ? <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4 text-[#d4ff59]" />{blog.authorName}</span> : null}
              {readingTime ? <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#d4ff59]" />{readingTime}</span> : null}
            </div>
          </div>
        </div>
      </header>

      <div className="section-container py-10 sm:py-16">
        {blog.featuredImage ? (
          <img src={blog.featuredImage} alt={blog.title} className="mx-auto mb-12 max-h-[600px] w-full max-w-6xl rounded-[32px] object-cover shadow-[0_24px_80px_rgba(26,46,3,0.18)]" />
        ) : null}
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div
            className="blog-content min-w-0 rounded-[28px] border border-[#e1ecd3] bg-white p-6 shadow-[0_18px_55px_rgba(26,46,3,0.08)] sm:p-10 lg:p-12"
            dangerouslySetInnerHTML={{ __html: blog.bodyContent || blog.content || "" }}
          />
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-[#dcebc9] bg-[#f4fbe9] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#487307]">Travel with Quickoo</p>
              <h2 className="mt-3 text-xl font-bold text-[#0a1a02]">Make your next journey effortless.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Premium chauffeur travel, available around the clock across London and the UK.</p>
              <Link to="/book-now" className="luxury-button-gold mt-5 inline-flex w-full justify-center">Book now</Link>
            </div>
            {blog.tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {blog.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">#{tag}</span>)}
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </article>
  );
}
