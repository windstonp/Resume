/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.alvez.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/contact', '/api/captcha-check'],
  
};