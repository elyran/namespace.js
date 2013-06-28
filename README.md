namespace.js
============

Small yet effective Javascript namespace management

Compatible with **browser** and **server (node.js)**

## Quick start/example
```javascript
namespace.js("com.example.portal");
console.log(com.example.portal);

namespace.js("com.example.portal.constants").CONSTANT_VALUE = 123;
console.log(com.example.portal.constants.CONSTANT_VALUE);
```

Check `test.js` for more

## Install @ Browser
1. Copy `namespace.js`
2. Include in your html `<script src="namespace.js"></script>`

## Install @ Server
1. Copy `namespace.js`
2. Include in your code `require("./namespace.js");`

## Test
* For browser: Run `test.html` and check the console
* For server: Run `node test.js` and watch the output

## Notes
In server mode `namespace.js` will register itself under `global` scope so you may use it globally without any hassle.

## Roadmap
* `npm` package
