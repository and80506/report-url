# report-url

report your external url with console.log.

## Installation

```bash
npm install report-url
```

## Usage

basic
```js
const reportURL = require('report-url');

reportURL({
  port: 3000,
  pathname: '/index'
});
// 
```
config
```js
reportURL({
  protocol: 'https',
  color: 'BgWhite',
  port: 3000,
  pathname: '/index/',
  search: '?from=163'
});
// 
```

## Configuration

### reportURL([config])

`require('report-url')` returns a function that accepts an optional configuration object.

* **color:** [optional] `Enum` of `console.log` color mode, default as 'FgBlue'
```js
const colors = {
  Reset : "\x1b[0m",
  Bright : "\x1b[1m",
  Dim : "\x1b[2m",
  Underscore : "\x1b[4m",
  Blink : "\x1b[5m",
  Reverse : "\x1b[7m",
  Hidden : "\x1b[8m",

  FgBlack : "\x1b[30m",
  FgRed : "\x1b[31m",
  FgGreen : "\x1b[32m",
  FgYellow : "\x1b[33m",
  FgBlue : "\x1b[34m",
  FgMagenta : "\x1b[35m",
  FgCyan : "\x1b[36m",
  FgWhite : "\x1b[37m",

  BgBlack : "\x1b[40m",
  BgRed : "\x1b[41m",
  BgGreen : "\x1b[42m",
  BgYellow : "\x1b[43m",
  BgBlue : "\x1b[44m",
  BgMagenta : "\x1b[45m",
  BgCyan : "\x1b[46m",
  BgWhite : "\x1b[47m",
};
```
* **tip:** [optional] default as 'addressable external url'
* **protocol:** [optional] location.protocol default as `http:`
* **port:** [optional] location.port default as `80`
* **pathname:** [optional] location.pathname
* **search:** [optional] location.search
