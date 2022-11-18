<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 17:04:42
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-11 14:52:45
 * @FilePath: \ppt-model\src\components\file-input\src\file-input.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="file-input" @click="handleClik()">
    <slot></slot>
    <input type="file" name="" ref="inputRef" :accept="accept" class="input" @change="$event => handleChange($event)" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputRef = ref<HTMLInputElement>();
const props = defineProps({
  accept: {
    type: String,
    default: 'image/*'
  }
});
const emit = defineEmits<{
  (e: 'change', files: FileList): void;
}>();
const handleClik = () => {
  debugger;
  if (!inputRef.value) return;
  inputRef.value.value = '';
  inputRef.value.click();
};
const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (files) emit('change', files);
};
</script>
<style lang="scss" scoped>
.input {
  display: none;
}
</style>
