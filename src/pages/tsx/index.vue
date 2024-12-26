<!-- #ifdef H5 -->
<template>
  <view>
    h5
    <TsxPage />
  </view>
</template>
<!-- #endif -->
// #ifdef H5
<script setup lang="ts">
import TsxPage from './TsxPage'
</script>
// #endif
<!-- #ifdef MP -->
<template>
  <view class="tsx-demo" style="padding: 16px">
    微信开发环境
    <text class="title" style="font-size: 40rpx; color: #1e80ff"
      >TSX 示例页面（MP）</text
    >
    <view class="row" style="margin-top: 16px; display: flex; gap: 8px">
      <text>count: {{ count }}</text>
      <button @click="inc">+1</button>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const inc = () => (count.value += 1)
</script>
<!-- #endif -->
