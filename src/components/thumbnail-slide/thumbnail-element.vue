<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-26 16:54:58
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-04 13:55:13
 * @FilePath: \ppt-model\src\components\thumbnail-slide\thumbnail-element.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="base-element"
    :class="`base-element-${elementInfo.id}`"
    :style="{
      zIndex: elementIndex
    }"
  >
    <component :is="currentElementComponent" :elementInfo="elementInfo" target="thumbnail"></component>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { PPTElement, ElementTypes } from '@/mocks/slides/type';
import BaseShapeElement from '@/views/components/elements/shape-element/base-shape-element.vue';
import BaseTextElement from '@/views/components/elements/text-element/base-text-element.vue';
const props = defineProps({
  elementInfo: {
    type: Object as PropType<PPTElement>,
    required: true
  },
  elementIndex: {
    type: Number,
    required: true
  }
});

const currentElementComponent = computed(() => {
  const elementTypeMap = {
    [ElementTypes.SHAPE]: BaseShapeElement,
    [ElementTypes.TEXT]: BaseTextElement
  };
  return elementTypeMap[props.elementInfo.type] || null;
});
</script>
<style lang="scss" scoped></style>
