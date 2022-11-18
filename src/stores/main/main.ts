/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-06 15:34:29
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-10 10:02:07
 * @FilePath: \ppt-model\src\stores\main\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';
import { mainState } from './type';
import { useSlidesStore } from '@/stores';
import { ToolbarStates } from '@/types/toolbar';
export const useMainStore = defineStore('main', {
  state: (): mainState => ({
    activeElementIdList: [], // 被选中的元素ID集合，包含 handleElementId
    activeGroupElementId: '', // 组合元素成员中，被选中可独立操作的元素ID
    canvasPercentage: 90, // 画布可视区域百分比
    canvasScale: 1, // 画布缩放比例（基于宽度1000px）
    handleElementId: '', // 正在操作的元素ID
    toolbarState: ToolbarStates.SLIDE_DESIGN, // 右侧工具栏状态
    editorAreaFocus: false, //  编辑区域聚焦
    selectedSlidesIndex: [0], // 当前被选中的页面索引集合
    thumbnailsFocus: false // 左侧导航缩略图区域聚焦
  }),
  getters: {
    // 当前处理的元素
    handleElement(state) {
      const slidesStore = useSlidesStore();
      const currentSlide = slidesStore.currentSlide;
      if (!currentSlide || !currentSlide.elements) return null;
      return currentSlide.elements.find(element => state.handleElementId === element.id) || null;
    }
  },
  actions: {
    setActiveElementIdList(activeElementIdList: string[]) {
      if (activeElementIdList.length === 1) {
        this.handleElementId = activeElementIdList[0];
      } else this.handleElementId = '';

      this.activeElementIdList = activeElementIdList;
    },
    setCanvasScale(scale: number) {
      this.canvasScale = scale;
    },
    setToolbarState(toolbarState: ToolbarStates) {
      this.toolbarState = toolbarState;
    },
    setActiveGroupElementId(activeGroupElementId: string) {
      this.activeGroupElementId = activeGroupElementId;
    },
    setEditorareaFocus(isFocus: boolean) {
      this.editorAreaFocus = isFocus;
    },
    setHandleElementId(handleElementId: string) {
      this.handleElementId = handleElementId;
    },
    setSelectedSlidesIndex(selectedSlidesIndex: number[]) {
      this.selectedSlidesIndex = selectedSlidesIndex;
    },
    setThumbnailsFocus(thumbnailsFocus: boolean) {
      this.thumbnailsFocus = thumbnailsFocus;
    }
  }
});
