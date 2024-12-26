import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TsxPage',
  setup() {
    const count = ref(0)
    const inc = () => (count.value += 1)

    return () => (
      <view className="tsx-demo" style={{ padding: '16px' }}>
        <text className="title" style={{ fontSize: '40rpx', color: '#1e80ff' }}>
          TSX 示例页面
        </text>
        <view className="row" style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
          <text>count: {count.value}</text>
          <button onClick={inc}>+1</button>
        </view>
      </view>
    )
  }
})