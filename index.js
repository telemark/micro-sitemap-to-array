'use strict'

const readFileSync = require('fs').readFileSync
const md = require('markdown-it')()
const { json, send } = require('micro')
const getSitemap = require('./lib/get-sitemap')

module.exports = async (request, response) => {
  const params = new URLSearchParams(request.query)
  const query = { sitemap: params.get('sitemap') }
  const data = ['POST'].includes(request.method) ? await json(request) : query

  if (data.sitemap && data.sitemap.length > 0) {
    const arr = await getSitemap(data.sitemap)
    response.setHeader('Access-Control-Allow-Origin', '*')
    send(response, 200, arr)
  } else {
    const readme = readFileSync(`${__dirname}/README.md`, 'utf-8')
    send(response, 200, md.render(readme))
  }
}
