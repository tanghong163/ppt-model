<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-06 16:52:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-13 15:25:44
 * @FilePath: \ppt-model\src\views\editor\canvas\editable-element.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="editable-element"
    ref="elementRef"
    :id="`editable-element-${elementInfo.id}`"
    :style="{
      zIndex: elementIndex
    }"
  >
    <component :is="currentElementComponent" :elementInfo="elementInfo" :selectElement="selectElement"></component>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

import { PPTElement, ElementTypes } from '@/types/slides';

import ShapeElement from '@/views/components/elements/shape-element/index.vue';
import TextElement from '@/views/components/elements/text-element/index.vue';

const props = defineProps({
  elementInfo: {
    type: Object as PropType<PPTElement>,
    required: true
  },
  elementIndex: {
    type: Number,
    required: true
  },
  selectElement: {
    type: Function as PropType<(e: MouseEvent | TouchEvent, element: PPTElement, canMove?: boolean) => void>,
    required: true
  }
});
const currentElementComponent = computed(() => {
  const elementTypeMap = {
    [ElementTypes.TEXT]: TextElement,
    [ElementTypes.SHAPE]: ShapeElement
  };
  return elementTypeMap[props.elementInfo.type] || null;
});
</script>
<style lang="scss" scoped></style>
