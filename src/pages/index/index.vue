<template>
  <view class="index-page">
    <Hello />
    <!-- #ifdef H5 -->
    <IndexTsx />
    <!-- #endif -->
    <UnoCss />
    <text class="h2"> 查看其它页面示例↓ </text>
    <view>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{
        v.title
      }}</navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import './index.less'
import { reactive } from 'vue'
import Hello from '@/components/hello/index.vue'
import UnoCss from '@/components/unocss/index.vue'
// #ifdef H5
import IndexTsx from './IndexTsx'
// #endif

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index'
  },
  {
    title: 'Axios Demo',
    url: '/pages/axios/index'
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index'
  },
  {
    title: 'UnoCSS Demo',
    url: '/pages/unocss/index'
  },
  // #ifdef H5
  {
    title: 'TSX Demo',
    url: '/pages/tsx/index'
  }
  // #endif
])
</script>

<style lang="less" scoped>
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: @title-color;
  font-size: @title-size;
}
navigator {
  color: #1e80ff;
}
</style>
