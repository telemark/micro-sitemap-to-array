const { parseString } = require('xml2js')
const axios = require('axios')

module.exports = async url => {
  const result = await axios.get(url)
  return new Promise((resolve, reject) => {
    parseString(result.data, { explicitArray: false, trim: true }, (error, data) => {
      if (error) {
        return reject(error)
      } else {
        if (data.urlset || data.urlset.url) {
          return resolve(Array.isArray(data.urlset.url) ? data.urlset.url : [data.urlset.url])
        } else {
          return resolve([])
        }
      }
    })
  })
}
