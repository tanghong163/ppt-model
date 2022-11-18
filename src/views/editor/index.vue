<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 14:29:27
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-05 16:02:34
 * @FilePath: \ppt-model\src\views\editor\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="pptist-editor">
    <EditorHeader class="layout-header" />
    <div class="layout-content">
      <Thumbnails class="layout-content-left" />
      <div class="layout-content-center">
        <CanvasTool class="center-top"></CanvasTool>
        <!-- <div class="center-body" :style="{ height: `calc(100% - ${remarkHeight + 40}px)` }"></div> -->
        <Canvas class="center-body" :style="{ height: `calc(100% - ${remarkHeight + 40}px)` }"></Canvas>
        <Remark class="center-bottom" v-model:height="remarkHeight" :style="{ height: `${remarkHeight}px` }"></Remark>
      </div>
      <!-- <div class="layout-content-right"></div> -->
      <Toolbar class="layout-content-right"></Toolbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import useGlobalHotkey from '@/hooks/useGlobalHotkey';

import EditorHeader from './editor-header';
import Thumbnails from './thumbnails';
import CanvasTool from './canvas-tool/index.vue';
import Canvas from './canvas/index.vue';
import Remark from './remark/index.vue';
import Toolbar from './toolbar/index.vue';

const remarkHeight = ref(40);
useGlobalHotkey();
</script>
<style lang="scss" scoped>
.pptist-editor {
  height: 100%;
}
.layout-header {
  height: 40px;
}
.layout-content {
  height: calc(100% - 40px);
  display: flex;
}
.layout-content-left {
  width: 160px;
  height: 100%;
  flex-shrink: 0;
}
.layout-content-center {
  width: calc(100% - 160px - 260px);

  .center-top {
    height: 40px;
  }
}
.layout-content-right {
  width: 260px;
  height: 100%;
}
</style>
