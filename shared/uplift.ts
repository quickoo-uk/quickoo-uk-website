export interface UpliftBlogMeta {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
}

export interface UpliftBlog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  bodyContent?: string;
  structuredData?: unknown[];
  status: "PUBLISH" | string;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  seoScore?: number;
  analytics?: {
    contentQualityScore?: number;
    rankingPotential?: string;
    conversionPotential?: string;
    externalLinksCount?: number;
  };
  createdAt?: string;
  updatedAt?: string;
  authorName?: string;
  authorUrl?: string;
  freshness?: {
    lastUpdatedAt?: string;
    ageDays?: number;
    needsRefresh?: boolean;
    freshnessThresholdDays?: number;
  };
  meta?: UpliftBlogMeta;
  customFields?: Record<string, unknown>;
}

export interface UpliftPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface UpliftBlogListResponse {
  success: true;
  data: {
    blogs: UpliftBlog[];
    pagination: UpliftPagination;
  };
}

export interface UpliftBlogDetailResponse {
  success: true;
  data: {
    blog: UpliftBlog;
  };
}

export interface UpliftErrorResponse {
  success: false;
  error: string;
}
