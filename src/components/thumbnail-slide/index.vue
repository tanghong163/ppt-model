<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-26 16:54:35
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-08 15:55:34
 * @FilePath: \ppt-model\src\components\thumbnail-slide\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="thumbnail-slide"
    :style="{
      width: size + 'px',
      height: size * viewportRatio + 'px'
    }"
  >
    <div
      class="elements"
      :style="{
        width: VIEWPORT_SIZE + 'px',
        height: VIEWPORT_SIZE * viewportRatio + 'px',
        transform: `scale(${scale})`
      }"
      v-if="visible"
    >
      <div class="background" :style="backgroundStyle"></div>
      <!-- <div class="background"></div> -->
      <ThumbnailElement v-for="(element, index) in slide.elements" :key="element.id" :elementInfo="element" :elementIndex="index + 1" />
    </div>
    <div class="placeholder" v-else>加载中 ...</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import ThumbnailElement from './thumbnail-element.vue';
import { useSlidesStore } from '@/stores/index';
import { Slide } from '@/mocks/slides/type';
import { VIEWPORT_SIZE } from '@/configs/canvas';

import useSlideBackgroundStyle from '@/hooks/useSlideBackgroundStyle';
const props = defineProps({
  slide: {
    type: Object as PropType<Slide>,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  visible: {
    type: Boolean,
    default: true
  }
});

const { viewportRatio } = storeToRefs(useSlidesStore());
const scale = computed(() => props.size / VIEWPORT_SIZE);

const background = computed(() => props.slide.background);
const { backgroundStyle } = useSlideBackgroundStyle(background);
</script>

<style lang="scss" scoped>
.thumbnail-slide {
  background-color: #fff;
  overflow: hidden;
  user-select: none;
}
.elements {
  transform-origin: 0 0;
}
.background {
  width: 100%;
  height: 100%;
  background-position: center;
  position: absolute;
}
.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
