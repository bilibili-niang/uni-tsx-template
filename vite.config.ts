import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 平台环境：用于按平台切换别名文件
const isH5 = process.env.UNI_PLATFORM === 'h5'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
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
      '@timecard': path.resolve(
        __dirname,
        isH5 ? './src/shared/TimeCard.tsx' : './src/shared/TimeCard.vue'
      )
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
