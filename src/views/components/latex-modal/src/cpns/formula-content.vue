<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-25 10:32:22
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-25 14:19:17
 * @FilePath: \ppt-model\src\views\components\latex-modal\src\cpns\formula-content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <svg
    class="formula-content"
    overflow="visible"
    :width="box.w + 32"
    :height="box.h + 32"
    stroke="#000"
    stroke-width="1"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <g :transform="`scale(${scale}, ${scale}) translate(0,0) matrix(1,0,0,1,0,0)`" transform-origin="0 50%">
      <path :d="pathd"></path>
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { hfmath } from '../hfmath';
const props = defineProps({
  latex: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
});
const box = ref({ x: 0, y: 0, w: 0, h: 0 });
const pathd = ref('');

watch(
  () => props.latex,
  () => {
    const eq = new hfmath(props.latex);
    pathd.value = eq.pathd({});
    box.value = eq.box({});
  },
  { immediate: true }
);

const scale = computed(() => {
  const boxW = box.value.w + 32;
  const boxH = box.value.h + 32;

  if (boxW > props.width || boxH > props.height) {
    if (boxW / boxH > props.width / props.height) return props.width / boxW;
    return props.height / boxH;
  }
  return 1;
});
</script>
<style lang="scss" scoped>
svg {
  overflow: hidden;
}
</style>
