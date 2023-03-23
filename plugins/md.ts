import fs from 'fs';

const fileRegex = /\.(md)$/

const mdToJS = (str: string) => {
  return `export const markdownStr = ${JSON.stringify(str)}`;
}

export function myPlugin() {
  return {
    name: 'test',
    transform(src, id) {
      if (fileRegex.test(id)) {
        const str = fs.readFileSync(id).toString();
        return {
          code: mdToJS(str),
          id: id.replace(fileRegex, '.js'),
          map: null // 如果可行将提供 source map
        }
      }
    }
  }
}


