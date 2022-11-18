<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-10 10:26:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-14 08:46:36
 * @FilePath: \ppt-model\src\views\editor\toolbar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="toolbar">
    <div class="tabs">
      <div class="left tab" v-for="{ label, value } in currentTabs" :key="value" @click="setToolbarState(value)">{{ label }}</div>
    </div>
    <div class="content">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { ToolbarStates } from '@/types/toolbar';

import { useMainStore } from '@/stores';
import ElementAnimationPanel from './element-animation-panel';
import SlideAnimationPanel from './slide-animation-panel';
import SlideDesignPanel from './slide-design-panel';
import ElementPositionPanel from './element-position-panel.vue';
import ElementStypePanel from './element-style-panel/index.vue';
import SymbolPanel from './symbol-panel.vue';

interface ElementTypes {
  label: string;
  value: ToolbarStates;
}
const mainStore = useMainStore();
const { activeElementIdList, handleElement, toolbarState } = storeToRefs(mainStore);

const slideTabs = [
  { label: '设计', value: ToolbarStates.SLIDE_DESIGN },
  { label: '切换', value: ToolbarStates.SLIDE_ANIMATION },
  { label: '动画', value: ToolbarStates.EL_ANIMATION }
];
const multiSelectTabs = [
  { label: '样式', value: ToolbarStates.EL_STYLE },
  { label: '位置', value: ToolbarStates.MULTI_POSITION }
];

// const elementTabs = computed<ElementTypes>(() => {
//   if (handleElement.value?.type === 'text') {
//     return [
//       { label: '样式', value: ToolbarStates.EL_STYLE },
//       { label: '符号', value: ToolbarStates.SYMBOL },
//       { label: '位置', value: ToolbarStates.EL_POSITION },
//       { label: '动画', value: ToolbarStates.EL_ANIMATION }
//     ];
//   }
//   return [
//     { label: '样式', value: ToolbarStates.EL_STYLE },
//     { label: '位置', value: ToolbarStates.EL_POSITION },
//     { label: '动画', value: ToolbarStates.EL_ANIMATION }
//   ];
// });
const elementTabs = computed<ElementTypes>(() => {
  return [
    { label: '样式', value: ToolbarStates.EL_STYLE },
    { label: '符号', value: ToolbarStates.SYMBOL },
    { label: '位置', value: ToolbarStates.EL_POSITION },
    { label: '动画', value: ToolbarStates.EL_ANIMATION }
  ];
});

const currentTabs = computed(() => {
  // if (!activeElementIdList.value.length) return slideTabs;
  if (activeElementIdList.value.length) return slideTabs;
  else if (activeElementIdList.value.length > 1) return multiSelectTabs;
  return elementTabs.value;
});

const setToolbarState = (value: ToolbarStates) => {
  mainStore.setToolbarState(value);
};
const currentComponent = computed(() => {
  const panelMap = {
    [ToolbarStates.SLIDE_DESIGN]: SlideDesignPanel,
    [ToolbarStates.SLIDE_ANIMATION]: SlideAnimationPanel,
    [ToolbarStates.EL_ANIMATION]: ElementAnimationPanel,
    [ToolbarStates.EL_POSITION]: ElementPositionPanel,
    [ToolbarStates.EL_STYLE]: ElementStypePanel,
    [ToolbarStates.SYMBOL]: SymbolPanel
  };
  return panelMap[toolbarState.value] || null;
});
// 监听右侧显示的tabs,并在切换后将tab显示为第一项
watch(currentTabs, () => {
  const currentTabsValue: ToolbarStates[] = currentTabs.value.map(tab => tab.value);
  if (!currentTabsValue.includes(mainStore.toolbarState)) mainStore.setToolbarState(currentTabsValue[0]);
});
</script>
<style lang="scss" scoped>
.toolbar {
  display: flex;
  flex-direction: column;
  border-left: solid 1px $borderColor;
  background-color: #fff;
}
.tabs {
  display: flex;
  flex-shrink: 0;
  height: 40px;
  font-size: 12px;
  user-select: none;
}
.tab {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $lightGray;
  border-bottom: 1px solid $borderColor;
  cursor: pointer;

  // &.active {
  //   background-color: #fff;
  //   border-bottom-color: #fff;
  // }

  // & + .tab {
  //   border-left: 1px solid $borderColor;
  // }
}
.content {
  padding: 12px;
  font-size: 13px;
  overflow: auto;
  // @include overflow-overlay();
}
</style>
