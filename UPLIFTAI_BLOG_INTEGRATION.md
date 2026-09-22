# UpliftAI blog integration

The public journal at `/blog` is powered by UpliftAI's public blog API through a server-side proxy.

## Configuration

Set this server-side environment variable locally and in the deployment environment:

```text
UPLIFTAI_API_TOKEN=your_uplift_api_token
```

Do not expose the token through a `VITE_` variable. Browser requests use the local endpoints below, and the Express server adds the UpliftAI authorization header.

## Local endpoints

- `GET /api/blogs?page=1&limit=9` lists published articles.
- `GET /api/blogs/:slug` retrieves one published article.

The upstream HTML is sanitized on the server before it reaches the browser. Responses are cached at the CDN for five minutes with stale-while-revalidate enabled.

## Publishing flow

Approve and publish articles in UpliftAI. Published items appear automatically on `/blog`; no code change or new deployment is required.
