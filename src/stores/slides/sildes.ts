/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-27 14:30:13
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-10 10:03:04
 * @FilePath: \ppt-model\src\stores\slides\sildes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';

import { slides } from '@/mocks/slides/slides';
import { Slide, PPTElement } from '@/types/slides';
import { SlidesState } from './type';
export const useSlidesStore = defineStore('slides', {
  state: (): SlidesState => ({
    slides: slides, // 幻灯片页面数据
    slideIndex: 0, // 当前页面索引
    viewportRatio: 0.5625, // 可视区域比例，默认16:9; 即宽:高
    storeSlide: [] // 剪切的幻灯片
  }),

  getters: {
    currentSlide: state => state.slides[state.slideIndex]
  },

  actions: {
    setSlides(slides: Slide[]) {
      this.slides = slides;
    },
    addSlides(slide: Slide[] | Slide) {
      const slides = Array.isArray(slide) ? slide : [slide];
      const addIndex = this.slideIndex + 1;
      this.slides.splice(addIndex, 0, ...slides);
      this.slideIndex = addIndex;
    },
    setSlideIndex(slideIndex: number) {
      this.slideIndex = slideIndex;
    },
    setStoreSlide(slide: Slide[]) {
      this.storeSlide = slide;
    },
    updateSlide(props: Partial<Slide>) {
      const slideIndex = this.slideIndex;
      this.slides[slideIndex] = { ...this.slides[slideIndex], ...props };
    },
    addElement(element: PPTElement | PPTElement[]) {
      const elements = Array.isArray(element) ? element : [element];
      const currentSlideEls = this.slides[this.slideIndex].elements;
      const newEls = [...currentSlideEls, ...elements];
      this.slides[this.slideIndex].elements = newEls;
    }
  }
});
