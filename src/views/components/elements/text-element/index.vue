<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-07 08:45:55
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-13 15:24:49
 * @FilePath: \ppt-model\src\views\components\elements\text-element\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="editable-element-text"
    :class="{ lock: elementInfo.lock }"
    :style="{
      top: elementInfo.top + 'px',
      left: elementInfo.left + 'px',
      width: elementInfo.width + 'px',
      height: elementInfo.height + 'px'
    }"
  >
    <div class="rotate-wrapper" :style="{ transform: `rotate(${elementInfo.rotate}deg)` }">
      <div
        class="element-content"
        ref="elementRef"
        :style="{
          width: elementInfo.vertical ? 'auto' : elementInfo.width + 'px',
          height: elementInfo.vertical ? elementInfo.height + 'px' : 'auto',
          backgroundColor: elementInfo.fill,
          opacity: elementInfo.opacity,
          textShadow: shadowStyle,
          lineHeight: elementInfo.lineHeight,
          letterSpacing: (elementInfo.wordSpace || 0) + 'px',
          color: elementInfo.defaultColor,
          fontFamily: elementInfo.defaultFontName,
          writingMode: elementInfo.vertical ? 'vertical-rl' : 'horizontal-tb'
        }"
        @mousedown="$event => handleSelectElement($event)"
      >
        <ElementOutline :width="elementInfo.width" :height="elementInfo.height" :outline="elementInfo.outline" />
        <ProsemirrorEditor
          class="text"
          :elementId="elementInfo.id"
          :defaultColor="elementInfo.defaultColor"
          :defaultFontName="elementInfo.defaultFontName"
          :editable="!elementInfo.lock"
          :value="elementInfo.content"
          :style="{
            '--textIndent': `${elementInfo.textIndent || 0}px`,
            '--paragraphSpace': `${elementInfo.paragraphSpace === undefined ? 5 : elementInfo.paragraphSpace}px`
          }"
          @update="value => updateContent(value)"
          @mousedown="$event => handleSelectElement($event, false)"
          @touchstart="$event => handleSelectElement($event)"
        />

        <!-- 当字号过大且行高较小时，会出现文字高度溢出的情况，导致拖拽区域无法被选中，因此添加了以下节点避免该情况 -->
        <div class="drag-handler top"></div>
        <div class="drag-handler bottom"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { PPTElement } from '@/mocks/slides/type';
import useElementShadow from '@/views/components/elements/hooks/useElementShadow';
import ProsemirrorEditor from '@/views/components/elements/prosemirror-editor.vue';
import ElementOutline from '@/views/components/elements/element-outline.vue';
const props = defineProps({
  elementInfo: {
    type: Object as PropType<PPTElement>,
    required: true
  },
  selectElement: {
    type: Function as PropType<(e: MouseEvent | TouchEvent, element: PPTTextElement, canMove?: boolean) => void>,
    required: true
  }
});
const shadow = computed(() => props.elementInfo.shadow);
const { shadowStyle } = useElementShadow(shadow);

const handleSelectElement = (e: MouseEvent | TouchEvent, canMove = true) => {
  // debugger
  if (props.elementInfo.lock) return;
  e.stopPropagation();

  props.selectElement(e, props.elementInfo, canMove);
};
</script>
<style lang="scss" scoped>
.editable-element-text {
  position: absolute;

  &.lock .element-content {
    cursor: default;
  }
}
.rotate-wrapper {
  width: 100%;
  height: 100%;
}
.element-content {
  position: relative;
  padding: 10px;
  line-height: 1.5;
  word-break: break-word;
  cursor: move;

  .text {
    position: relative;
  }

  :deep(a) {
    cursor: text;
  }
}
.drag-handler {
  height: 10px;
  position: absolute;
  left: 0;
  right: 0;

  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
  }
}
</style>
