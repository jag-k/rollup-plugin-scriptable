[npm]: https://img.shields.io/npm/v/@jag-k/rollup-plugin-scriptable

[npm-url]: https://www.npmjs.com/package/@jag-k/rollup-plugin-scriptable

[main-version]: https://img.shields.io/github/package-json/v/jag-k/rollup-plugin-scriptable?label=main%20version

[size]: https://packagephobia.com/badge?p=@jag-k/rollup-plugin-scriptable

[size-url]: https://packagephobia.com/result?p=@jag-k/rollup-plugin-scriptable

[license]: https://img.shields.io/github/license/jag-k/rollup-plugin-scriptable

# Rollup Plugin Scriptable

[![NPM][npm]][npm-url]
[![Main version][main-version]](package.json)
[![License][license]](LICENSE)
[![Install size][size]][size-url]

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

## Quick Tips

You can use [`rollup-plugin-copy`](https://npmjs.com/package/rollup-plugin-copy) to copy files to iCloud for easy
development and debugging Scriptable scripts.

```js
// rollup.config.js
import scriptableBundle from "@jag-k/rollup-plugin-scriptable";
import copy from 'rollup-plugin-copy';
import * as config from "./config.json";

export default {
  input: 'src/main.ts',
  output: [
    {
      file: `dist/${config.name}.js`,
      format: 'es',
      plugins: [scriptableBundle(config)]
    },
  ],
  plugins: process.env.COPY_TO_ICLOUD === 'true' ? [
    copy({
      targets: [
        {
          src: `dist/*.js`,
          dest: '~/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/'
        },
      ]
    })
  ] : []
};
```

## License

[Apache 2.0](LICENSE)
