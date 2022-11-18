/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 10:41:14
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 08:55:12
 * @FilePath: \ppt-model\src\views\components\elements\hooks\useElementShadow.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, Ref } from 'vue';
import { PPTElementShadow } from '@/mocks/slides/type';

// 计算元素的阴影样式
export default (shadow: Ref<PPTElementShadow | undefined>) => {
  const shadowStyle = computed(() => {
    if (shadow.value) {
      const { h, v, blur, color } = shadow.value;
      return `${h}px ${v}px ${blur}px ${color}`;
    }
    return '';
  });

  return {
    shadowStyle
  };
};
