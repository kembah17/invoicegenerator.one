/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://invoicegenerator.one',
  generateRobotsTxt: true,
  outDir: './public',
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
