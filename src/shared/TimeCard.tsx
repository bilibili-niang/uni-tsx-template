import type { FunctionalComponent } from 'vue'

const TimeCard: FunctionalComponent = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()

  return (
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
}

export default TimeCard