import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import pkg from './package.json'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',  
      manifest: {
        "short_name": "Bdays",
        "name": "Remember bdays",
        "icons": [
          // {
          //   "src": "/images/icons-192.png",
          //   "type": "image/png",
          //   "sizes": "192x192"
          // },
          // {
          //   "src": "/images/icons-512.png",
          //   "type": "image/png",
          //   "sizes": "512x512"
          // }
        ],
        "start_url": "/?source=pwa",
        "background_color": "#3367D6",
        "display": "standalone",
        "scope": "/",
        "theme_color": "#3367D6",
        "description": "Birthdays information",
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    _APP_VERSION: JSON.stringify(pkg.version),
  },
})
