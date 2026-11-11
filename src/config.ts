/**
 * Single place for the details you'll swap before launch.
 */
export const site = {
  name: 'Gušti iz Kužine',
  bookingUrl: 'https://www.takeachef.com/en-hr/chef/tin-lu-i',
  // Contact form address. The form posts to Web3Forms, which emails the message.
  contactEmail: 'tin.lucic172@gmail.com',
  // Public Web3Forms access key. Safe to ship; enable domain restriction in the dashboard.
  web3formsKey: 'ea011cfb-5f48-4381-969b-caf93d576a30',
  // Google Analytics 4. The tag is loaded only after the visitor opts in.
  analytics: {
    measurementId: 'G-7WQJEQ6MFB',
  },
  // Google Search Console HTML-tag verification. Static metadata, no consent needed.
  googleSiteVerification: 'rzp7VigcEEQOEoQY4U-i5hhfRUbUCcleP_-9cUDDX8Y',
  // Used for canonical URLs, sitemap and social cards. Update if the domain changes.
  url: 'https://gusti-iz-kuzine.vercel.app',
  serviceArea: 'Istria, Croatia',
  year: 2026,
};

export const routes = {
  home: { hr: '/', en: '/en/' },
  gallery: { hr: '/galerija/', en: '/en/gallery/' },
  privacy: { hr: '/politika-privatnosti/', en: '/en/privacy-policy/' },
  thanks: { hr: '/hvala/', en: '/en/thank-you/' },
  // Not a navigable page: used so the language switch stays on the 404 pair.
  notFound: { hr: '/404/', en: '/en/404/' },
};
