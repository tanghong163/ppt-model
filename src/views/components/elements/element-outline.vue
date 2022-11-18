<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 13:52:07
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-09-28 13:54:58
 * @FilePath: \ppt-model\src\views\components\elements\element-outline.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <svg class="element-outline" v-if="outline" overflow="visible" :width="width" :height="height">
    <path
      vector-effect="non-scaling-stroke"
      stroke-linecap="butt"
      stroke-miterlimit="8"
      fill="transparent"
      :d="`M0,0 L${width},0 L${width},${height} L0,${height} Z`"
      :stroke="outlineColor"
      :stroke-width="outlineWidth"
      :stroke-dasharray="outlineStyle === 'dashed' ? '10 6' : '0 0'"
    ></path>
  </svg>
</template>

<script lang="ts" setup>
import { PropType, toRef } from 'vue';
import { PPTElementOutline } from '@/mocks/slides/type';

import useElementOutline from '@/views/components/elements/hooks/useElementOutline';

const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  outline: {
    type: Object as PropType<PPTElementOutline>
  }
});

const { outlineWidth, outlineStyle, outlineColor } = useElementOutline(toRef(props, 'outline'));
</script>
<style lang="scss" scoped>
svg {
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
