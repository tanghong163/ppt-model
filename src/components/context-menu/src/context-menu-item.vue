<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-04 10:23:10
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 10:22:43
 * @FilePath: \ppt-model\src\components\context-menu\src\context-menu-item.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ul class="menu-content">
    <template v-for="(menu, index) in menus">
      <div v-if="menu.divider" class="divider"></div>
      <li v-else="!menu.hide" class="menu-item" @click.stop="handleClickMenuItem(menu)">
        <div class="text">
          <span>{{ menu.text }}</span>
          <span v-if="menu.subText">{{ menu.subText }}</span>
          <span class="arrow" v-if="menu.children && menu.children.length"></span>
          <ContextMenuItem
            :menus="menu.children"
            v-if="menu.children && menu.children.length"
            class="sub-menu"
            :handleClickMenuItem="handleClickMenuItem"
          ></ContextMenuItem>
        </div>
        <!--以下组件不能使用，因为右键菜单项在app外面的body上 -->
        <!-- <Divider v-if="menu.divider" style="height: 1px; background-color: #41464b"></Divider> -->
        <!-- <Divider /> -->
      </li>
    </template>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps({
  menus: {
    type: Object as PropType<ContextmenuItem[]>,
    required: true
  },
  handleClickMenuItem: {
    type: Function,
    required: true
  }
});
</script>
<style lang="scss" scoped>
$menuWidth: 170px;
$menuHeight: 30px;
$subMenuWidth: 120px;

.menu-content {
  width: $menuWidth;
  padding: 5px 0;
  background: #fff;
  border: 1px solid $borderColor;
  box-shadow: $boxShadow;
  border-radius: 2px;
  list-style: none;
  margin: 0;
}
.menu-item {
  position: relative;
  padding: 0 20px;
  height: $menuHeight;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 10px;
  // 切记这个&:之间是没有空格的
  &:hover {
    cursor: pointer;
    background-color: #ffa488;
    .sub-menu {
      display: block;
    }
  }
  .text {
    display: flex;
    width: 100%;
    justify-content: space-between;
    & :nth-child(2) {
      color: #b0b0b0;
    }
  }
  // 向右箭头
  .arrow {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #888;
    border-left-width: 0;
    border-bottom-width: 0;
    transform: rotate(45deg);
    // transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  }
}
.divider {
  height: 1px;
  width: 80%;
  margin: 5px auto;
  overflow: hidden;
  background-color: #e5e5e5;
  &:hover {
    cursor: pointer;
    background-color: #ffa488;
  }
}
.sub-menu {
  position: absolute;
  left: 170px;
  display: none;
}
</style>
