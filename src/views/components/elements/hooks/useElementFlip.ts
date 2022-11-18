/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 10:44:56
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 09:15:55
 * @FilePath: \ppt-model\src\views\components\elements\hooks\useElementFlip.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, Ref } from 'vue';

// 计算元素的翻转样式
export default (flipH: Ref<boolean | undefined>, flipV: Ref<boolean | undefined>) => {
  const flipStyle = computed(() => {
    let style = '';

    if (flipH.value && flipV.value) style = 'rotateX(180deg) rotateY(180deg)';
    else if (flipV.value) style = 'rotateX(180deg)';
    else if (flipH.value) style = 'rotateY(180deg)';

    return style;
  });

  return {
    flipStyle
  };
};
