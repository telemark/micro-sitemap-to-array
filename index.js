const { json } = require('micro')
const getSitemap = require('./lib/get-sitemap')

module.exports = async (request, response) => {
  const data = ['POST'].includes(request.method) ? await json(request) : request.query

  if (data.sitemap && data.sitemap.length > 0) {
    const arr = await getSitemap(data.sitemap)
    response.json(arr)
  } else {
    response.writeHead(301, { Location: '/docs' })
    response.end()
  }
}
