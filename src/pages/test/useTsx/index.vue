<template>
  <view class="useTsx">
    <text>timeStr: {{ timeStr }}</text>
    <view>timeCard: <TimeCard /></view>
  </view>
</template>

<script setup lang="ts">
// 统一计算时间字符串（所有平台）
const d = new Date()
const year = d.getFullYear()
const month = d.getMonth() + 1
const day = d.getDate()
const hour = d.getHours()
const minute = d.getMinutes()
const second = d.getSeconds()
const timeStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`

// 不使用条件编译：通过 Vite 别名按平台解析
import TimeCard from '@timecard'
</script>