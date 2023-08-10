/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.aminulkibria.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
