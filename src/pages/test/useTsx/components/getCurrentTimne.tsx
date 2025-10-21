import type { FunctionalComponent } from 'vue'

export const getCurrentTimne = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  // 将卡片以函数组件返回（TSX），避免 h(<jsx>) 的写法
  const TimeCard: FunctionalComponent = () => (
    <view>
      <view className="time-title">
        <text className="time-title-text">
          {year}年{month}月{day}日
        </text>
      </view>
      <view className="time-content">
        <text className="time-detail-title">历史上的今天:</text>
        <text className="time-detail-content">不知道发生了什么事</text>
      </view>
    </view>
  )

  return {
    timeStr: `${year}-${month}-${day} ${hour}:${minute}:${second}`,
    timeCard: TimeCard
  }
}