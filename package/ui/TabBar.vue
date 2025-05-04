<template>
  <div class="tab-bar">
    <TabBarItem
      v-for="(item, idx) in items"
      :key="item.text"
      :icon="item.icon"
      :activeIcon="item.activeIcon"
      :text="item.text"
      :active="activeIndex === idx"
      :activeTextStyle="item.activeTextStyle"
      @click="onTabClick(idx)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TabBarItem from './TabBarItem.vue'

export interface TabBarItemOption {
  icon: string
  activeIcon?: string
  text: string
  activeTextStyle?: Record<string, any>
}

export default defineComponent({
  name: 'TabBar',
  components: { TabBarItem },
  props: {
    items: {
      type: Array as PropType<TabBarItemOption[]>,
      required: true
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:activeIndex'],
  setup(props, { emit }) {
    const onTabClick = (idx: number) => {
      emit('update:activeIndex', idx)
    }
    return { onTabClick }
  }
})
</script>

<style scoped>
.tab-bar {
  display: flex;
  background: #fff;
  box-shadow: 0 -2px 16px 0 rgba(0, 0, 0, 0.06);
  border-radius: 24px 24px 0 0;
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
