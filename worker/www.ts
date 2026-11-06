// www.elabora.studio → elabora.studio, permanently, keeping the path and the query.
export default {
  fetch(request: Request): Response {
    const url = new URL(request.url);
    url.hostname = 'elabora.studio';
    url.protocol = 'https:';
    url.port = '';
    return new Response(null, { status: 301, headers: { Location: url.href, 'Cache-Control': 'public, max-age=3600' } });
  },
};
