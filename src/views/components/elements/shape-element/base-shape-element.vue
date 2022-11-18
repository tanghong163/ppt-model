<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 10:18:22
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-21 13:34:38
 * @FilePath: \ppt-model\src\views\components\elements\shape-element\base-shape-element.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="base-element-shape"
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
          opacity: elementInfo.opacity,
          filter: shadowStyle ? `drop-shadow(${shadowStyle})` : '',
          transform: flipStyle,
          color: text.defaultColor,
          fontFamily: text.defaultFontName
        }"
      >
        <svg overflow="visible" :width="elementInfo.width" :height="elementInfo.height">
          <!-- <defs v-if="elementInfo.gradient">
            <GradientDefs
              :id="`base-gradient-${elementInfo.id}`"
              :type="elementInfo.gradient.type"
              :color1="elementInfo.gradient.color[0]"
              :color2="elementInfo.gradient.color[1]"
              :rotate="elementInfo.gradient.rotate"
            />
          </defs> -->
          <g
            :transform="`scale(${elementInfo.width / elementInfo.viewBox[0]}, ${
              elementInfo.height / elementInfo.viewBox[1]
            }) translate(0,0) matrix(1,0,0,1,0,0)`"
          >
            <path
              vector-effect="non-scaling-stroke"
              stroke-linecap="butt"
              stroke-miterlimit="8"
              :d="elementInfo.path"
              :fill="elementInfo.gradient ? `url(#base-gradient-${elementInfo.id})` : elementInfo.fill"
              :stroke="outlineColor"
              :stroke-width="outlineWidth"
              :stroke-dasharray="outlineStyle === 'dashed' ? '10 5' : '0 0'"
            ></path>
          </g>
        </svg>

        <div class="shape-text" :class="text.align">
          <div class="ProseMirror-static" v-html="text.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { PPTShapeElement, ShapeText } from '@/mocks/slides/type';
import useElementShadow from '../hooks/useElementShadow';
import useElementFlip from '../hooks/useElementFlip';
import useElementOutline from '../hooks/useElementOutline';
const props = defineProps({
  elementInfo: {
    type: Object as PropType<PPTShapeElement>,
    require: true
  }
});

const shadow = computed(() => props.elementInfo?.shadow);
const { shadowStyle } = useElementShadow(shadow);

const flipH = computed(() => props.elementInfo.flipH);
const flipV = computed(() => props.elementInfo.flipV);
const { flipStyle } = useElementFlip(flipH, flipV);

const outline = computed(() => props.elementInfo?.outline);
const { outlineWidth, outlineStyle, outlineColor } = useElementOutline(outline);

const text = computed<ShapeText>(() => {
  const defaultText: ShapeText = {
    content: '',
    defaultFontName: '微软雅黑',
    defaultColor: '#000',
    align: 'middle'
  };
  if (!props.elementInfo.text) return defaultText;
  return props.elementInfo.text;
});
</script>
<style lang="scss" scoped>
.base-element-shape {
  position: absolute;
}
.rotate-wrapper {
  width: 100%;
  height: 100%;
}
.element-content {
  width: 100%;
  height: 100%;
  position: relative;

  svg {
    transform-origin: 0 0;
    overflow: visible;
  }
}
.shape-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  line-height: 1.2;
  word-break: break-word;

  &.top {
    justify-content: flex-start;
  }
  &.middle {
    justify-content: center;
  }
  &.bottom {
    justify-content: flex-end;
  }
}
</style>
