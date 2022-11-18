<template>
  <div class="thumbnails" v-contextmenu="contextmenusThumbnails" @mousedown="handleThumbnailsFocus(true)">
    <div class="add-slide">
      <Button type="text" @click="createSlide">
        <template #icon>
          <IconPlus class="icon" />
        </template>
        <span>添加幻灯片</span>
      </Button>
      <!-- <div class="btn">
        <IconPlus class="icon" />
        添加幻灯片
      </div> -->
      <Popover trigger="click" placement="bottomLeft" v-model:visible="presetLayoutPopoverVisible">
        <template #content>
          <LayoutPool
            @select="
              slide => {
                createSlideByTemplate(slide);
                presetLayoutPopoverVisible = false;
              }
            "
          />
        </template>
        <div class="select-btn"><IconDown /></div>
      </Popover>
    </div>
    <!-- draggable第三方组件绑定了modelvalue属性的slides值,  -->
    <draggable class="thumbnail-list" :modelValue="slides" :animation="300" :scroll="true" :scrollSensitivity="50" :setData="null" itemKey="id">
      <!-- #item插值取得就是slides里面的元素 -->
      <template #item="{ element, index }">
        <div
          class="thumbnail-item"
          :class="{ active: slideIndex === index, selected: selectedSlidesIndex.includes(index) }"
          v-contextmenu="contextmenusThumbnailItem"
          @mousedown="$event => handleClickSlideThumbnail($event, index)"
        >
          <div class="label" :class="{ 'offset-left': index >= 99 }">
            {{ fillDigit(index + 1, 2) }}
          </div>
          <ThumbnailSlide class="thumbnail" :slide="element" :size="120" :visible="index < slidesLoadLimit" />
        </div>
      </template>
    </draggable>
    <div class="page-number">幻灯片 0 / 0</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from 'vue';

import draggable from 'vuedraggable';

import { storeToRefs } from 'pinia';
import { useSlidesStore, useKeyboardStore, useMainStore } from '@/stores';

import { fillDigit } from '@/utils/common';

import useLoadSlides from '@/hooks/useLoadSlides';
import useSlideHandler from '@/hooks/useSlideHandler';

import { ContextmenuItem } from '@/types/contextmenu';
import { PPTElement } from '@/types/slides';

import LayoutPool from './layout-pool.vue';
import ThumbnailSlide from '@/components/thumbnail-slide/index.vue';

const presetLayoutPopoverVisible = ref(false);
// const selectedSlidesIndex = ref([]);

const mainStore = useMainStore();
const { selectedSlidesIndex: _selectedSlidesIndex, thumbnailsFocus } = storeToRefs(mainStore);
const { setSelectedSlidesIndex, setThumbnailsFocus } = mainStore;

const slidesStore = useSlidesStore();
const { slides, slideIndex } = storeToRefs(slidesStore);
const { setSlideIndex, setSlides } = slidesStore;

const keyboardStore = useKeyboardStore();
const { ctrlKeyState, shiftKeyState } = storeToRefs(keyboardStore);

const { slidesLoadLimit } = useLoadSlides();

const { createSlide, selectAllSlide, removeSlide, cutSlide, copySlide, pasteSlide, duplicateSlide } = useSlideHandler();
// 右键缩略图侧边栏非点击幻灯片时的菜单项
const contextmenusThumbnails = (): ContextmenuItem[] => {
  return [
    {
      text: '粘贴',
      subText: 'Ctrl + V'
      // handler: pasteSlide,
    },
    {
      text: '全选',
      subText: 'Ctrl + A',
      handler: selectAllSlide
    },
    {
      text: '新建页面',
      subText: 'Enter',
      handler: createSlide
    },
    {
      text: '幻灯片放映',
      subText: 'F5'
      // handler: enterScreeningFromStart,
    }
  ];
};
// 右键缩略图侧边栏点击幻灯片时的菜单项
const contextmenusThumbnailItem = (): ContextmenuItem[] => {
  return [
    {
      text: '剪切',
      subText: 'Ctrl + X',
      handler: cutSlide
    },
    {
      text: '复制',
      subText: 'Ctrl + C',
      handler: copySlide
    },
    {
      text: '粘贴',
      subText: 'Ctrl + V',
      handler: pasteSlide
    },
    {
      text: '全选',
      subText: 'Ctrl + A',
      handler: selectAllSlide
    },
    { divider: true },
    {
      text: '新建页面',
      subText: 'Enter',
      handler: createSlide
    },
    {
      text: '复制页面',
      subText: 'Ctrl + D',
      handler: duplicateSlide
    },
    {
      text: '删除页面',
      subText: 'Delete',
      handler: removeSlide
    },
    { divider: true },
    {
      text: '从当前放映',
      subText: 'Shift + F5'
    }
  ];
};
// 选择的幻灯片集合
const selectedSlidesIndex = computed(() => {
  return [..._selectedSlidesIndex.value];
});
// 点击缩略图
const handleClickSlideThumbnail = (e: MouseEvent, index: number) => {
  console.log(selectedSlidesIndex.value);
  // debugger;
  const isMultiSelected = selectedSlidesIndex.value.length > 1;
  // 当选中幻灯片集合存在时,e.button 的取值有(0、1、2、3、4)分别是(鼠标左键、鼠标滚轮中建、鼠标右键、浏览器后退按钮、浏览器前进按钮)
  if (isMultiSelected && selectedSlidesIndex.value.includes(index) && e.button !== 0) {
    return;
  }
  if (ctrlKeyState.value) {
    // slideIndex需要在selectedSlidesIndex里面
    // 当点击的幻灯片与当前显示的幻灯片是否相等时
    if (slideIndex.value === index) {
      // 当只有一个幻灯片选中时，就不需要按ctrl键时释放
      if (!isMultiSelected) return;
      // 当前点击的幻灯片存在幻灯片集合中;释放点击的幻灯片后更新幻灯片集合；并且将显示的幻灯片更新为幻灯片集合中的第一项
      const newSelectedSlidesIndex = selectedSlidesIndex.value.filter(item => item !== index);
      setSelectedSlidesIndex(newSelectedSlidesIndex);
      setSlideIndex(newSelectedSlidesIndex[0]);
    } else {
      if (!selectedSlidesIndex.value.includes(index)) {
        const newSelectedSlidesIndex = [...selectedSlidesIndex.value, index];
        setSelectedSlidesIndex(newSelectedSlidesIndex);
        setSlideIndex(index);
      } else {
        const newSelectedSlidesIndex = selectedSlidesIndex.value.filter(item => item !== index);
        setSelectedSlidesIndex(newSelectedSlidesIndex);
      }
    }
  } else if (shiftKeyState.value) {
    if (slideIndex.value === index && !isMultiSelected) return;

    let minSelectedSlidesIndex = Math.min(...selectedSlidesIndex.value);
    let maxSelectedSlidesIndex = index;

    let newSelectedSlidesIndex = [];

    if (index < minSelectedSlidesIndex) {
      minSelectedSlidesIndex = index;
      maxSelectedSlidesIndex = Math.max(...selectedSlidesIndex.value);
    }
    for (let i = minSelectedSlidesIndex; i <= maxSelectedSlidesIndex; i++) {
      newSelectedSlidesIndex.push(i);
      setSelectedSlidesIndex(newSelectedSlidesIndex);
      setSlideIndex(index);
    }
  } else {
    let newSelectedSlidesIndex = [];
    newSelectedSlidesIndex.push(index);
    setSelectedSlidesIndex(newSelectedSlidesIndex);
    setSlideIndex(index);
  }
};
// 聚焦在缩略图侧边栏的处理
const handleThumbnailsFocus = (focus: boolean) => {
  if (thumbnailsFocus.value === focus) return;
  setThumbnailsFocus(focus);
  if (!focus) setSelectedSlidesIndex([slideIndex.value]);
};
</script>
<style lang="scss" scoped>
.thumbnails {
  border-right: solid 1px $borderColor;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  user-select: none;
}
.add-slide {
  height: 40px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid $borderColor;
  cursor: pointer;

  .btn {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: $lightGray;
    }
  }
  .select-btn {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid $borderColor;

    &:hover {
      background-color: $lightGray;
    }
  }

  .icon {
    margin-right: 3px;
    font-size: 14px;
  }
}
.thumbnail-list {
  padding: 5px 0;
  flex: 1;
  overflow: auto;
}
.thumbnail-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  .thumbnail {
    outline: 1px solid rgba($color: $themeColor, $alpha: 0.15);
  }

  &.active {
    .label {
      color: $themeColor;
    }
    .thumbnail {
      outline-color: $themeColor;
    }
  }
  &.selected {
    .thumbnail {
      outline-color: $themeColor;
    }
  }
}
.label {
  font-size: 12px;
  color: #999;
  width: 20px;
  cursor: grab;

  &.offset-left {
    position: relative;
    left: -4px;
  }

  &:active {
    cursor: grabbing;
  }
}
.page-number {
  height: 40px;
  font-size: 12px;
  border-top: 1px solid $borderColor;
  line-height: 40px;
  text-align: center;
  color: #666;
}
</style>
