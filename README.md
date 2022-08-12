# Rollup Plugin Scriptable

Create a [Scriptable](https://scriptable.app) bundle from your project

## Installation

```shell
npm i -D rollup-plugin-scriptable
```

## Usage

```js
// rollup.config.js
import scriptableBundle from "rollup-plugin-scriptable";
import * as config from "./rollup.config";

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

[MIT LICENSE](LICENSE)
