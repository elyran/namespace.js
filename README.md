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

## Install & Test

1. Copy the files
1. Run test..
1. For browser: Run `test.html` and check the console
1. For server: Run `node test.js`

## Notes
In server mode `namespace.js` will register itself under `global` scope so you may use it globally without any hassle.
