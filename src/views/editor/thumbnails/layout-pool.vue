<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-26 16:51:12
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-08 16:33:56
 * @FilePath: \ppt-model\src\views\editor\thumbnails\layout-pool.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout-pool">
    <div class="layout-item" v-for="slide in layout" :key="slide.id" @click="selectSlideTemplate(slide)">
      <ThumbnailSlide class="thumbnail" :slide="slide" :size="180" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSlidesStore } from '@/stores';

import { Slide } from '@/types/slides';
import { layout } from '@/mocks/layout';
import ThumbnailSlide from '@/components/thumbnail-slide/index.vue';

const slidesStore = useSlidesStore();
const { slides, slideIndex } = storeToRefs(slidesStore);
const { setSlides, setSlideIndex } = slidesStore;

const selectSlideTemplate = slide => {
  let newSlides = [...slides.value];
  newSlides.splice(slideIndex.value + 1, 0, slide);
  setSlides(newSlides);
  setSlideIndex(slideIndex.value + 1);
};
</script>
<style lang="scss" scoped>
.layout-pool {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  max-height: 1000px;
  overflow-y: scroll;
}
</style>
