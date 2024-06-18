import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: '@arco-design/mobile-react',
          libDirectory: 'esm',
          style: (path) => `@arco-design/mobile-react/esm/${path}/style`,
        },
        {
          libName: '@arco-design/mobile-react/esm/icon',
          libDirectory: '',
          camel2DashComponentName: false,
        },
      ],
    }),
  ],
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
      },
    },
  },
})
