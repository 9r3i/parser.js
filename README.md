
[![Author](https://img.shields.io/badge/author-9r3i-lightgrey.svg)](https://github.com/9r3i)
[![License](https://img.shields.io/github/license/9r3i/parser.svg)](https://github.com/9r3i/parser/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/9r3i/parser.svg)](https://github.com/9r3i/parser/network)
[![Stars](https://img.shields.io/github/stars/9r3i/parser.svg)](https://github.com/9r3i/parser/stargazers)
[![Issues](https://img.shields.io/github/issues/9r3i/parser.svg)](https://github.com/9r3i/parser/issues)
[![Release](https://img.shields.io/github/release/9r3i/parser.svg)](https://github.com/9r3i/parser/releases)
[![Package](https://img.shields.io/npm/v/@9r3i/parser.svg?label=npm)](https://www.npmjs.com/package/@9r3i/parser)
[![Donate](https://img.shields.io/badge/donate-paypal-orange.svg)](https://paypal.me/9r3i)



# parser
Parse nesting URL query into object, and parse object into readable JSON string


# Usage (NodeJS)

### Install
```bash
$ npm i @9r3i/parser
```

### Usage
```js
const { parser }=require('@9r3i/parser');
const parse=new parser;

let query="?test=testing&tos[satu]=tis&tos[dua][belas][lima]=dua-belas&tos[dua][puluh]=tes&trust=believe",
url="/posting/pertama-kali.html"+query;

console.log(parse.parseJSON({
  parser:parse,
  url:parse.parseURL(url),
},9));
```


# Usage (Browser)

### Install
```html
<script src="https://9r3i.github.io/parser/parser.js"></script>
```

### Usage
```js
let query="?test=testing&tos[satu]=tis&tos[dua][belas][lima]=dua-belas&tos[dua][puluh]=tes&trust=believe",
url="/posting/pertama-kali.html"+query,
parse=new parser,
parsed=parse.parseJSON({
  parser:parse,
  url:parse.parseURL(url),
},9),
pre=document.createElement('pre');
document.body.appendChild(pre);
pre.textContent=parsed;
```


# Methods

### parseURL
This parse a URL string only path and search, without protocol, hostname and hash.

### parseQuery
Parse url query string of search without question mark.

### parseQueryKey
Parse query keys recusrsively.

### parseJSON
Parse object into readable string JSON.

### objectLength
Calculate object length.


# Closing
That's all there is to it. Alhamdulillaah...



