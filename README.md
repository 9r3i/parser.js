
[![Author](https://img.shields.io/badge/author-9r3i-lightgrey.svg)](https://github.com/9r3i)
[![License](https://img.shields.io/github/license/9r3i/parser.svg)](https://github.com/9r3i/parser/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/9r3i/parser.svg)](https://github.com/9r3i/parser/network)
[![Stars](https://img.shields.io/github/stars/9r3i/parser.svg)](https://github.com/9r3i/parser/stargazers)
[![Issues](https://img.shields.io/github/issues/9r3i/parser.svg)](https://github.com/9r3i/parser/issues)
[![Release](https://img.shields.io/github/release/9r3i/parser.svg)](https://github.com/9r3i/parser/releases)
[![Package](https://img.shields.io/npm/v/@9r3i/parser.svg?label=npm)](https://www.npmjs.com/package/@9r3i/parser)
[![Donate](https://img.shields.io/badge/donate-paypal-orange.svg)](https://paypal.me/9r3i)



# parser
Parse nested URL query into object, and parse object into readable JSON string

### Note
This parses URL path and search query only, without protocol, hostname and hash


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
This parses a URL string only path and search query, without protocol, hostname and hash.

Parameters:
- ```url``` string of URL path and search query, without protocol, hostname and hash

### parseQuery
Parse nested URL query string of search query without question mark.

Parameters:
- ```query``` string of URL search query, without question mark

### parseQueryKey
Parse query keys recursively.

Parameters:
- ```object``` object of default input
- ```keys``` array of URL query keys
- ```value``` mixed of object value to the target
- ```counter``` int of counter; auto-generate, default: 0

### parseJSON
Parse object into readable string JSON.

Parameters:
- ```object``` mixed of object
- ```limit``` int of nested limit; default: 1
- ```space``` int of space count between lines; initial: 0
- ```pad``` int of padding white-space per lines; default: 2

### objectLength
Calculate object length.

Parameters:
- ```object``` object of countable object


# Closing
That's all there is to it. Alhamdulillaah...



