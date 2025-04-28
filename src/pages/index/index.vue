<template>
  <view class="index-page">
    <Test />
  </view>
</template>

<script setup lang="ts">
import './index.less'
import Test from '@/components/test/index.vue'
</script>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: green;
  font-size: 50rpx;
}
navigator {
  color: #1e80ff;
}
</style>
