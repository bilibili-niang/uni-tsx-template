<template>
  <view class="index-page">
    <Test />
    <div style="height: 80px" />
        <TabBar
          :items="tabItems"
          :activeIndex="activeTabIndex"
          @update:activeIndex="activeTabIndex = $event"
        />

  </view>
</template>

<script setup lang="ts">
import './index.less'
import Test from '@/components/test/index.vue'
import { TabBar } from '@ui'
import { activeTabIndex } from '@core'

const tabItems = [
  {
    icon: '/static/tabbar/home.png',
    activeIcon: '/static/tabbar/home-active.png',
    text: '首页',
    activeTextStyle: { color: '#181818', fontWeight: 'bold' }
  },
  {
    icon: '/static/tabbar/policy.png',
    activeIcon: '/static/tabbar/policy-active.png',
    text: '政策组件'
  },
  {
    icon: '/static/tabbar/policy2.png',
    activeIcon: '/static/tabbar/policy2-active.png',
    text: '政策'
  },
  {
    icon: '/static/tabbar/user.png',
    activeIcon: '/static/tabbar/user-active.png',
    text: '我的'
  }
]
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
