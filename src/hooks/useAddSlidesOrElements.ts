/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-10 08:44:39
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-10 10:06:48
 * @FilePath: \ppt-model\src\hooks\useAddSlidesOrElements.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { storeToRefs } from 'pinia';
import { Slide } from '@/types/slides';
import { useSlidesStore, useMainStore } from '@/stores';

export default () => {
  const slidesStore = useSlidesStore();
  const { slideIndex } = storeToRefs(slidesStore);
  const { setSlides, addSlides } = slidesStore;

  const mainStore = useMainStore();
  const { setSelectedSlidesIndex } = mainStore;
  // 将选中的幻灯片添加
  const addSlidesFromData = (slides: Slide[]) => {
    addSlides(slides);
    setSelectedSlidesIndex([slideIndex.value]);
  };
  return {
    addSlidesFromData
  };
};
