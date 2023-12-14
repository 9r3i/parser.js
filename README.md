
[![Author](https://img.shields.io/badge/author-9r3i-lightgrey.svg)](https://github.com/9r3i)
[![License](https://img.shields.io/github/license/9r3i/parser.svg)](https://github.com/9r3i/parser.js/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/9r3i/parser.svg)](https://github.com/9r3i/parser.js/network)
[![Stars](https://img.shields.io/github/stars/9r3i/parser.svg)](https://github.com/9r3i/parser.js/stargazers)
[![Issues](https://img.shields.io/github/issues/9r3i/parser.svg)](https://github.com/9r3i/parser.js/issues)
[![Release](https://img.shields.io/github/release/9r3i/parser.svg)](https://github.com/9r3i/parser.js/releases)
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

console.log(parse.likeJSON({
  parser:parse,
  url:parse.parseURL(url),
},9));
```

### Result
```
{
    "parser": {
        "version": "1.2.0",
        "parseURL" : "[function]",
        "parseQuery" : "[function]",
        "parseQueryKey" : "[function]",
        "parseJSON" : "[function]",
        "objectLength" : "[function]"
    },
    "url": {
        "path": "/posting/pertama-kali.html",
        "query": {
            "test": "testing",
            "tos": {
                "satu": "tis",
                "dua": {
                    "belas": {
                        "lima": "dua-belas"
                    },
                    "puluh": "tes"
                }
            },
            "trust": "believe"
        }
    }
}
```


# Usage (Browser)

### Install
```html
<script src="https://9r3i.github.io/parser.js/parser.js"></script>
```

### Usage
```js
let query="?test=testing&tos[satu]=tis&tos[dua][belas][lima]=dua-belas&tos[dua][puluh]=tes&trust=believe",
url="/posting/pertama-kali.html"+query,
parse=new parser,
parsed=parse.likeJSON({
  parser:parse,
  url:parse.parseURL(url),
},9),
pre=document.createElement('pre');
document.body.appendChild(pre);
pre.textContent=parsed;
```

### Result
```
{
    "parser": {
        "version": "1.2.0",
        "parseURL" : "[function]",
        "parseQuery" : "[function]",
        "parseQueryKey" : "[function]",
        "parseJSON" : "[function]",
        "objectLength" : "[function]"
    },
    "url": {
        "path": "/posting/pertama-kali.html",
        "query": {
            "test": "testing",
            "tos": {
                "satu": "tis",
                "dua": {
                    "belas": {
                        "lima": "dua-belas"
                    },
                    "puluh": "tes"
                }
            },
            "trust": "believe"
        }
    }
}
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

### likeJSON
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

### Visitors
[![9r3i/parser Visitors](https://sabunjelly.com/api/views/?user=9r3i-parser&color=51,119,187)](https://github.com/9r3i/parser)
|---|
| Since January 18th 2023 |




