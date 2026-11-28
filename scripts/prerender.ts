import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { PRERENDER_ROUTES, injectPrerenderedHtml } from '../src/lib/prerenderUtils';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

async function prerenderAllRoutes() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  const templateHtml = await fs.readFile(templatePath, 'utf-8');

  let generatedCount = 0;

  for (const entry of PRERENDER_ROUTES) {
    const renderedAppHtml = renderToString(
      React.createElement(App, {
        initialPath: entry.routePath,
        initialLanguage: 'fr',
      })
    );

    const finalHtml = injectPrerenderedHtml(
      templateHtml,
      entry.routePath,
      renderedAppHtml,
      'fr'
    );

    const outPath =
      entry.urlPath === '/'
        ? templatePath
        : path.join(DIST_DIR, entry.urlPath.replace(/^\/+/, ''), 'index.html');

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, finalHtml, 'utf-8');
    generatedCount += 1;
  }

  console.log(
    `[prerender] Generated ${generatedCount} static HTML routes in ${path.relative(process.cwd(), DIST_DIR)}/`
  );
}

prerenderAllRoutes().catch((error) => {
  console.error('[prerender] Failed to generate static HTML routes:', error);
  process.exit(1);
});
