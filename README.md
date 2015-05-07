# tiny-http-server

A tiny http server for command line.

## Installation

    $ npm install -g tiny-http-server

## Example

    $ tiny-http-server -p 3333 -s 200 -b "ok"
    $ tiny-http-server -p 4444 -s 404 -b "notfound"
    $ tiny-http-server -p 5555 -s 503 -b "unavailable"
    $ tiny-http-server -p 5555 -s 200 -b "<html><title>Hello</title><body>Hi there!</body></html>" -c "text/html"

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