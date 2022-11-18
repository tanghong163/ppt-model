<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-30 08:26:03
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-09-30 15:25:05
 * @FilePath: \ppt-model\src\views\editor\remark\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="remark">
    <div class="resize-handler" @mousedown="$event => resize($event)"></div>
    <textarea :value="remark" placeholder="点击输入演讲者备注" @input="$event => handleInput($event)"></textarea>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSlidesStore } from '@/stores/index';

const props = defineProps({
  height: {
    type: Number,
    required: true
  }
});

const emit = defineEmits<{
  (event: 'update:height', payload: number): void;
}>();

const slidesStore = useSlidesStore();
const { currentSlide } = slidesStore;

const remark = computed(() => currentSlide.value?.remark || '');
/**
 * @description: 控制备注的高度
 * @param {*} e MouseEvent
 * @return {*}
 */
const resize = (e: MouseEvent) => {
  let isMouseDown = true;
  const startPageY = e.pageY;
  const originHeight = props.height;
  // 放鼠标移动
  document.onmousemove = e => {
    if (!isMouseDown) return;

    const currentPageY = e.pageY;

    const moveY = currentPageY - startPageY;
    let newHeight = -moveY + originHeight;

    if (newHeight < 40) newHeight = 40;
    if (newHeight > 120) newHeight = 120;
    emit('update:height', newHeight);
  };
  document.onmouseup = () => {
    isMouseDown = false;
    document.onmousemove = null;
    document.onmouseup = null;
  };
};

const handleInput = (e: Event) => {
  const value = (e.target as HTMLTextAreaElement).value;
  slidesStore.updateSlide({ remark: value });
};
</script>
<style lang="scss" scoped>
.remark {
  position: relative;
  border-top: 1px solid $borderColor;
  background-color: $lightGray;
  line-height: 1.5;

  textarea {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    resize: none;
    border: 0;
    outline: 0;
    padding: 8px;
    font-size: 12px;
    background-color: transparent;

    @include absolute-0();
  }
}
.resize-handler {
  height: 7px;
  position: absolute;
  top: -3px;
  left: 0;
  right: 0;
  cursor: n-resize; // 鼠标上下移动页面
  z-index: 2;
}
</style>
