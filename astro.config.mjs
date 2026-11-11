import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update this to your custom domain before launch.
  site: 'https://gusti-iz-kuzine.vercel.app',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Thank-you pages and the error page are noindex; keep them out of the map.
      filter: (page) =>
        !page.includes('/hvala/') &&
        !page.includes('/en/thank-you/') &&
        !page.includes('/404'),
    }),
  ],
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
