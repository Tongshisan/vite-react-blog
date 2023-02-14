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

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup')
  return {
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
      mdx.default({
        jsxRuntime: 'automatic',
        providerImportSource: '@mdx-js/react'
      })
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
