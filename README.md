[npm]: https://img.shields.io/npm/v/jag-k/rollup-plugin-scriptable
[npm-url]: https://www.npmjs.com/package/@jag-k/rollup-plugin-scriptable
[main-version]: https://img.shields.io/github/package-json/v/jag-k/rollup-plugin-scriptable?label=main%20version
[license]: https://img.shields.io/github/license/jag-k/rollup-plugin-scriptable
[gh-packages]: https://img.shields.io/npm/v/jag-k/rollup-plugin-scriptable/latest?label=gh%20packages&registry_uri=https%3A%2F%2Fnpm.pkg.github.com

# Rollup Plugin Scriptable

[![npm][npm]][npm-url]
[![GitHub Packages][gh-packages]][npm-url]
[![Main version][main-version]](package.json)
[![License][license]](LICENSE)

Create a [Scriptable](https://scriptable.app) bundle from your project

## Installation

```shell
npm i -D @jag-k/rollup-plugin-scriptable
```

## Usage

```js
// rollup.config.js
import scriptableBundle from "@jag-k/rollup-plugin-scriptable";
import * as config from "./config.json";

export default {
  input: 'src/index.js',
  output: [
    {
      file: `dist/widget.js`,
      format: 'es',
      plugins: [scriptableBundle(config)]
    }
  ]
};
```

```json5
// config.json
{
  "always_run_in_app": false,
  "icon": {
    "color": "blue",
    "glyph": "users"
  },
  "name": "Widget",
  "share_sheet_inputs": []
}
```

After build, you will get 2 files:

```
dist
├── HASS Persons.js
└── HASS Persons.scriptable

```

In `.js` file added banner for Scriptable app.

`.scriptable` file contains bundle for Scriptable app.
This is `config.json` file with `script` key which value is compiled code.



## License

[Apache 2.0](LICENSE)
