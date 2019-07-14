const getSitemap = require('./lib/get-sitemap')

module.exports = async (request, response) => {
  const data = request.body || request.query

  if (data.sitemap && data.sitemap.length > 0) {
    const arr = await getSitemap(data.sitemap)
    response.json(arr)
  } else {
    response.writeHead(302, { Location: '/docs' })
    response.end()
  }
}
