<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-04 10:21:36
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 10:55:20
 * @FilePath: \ppt-model\src\components\context-menu\src\context-menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="mask" @mousedown="removeContextmenu()" @contextmenu.prevent="removeContextmenu()"></div>
  <div class="contextmenu" :style="{ left: style.x + 'px', top: style.y + 'px' }" @contextmenu.prevent>
    <ContextMenuItem :menus="menus" :handleClickMenuItem="handleClickMenuItem"></ContextMenuItem>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue-demi';
import ContextMenuItem from './context-menu-item.vue';
import { ContextmenuItem } from '@/types/contextmenu';

const props = defineProps({
  axis: {
    type: Object as PropType<Axis>,
    required: true
  },
  el: {
    type: Object as PropType<HTMLElement>,
    required: true
  },
  menus: {
    type: Object as PropType<ContextmenuItem[]>,
    required: true
  },
  removeContextmenu: {
    type: Function,
    required: true
  }
});

const style = computed(() => {
  const { x, y } = props.axis;
  const MENU_ITEM_WIDTH = 160;
  const MENU_ITEN_HEIGHT = 30;
  const DIVIDER = 11;
  const PADDING = 5;

  const menusCount = props.menus.filter(menu => !(menu.divider | menu.hide)).length;
  const dividerCount = props.menus.filter(menu => menu.divider).length;

  const menusHeight = menusCount * MENU_ITEN_HEIGHT + dividerCount * DIVIDER + PADDING * 2;
  const menusWidth = MENU_ITEM_WIDTH;

  const screenWidth = document.body.clientWidth;
  const screenHeight = document.body.clientHeight;

  return {
    x: screenWidth <= x + menusWidth ? x - menusWidth : x,
    y: screenHeight <= y + menusHeight ? y - menusHeight : y
  };
});

const handleClickMenuItem = (item: ContextmenuItem) => {
  if (item.disable) return;
  if (item.children && !item.handler) return;
  if (item.handler) item.handler(props.el);
  props.removeContextmenu();
};
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
}
.contextmenu {
  position: fixed;
  z-index: 9999;
}
</style>
