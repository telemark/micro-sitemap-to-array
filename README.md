[![Build Status](https://travis-ci.org/telemark/micro-sitemap-to-array.svg?branch=master)](https://travis-ci.org/telemark/micro-sitemap-to-array)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-sitemap-to-array

Returns array from sitemap

## API

POST or GET a url to a sitemap.xml

```bash
$ curl https://sitemap.t-fk.win?sitemap=https://www.telemark.no/sitemap.xml
```

```bash
$ curl -H "Accept: application/json" -d '{"sitemap": "https://www.telemark.no/sitemap.xml"}' https://sitemap.t-fk.win
```

## Development

You'll need the now-cli from ZEIT

```
$ npm run dev
```

## License

[MIT](LICENSE)
