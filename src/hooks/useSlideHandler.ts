/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-08 10:52:33
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 10:57:07
 * @FilePath: \ppt-model\src\hooks\useSlideHandler.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { computed, reactive } from 'vue';
import { storeToRefs } from 'pinia';

import { nanoid } from 'nanoid';

import { encrypt } from '@/utils/crypto';
import { copyText, readClipboard } from '@/utils/clipboard';

import { useMainStore, useSlidesStore } from '@/stores';
import usePasteTextClipboardData from '@/hooks/usePasteTextClipboardData';
import { Slide } from '@/types/slides';
export default () => {
  const slidesStore = useSlidesStore();
  const { slides, slideIndex, storeSlide } = storeToRefs(slidesStore);
  const { setSlideIndex, setSlides, setStoreSlide, addSlides } = slidesStore;

  const mainStore = useMainStore();
  const { selectedSlidesIndex } = storeToRefs(mainStore);
  const { setSelectedSlidesIndex, setThumbnailsFocus } = mainStore;

  const { pasteTextClipboardData } = usePasteTextClipboardData();
  // 选择的缩略图幻灯片
  const selectedSlides = computed(() => slides.value.filter((item, index) => selectedSlidesIndex.value.includes(index)));
  // 新增空白幻灯片
  const createSlide = () => {
    const emptySlide: Slide = {
      id: nanoid(10),
      elements: []
    };
    addSlides(emptySlide);
  };
  // 剪切幻灯片(先复制后删除)
  const cutSlide = () => {
    copySlide();
    removeSlide();
  };
  // // 复制幻灯片; 使用pinia来存储本在剪切板的数据不妥
  // const copySlide = () => {
  //   let newStoreSlide = slides.value.filter((item, index) => {
  //     return selectedSlidesIndex.value.includes(index);
  //   });
  //   setStoreSlide(newStoreSlide);
  // };
  // // 粘贴幻灯片
  // const pasteSlide = () => {
  //   let newSlides = [...slides.value];
  //   newSlides.splice(slideIndex.value + 1, 0, ...storeSlide.value);
  //   setSlides(newSlides);
  // };
  // 复制幻灯片; 将需要复制的数据(选中的侧边缩略图)加密复制到剪切板
  const copySlide = () => {
    // 加密数据
    const text = encrypt(
      JSON.stringify({
        type: 'slide',
        data: selectedSlides.value
      })
    );
    copyText(text).then(e => {
      // 聚焦在左侧缩略图处, 即后续会粘贴的位置
      mainStore.setThumbnailsFocus(true);
    });
  };
  // 粘贴幻灯片
  const pasteSlide = () => {
    readClipboard().then(text => {
      pasteTextClipboardData(text);
    });
  };
  // 全选幻灯片
  const selectAllSlide = () => {
    // Array(2) 与new Array(2) 的结果 [empty X 2]
    // Array.from()第二个参数会遍历第一个参数数组
    let newSelectedSlidesIndex = Array.from(Array(slides.value.length), (item, index) => index);
    setSelectedSlidesIndex(newSelectedSlidesIndex);
  };
  // 复制粘贴幻灯片
  const duplicateSlide = () => {
    let newStoreSlide = slides.value.filter((item, index) => {
      return selectedSlidesIndex.value.includes(index);
    });
    let newSlides = [...slides.value];
    newSlides.splice(slideIndex.value + 1, 0, ...newStoreSlide);
    setSlides(newSlides);
  };
  // 删除幻灯片
  const removeSlide = () => {
    const obj = reactive({
      whiteSlide: {
        id: '',
        elements: []
      }
    });
    let newSlides = slides.value.filter((item, idx) => {
      return !selectedSlidesIndex.value.includes(idx);
    });
    if (newSlides.length) {
      setSlides(newSlides);
    } else {
      newSlides.push(obj.whiteSlide);
      setSlides(newSlides);
    }
  };

  return { createSlide, cutSlide, copySlide, pasteSlide, removeSlide, duplicateSlide, selectAllSlide };
};
