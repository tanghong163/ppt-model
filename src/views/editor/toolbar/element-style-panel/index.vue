<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-13 08:52:06
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-25 10:58:11
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 根据当前处理元素的type来显示对应样式的界面 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/index';

import { ElementStylePanelStates } from '@/types/toolbar';

import TextStylePanel from './text-style-panel.vue';
import ShapeStylePanel from './shape-style-panel.vue';
import LineStylePanel from './line-style-panel.vue';
import ImageStylePanel from './image-style-panel.vue';
import ChartStylePanel from './chart-style-panel/index.vue';
import TableStylePanle from './table-style-panel.vue';
import LatexStylePanel from './latex-style-panel.vue';
import AudioStylePanel from './audio-style-panel.vue';
import VidioStylePanel from './video-style-panel.vue';

const mainStore = useMainStore();
const { handleElement } = mainStore;

const currentComponent = computed(() => {
  const panelMap = {
    [ElementStylePanelStates.TEXT_STYLE]: TextStylePanel,
    [ElementStylePanelStates.IMAGE_STYLE]: ImageStylePanel,
    [ElementStylePanelStates.SHAPE_STYLE]: ShapeStylePanel,
    [ElementStylePanelStates.LINE_STYLE]: LineStylePanel,
    [ElementStylePanelStates.CHART_STYLE]: ChartStylePanel,
    [ElementStylePanelStates.TABLE_STYLE]: TableStylePanle,
    [ElementStylePanelStates.LATEX_STYLE]: LatexStylePanel,
    [ElementStylePanelStates.VIDEO_STYLE]: VidioStylePanel,
    [ElementStylePanelStates.AUDIO_STYLE]: AudioStylePanel
  };
  return panelMap['latex'];
});
</script>
<style lang="scss" scoped></style>
