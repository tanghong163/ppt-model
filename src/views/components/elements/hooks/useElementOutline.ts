/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 10:55:02
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 09:32:38
 * @FilePath: \ppt-model\src\views\components\elements\hooks\useElementOutline.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, Ref } from 'vue';
import { PPTElementOutline } from '@/mocks/slides/type';

// 计算边框相关属性值，主要是对默认值的处理
export default (outline: Ref<PPTElementOutline | undefined>) => {
  const outlineWidth = computed(() => outline.value?.width ?? 0);
  const outlineStyle = computed(() => outline.value?.style || 'solid');
  const outlineColor = computed(() => outline.value?.color || '#d14424');

  return {
    outlineWidth,
    outlineStyle,
    outlineColor
  };
};
