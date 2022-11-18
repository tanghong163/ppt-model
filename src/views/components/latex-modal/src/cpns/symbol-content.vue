<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-25 09:25:21
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-25 13:39:54
 * @FilePath: \ppt-model\src\views\components\latex-modal\src\cpns\symbol-content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="symbol-content" v-html="svg"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue-demi';
import { hfmath } from '../hfmath';
const props = defineProps({
  latex: {
    type: String,
    required: true
  }
});
const svg = computed(() => {
  const eq = new hfmath(props.latex);
  return eq.svg({
    SCALE_X: 10,
    SCALE_Y: 10
  });
});
</script>
<style lang="scss" scoped></style>
