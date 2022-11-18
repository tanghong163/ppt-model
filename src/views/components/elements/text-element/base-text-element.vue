<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 13:30:57
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-09-28 14:06:54
 * @FilePath: \ppt-model\src\views\components\elements\text-element\base-text-element.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="base-element-text"
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
      >
        <ElementOutline :width="elementInfo.width" :height="elementInfo.height" :outline="elementInfo.outline" />
        <div class="text ProseMirror-static" :style="cssVar" v-html="elementInfo.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { PPTTextElement } from '@/mocks/slides/type';
import useElementShadow from '../hooks/useElementShadow';
import ElementOutline from '../element-outline.vue';
const props = defineProps({
  elementInfo: {
    type: Object as PropType<PPTTextElement>,
    required: true
  }
});
const shadow = computed(() => props.elementInfo.shadow);
const { shadowStyle } = useElementShadow(shadow);

const cssVar = computed(
  () =>
    ({
      '--textIndent': `${props.elementInfo.textIndent || 0}px`,
      '--paragraphSpace': `${props.elementInfo.paragraphSpace === undefined ? 5 : props.elementInfo.paragraphSpace}px`
    } as StyleValue)
);
</script>
<style lang="scss" scoped>
.base-element-text {
  position: absolute;
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

  .text {
    position: relative;
  }
}
</style>
