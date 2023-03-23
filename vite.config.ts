// import { defineConfig } from 'vite';
import path from "path";
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     // md()
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import mdPlugin from 'vite-plugin-markdown';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';
import { md, myPlugin } from './plugins';

console.log('mdPlugin', mdPlugin)
export default defineConfig(async () => {
  // const mdx = await import('@mdx-js/rollup')
  return {
    plugins: [
      mdPlugin({
        mode: [Mode.REACT]
      }),
      react({
        jsxRuntime: 'automatic',
      }),
      myPlugin()
      // md()
      // mdx.default({
      //   jsxRuntime: 'automatic',
      //   providerImportSource: '@mdx-js/react'
      // }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      include: [
        'react/jsx-runtime' // 因为这个文件不会显示引入，所以需要让vite提前预编译
      ]
    },
  }
})
