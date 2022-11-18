<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-11 15:10:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-21 11:42:52
 * @FilePath: \ppt-model\src\components\platte-button\src\platte-button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="panel">
    <Popover title="Title" trigger="click">
      <template #content>
        <span>面板</span>
      </template>
      <Button block>
        <!-- <div class="color-obveser" :style="{ 'background-color': '#8DB9E2' }"></div> -->
        <div class="color-obveser" :style="{ 'background-color': `${bgColor}` }"></div>
        <!-- <template #icon> -->
        <IconPlatte size="10" fill="#C7C7C7" />
        <!-- </template> -->
      </Button>
    </Popover>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: '#fff'
  }
});
</script>
<style lang="scss" scoped>
.panel {
  .ant-btn {
    padding-right: 2px;
    padding-left: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .color-obveser {
      flex: 1;
      height: 20px;
      // background-color: aqua;
    }
    .i-icon {
      margin-left: 2px;
    }
  }
}
</style>
