import {Plugin} from 'rollup';

const ext = /\.[tj]sx?$/;

interface Config {
  always_run_in_app?: boolean,
  icon?: {
    color?: string,
    glyph?: string,
  },
  name: string,
  share_sheet_inputs?: Array<'file-url' | 'url' | 'image' | 'plain-text'>,
}

interface BannerData {
  'always-run-in-app'?: boolean | string,
  'share-sheet-inputs'?: string,
  'icon-color'?: string,
  'icon-glyph'?: string,

  // for backwards compatibility
  [key: string]: any,
}

export default function scriptableBundle(config: Config): Plugin {
  return {
    name: 'scriptable',
    renderChunk(code, chunk) {
      let bannerData: BannerData = {
        "always-run-in-app": config.always_run_in_app || false,
        "share-sheet-inputs": config.share_sheet_inputs ? config.share_sheet_inputs.join(', ') : '',
      }

      if (config.icon) {
        if (config.icon.color) {
          bannerData["icon-color"] = config.icon.color;
        }
        if (config.icon.glyph) {
          bannerData["icon-glyph"] = config.icon.glyph;
        }
      }

      const banner = (
        "// Variables used by Scriptable.\n" +
        "// These must be at the very top of the file. Do not edit.\n" +
        `// ${
          Object
            .keys(bannerData)
            .filter(
              (key) => !!bannerData[key]
            )
            .map(
              (key) => `${key}: ${bannerData[key]};`
            )
            .join(' ')
        }\n`
      );

      const result = {
        ...config,
        script: code
      };

      this.emitFile({
        type: 'asset',
        name: chunk.name.replace(ext, '.scriptable'),
        fileName: chunk.fileName.replace(ext, '.scriptable'),
        source: JSON.stringify(result)
      });

      return {
        code: banner + code,
      }
    }
  };
}
