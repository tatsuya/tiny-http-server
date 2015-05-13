# tiny-http-server

A tiny, zero configuration HTTP server to serve static content from command line.

## Installation

This is a command line too so it is recommended to install grobally, via NPM:

```
$ npm install -g tiny-http-server
```

## Usage

Serve a text "ok" with status code 200 on port 3333.

```
$ tiny-http-server -p 3333 -s 200 -b "ok"
```

404 not found or 503 service unavailable.

```
$ tiny-http-server -p 4444 -s 404 -b "notfound"
$ tiny-http-server -p 5555 -s 503 -b "unavailable"
```

Even possible to specify content type using `-c` option.

```
$ tiny-http-server -p 6666 -s 200 -b "<html><title>Hello</title><body>Hi there!</body></html>" -c "text/html"
```

## Options

```
  Usage: tiny-http-server [options]

  Options:

    -h, --help                  output usage information
    -p, --port [num]            port number the server listen to
    -s, --status [code]         http status code
    -b, --body [content]        http body content
    -c, --content-type [value]  Content-Type header value
```

## Licence

MIT
