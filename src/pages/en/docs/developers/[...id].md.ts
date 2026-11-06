import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute, GetStaticPaths } from 'astro';
import { CORE_DOCS_DIR, devPages } from '../../../../lib/core-docs';

/** Each developer page as its Markdown, unchanged (index.md is the map): what agents read best. */
export const getStaticPaths = (() => [
  { params: { id: 'index' }, props: { file: 'docs/index.md' } },
  ...devPages().map((page) => ({ params: { id: page.id }, props: { file: page.file } })),
]) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response(fs.readFileSync(path.join(CORE_DOCS_DIR, props.file as string)), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
