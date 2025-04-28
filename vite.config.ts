import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    Unocss()
  ],
  server: {
    // port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target:
          'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      },
      '/api-prod/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api-prod/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './package/ui'),
      '@core': path.resolve(__dirname, './package/core'),
      '@utils': path.resolve(__dirname, './package/utils'),
      '@pkg': path.resolve(__dirname, './package')
    }
  },
  css: {
    // 配置`scss`和`less`全局变量
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // additionalData: '@import "@/styles/vars/_base.less";'
        additionalData: `@import "${path.resolve(
          __dirname,
          'src/styles/vars/_base.less'
        )}";`
      }
      /* scss: {
        additionalData: '@use "@/styles/vars/_base.scss";'
      }, */
    }
  }
})
