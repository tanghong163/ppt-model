/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-29 16:02:05
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-02 15:06:15
 * @FilePath: \ppt-model\src\hooks\useCreateElement.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { storeToRefs } from 'pinia';
import { getImageSize } from '@/utils/images';
import { useSlidesStore } from '@/stores/index';
import { VIEWPORT_SIZE } from '@/configs/canvas';
import { PPTElement } from '@/types/slides';
import { nanoid } from 'nanoid';
const slidesStore = useSlidesStore();
const { viewportRatio } = storeToRefs(slidesStore);
/**
 * @description: 创建页面图片元素
 * @param {string} src 图片DataURL地址
 * @return {*}
 */
const createImageElement = async (src: string) => {
  // getImageSize(src).then
  let { width, height } = await getImageSize(src);
  const scale = height / width;

  if (scale < viewportRatio.value && width > VIEWPORT_SIZE) {
    width = VIEWPORT_SIZE;
    height = width * scale;
  } else if (height > VIEWPORT_SIZE * viewportRatio.value) {
    height = VIEWPORT_SIZE * viewportRatio.value;
    width = height / scale;
  }
  createElement({
    type: 'image',
    id: nanoid(10),
    src,
    width,
    height,
    left: (VIEWPORT_SIZE - width) / 2,
    top: (VIEWPORT_SIZE * viewportRatio.value - height) / 2,
    fixedRatio: true,
    rotate: 0
  });
};

/**
 * @description:创建（插入）一个元素并将其设置为被选中元素
 * @param {PPTElement} element 元素
 * @return {*}
 */
const createElement = (element: PPTElement) => {
  slidesStore.addElement(element);
};
export { createImageElement, createElement };
