<script setup lang="ts">
const d = new Date()
const year = d.getFullYear()
const month = d.getMonth() + 1
const day = d.getDate()
</script>

<template>
  <view>
    <view class="time-title">
      <text class="time-title-text">{{ year }}年{{ month }}月{{ day }}日</text>
    </view>
    <view class="time-content">
      <text class="time-detail-title">历史上的今天:</text>
      <text class="time-detail-content">不知道发生了什么事</text>
    </view>
  </view>
</template>

<style scoped>
.time-title {
  margin-bottom: 8px;
}
.time-title-text {
  font-size: 18px;
  color: #333;
}
.time-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.time-detail-title {
  font-weight: 600;
}
.time-detail-content {
  color: #666;
}
</style>