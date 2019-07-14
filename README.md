[![Build Status](https://travis-ci.org/telemark/micro-sitemap-to-array.svg?branch=master)](https://travis-ci.org/telemark/micro-sitemap-to-array)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-sitemap-to-array

Returns array from sitemap

## API

POST or GET a url to a sitemap.xml

```bash
$ curl https://sitemap.tjeneste.win?sitemap=https://www.telemark.no/sitemap.xml
```

```bash
$ curl -H "Content-Type: application/json" -d '{"sitemap": "https://www.telemark.no/sitemap.xml"}' https://sitemap.tjeneste.win
```

## Development

You'll need the now-cli from ZEIT

```
$ now dev
```

## Deploy to ZEIT/Now - Manual

Change [now.json](now.json) to match your environment.

Run the deploy script.

```
$ npm run deploy
```

## Deploy to ZEIT/Now - Automatic

Setup GitHub actions to match your environment.

Do a release.

## License

[MIT](LICENSE)
