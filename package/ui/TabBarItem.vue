<template>
  <div class="tab-bar-item" :class="{ active }" @click="$emit('click')">
    <img v-if="!active" :src="icon" class="tab-bar-icon" />
    <img v-else :src="activeIcon || icon" class="tab-bar-icon" />
    <div class="tab-bar-text" :style="active ? activeTextStyle : {}">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, CSSProperties } from 'vue'

export default defineComponent({
  name: 'TabBarItem',
  props: {
    icon: { type: String, required: true },
    activeIcon: { type: String, default: '' },
    text: { type: String, required: true },
    active: { type: Boolean, default: false },
    activeTextStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => ({ color: '#181818', fontWeight: 'bold' })
    }
  }
})
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 0 4px 0;
  color: #bfbfbf;
  font-size: 12px;
  cursor: pointer;
}
.tab-bar-item.active {
  color: #181818;
}
.tab-bar-icon {
  width: 28px;
  height: 28px;
  margin-bottom: 2px;
}
.tab-bar-text {
  line-height: 1;
}
</style>
