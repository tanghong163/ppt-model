<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-13 14:47:28
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-21 13:32:04
 * @FilePath: \ppt-model\src\views\editor\canvas\operate\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="operate"
    :style="{
      top: elementInfo.top * canvasScale + 'px',
      left: elementInfo.left * canvasScale + 'px',
      transform: `rotate(${rotate}deg)`,
      transformOrigin: `${(elementInfo.width * canvasScale) / 2}px ${(height * canvasScale) / 2}px`
    }"
  >
    <!-- <div v-if="isSelected">aaa</div> -->
    <!-- <component
      v-if="isSelected"
      :is="currentOperateComponent"
      :elementInfo="elementInfo"
      :handlerVisible="!elementInfo.lock && (isActiveGroupElement || !isMultiSelect)"
      :rotateElement="rotateElement"
      :scaleElement="scaleElement"
      :dragLineElement="dragLineElement"
      :moveShapeKeypoint="moveShapeKeypoint"
    ></component> -->
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { PPTElement } from '@/types/slides';
import { useMainStore } from '@/stores/index';
const mainStore = useMainStore();
const { canvasScale } = mainStore;

const props = defineProps({
  // id: {
  //   type: String,
  //   required: true
  // },
  elementInfo: {
    type: Object as PropType<PPTElement>,
    required: true
  },
  isSelected: {
    type: Boolean,
    required: true
  }
});
const rotate = computed(() => ('rotate' in props.elementInfo ? props.elementInfo.rotate : 0));
const height = computed(() => ('height' in props.elementInfo ? props.elementInfo.height : 0));
</script>
<style lang="scss" scoped></style>
