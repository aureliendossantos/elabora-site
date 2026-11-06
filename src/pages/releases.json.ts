import { publishedReleases } from '../lib/releases';
export function GET() { return new Response(JSON.stringify(publishedReleases()), { headers: { 'Content-Type': 'application/json; charset=utf-8' } }); }
