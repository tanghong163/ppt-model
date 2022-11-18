<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 09:18:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 15:17:02
 * @FilePath: \ppt-model\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Screen v-if="screening"></Screen>
  <Editor v-else-if="_isPC"></Editor>
  <Mobile v-else></Mobile>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/stores/index';

import { isPC } from '@/utils/common';
import Editor from './views/editor/index.vue';
import Screen from './views/screen/index.vue';
import Mobile from './views/mobile/index.vue';
import { onMounted } from 'vue';

const _isPC = isPC();
const { screening } = storeToRefs(useScreenStore());
onMounted(() => {
  // 处理ERROR in [eslint] Maximum call stack size exceeded
  setTimeout(() => {
    const ele: HTMLElement = document.getElementById('webpack-dev-server-client-overlay') as HTMLElement;
    if (ele) {
      ele.style.display = 'none';
    }
    // ele ?  ele.style.display = 'none' : ele
  }, 500);
});
</script>

<style lang="scss"></style>
