<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-06 08:57:45
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-21 13:38:37
 * @FilePath: \ppt-model\src\views\editor\canvas\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="canvas" ref="canvasRef">
    <!-- 插入形状、线条、图表示会出现 -->
    <!-- <ElementCreateSelection v-if="creatingElement" @created="data => insertElementFromCreateSelection(data)" /> -->
    <div
      class="viewport-wrapper"
      :style="{
        width: viewportStyles.width * canvasScale + 'px',
        height: viewportStyles.height * canvasScale + 'px',
        left: viewportStyles.left + 'px',
        top: viewportStyles.top + 'px'
      }"
    >
      <Operate v-for="element in elementList" :key="element.id" :elementInfo="element" :isSelected="true" />
      <div class="viewport" ref="viewportRef" :style="{ transform: `scale(${canvasScale})` }">
        <EditableElement
          v-for="(element, index) in elementList"
          :key="element.id"
          :elementInfo="element"
          :elementIndex="index + 1"
          :selectElement="selectElement"
        />
      </div>
    </div>
    <!--按space键后Canvas部分出现的抓动的图标  -->
    <!-- <div class="drag-mask" v-if="spaceKeyState"></div> -->
    <!-- 按鼠标右键出现的在body上的菜单功能 -->
    <!-- <Ruler :viewportStyles="viewportStyles" v-if="showRuler" /> -->
    <!-- 右键菜单功能选中连接后出现的弹窗 -->
    <!-- <Modal
      v-model:visible="linkDialogVisible"
      :footer="null"
      centered
      :width="540"
      destroyOnClose
    >
      <LinkDialog @close="linkDialogVisible = false" />
    </Modal> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import useViewportSize from './hooks/useViewportSize';
import { useMainStore, useSlidesStore } from '@/stores';
import { set } from 'lodash';
import EditableElement from './editable-element.vue';
import Operate from './operate/index.vue';
import useSelectElement from './hooks/useSelectElement';

const canvasRef = ref<HTMLElement>();
const viewportRef = ref<HTMLElement>();
const elementList = ref<HTMLElement>();

const mainStore = useMainStore();
const slidesStore = useSlidesStore();
const { canvasScale } = storeToRefs(mainStore);
const { currentSlide } = storeToRefs(slidesStore);

const { viewportStyles } = useViewportSize(canvasRef);

const setLocalElementList = () => {
  elementList.value = currentSlide.value ? JSON.parse(JSON.stringify(currentSlide.value.elements)) : [];
};
const { selectElement } = useSelectElement();
watchEffect(setLocalElementList);
</script>
<style lang="scss" scoped>
.canvas {
  position: relative;
  height: 100%;
  overflow: hidden;
  user-select: none;
  background-color: $lightGray;
}
.viewport-wrapper {
  position: absolute;
  box-shadow: 0 0 15px 0 rgba(141, 61, 61, 0.1);
}
.viewport {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
}
</style>
