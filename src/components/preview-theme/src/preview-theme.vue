<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-12 10:51:58
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-12 11:44:25
 * @FilePath: \ppt-model\src\components\preview-theme\src\preview-theme.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="p-10-20-10-10 cell">
    <div class="cell-y">
      <div class="flex-col-sb-center" :style="{ height: '100%' }">
        <Button type="primary" danger size="small" :style="{ width: '75px' }">应用</Button>
        <Button type="primary" danger size="small" :style="{ width: '75px' }">应用全局</Button>
      </div>
    </div>
    <div class="p-b-10 theme-title">文字Aa</div>
    <div class="gutter-example">
      <Row :gutter="2" class="p-b-10">
        <Col class="gutter-row" :span="4">
          <div class="gutter-box box-one"></div>
        </Col>
        <Col class="gutter-row" :span="4">
          <div class="gutter-box box-two"></div>
        </Col>
        <Col class="gutter-row" :span="4">
          <div class="gutter-box box-three"></div>
        </Col>
        <Col class="gutter-row" :span="4">
          <div class="gutter-box box-four"></div>
        </Col>
        <Col class="gutter-row" :span="4">
          <div class="gutter-box box-five"></div>
        </Col>
        <Col class="gutter-row" :span="4">
          <div class="gutter-box box-six"></div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  colorSet: {
    type: Array,
    required: true
  },
  cellBackgroundColor: {
    type: String,
    default: '#fff'
  }
});
</script>
<style lang="scss" scoped>
.cell {
  cursor: pointer;
  background-color: v-bind('cellBackgroundColor');
}
.cell:hover .cell-y {
  display: block;
  z-index: 2;
}
.cell {
  .theme-title {
    font-size: 16px;
  }
  .cell-y {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: none;
  }
}
.gutter-example {
  width: 90%;
}
.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
.box-one {
  background-color: v-bind('colorSet[0]');
}
.box-two {
  background-color: v-bind('colorSet[1]');
}
.box-three {
  background-color: v-bind('colorSet[2]');
}
.box-four {
  background-color: v-bind('colorSet[3]');
}
.box-five {
  background-color: v-bind('colorSet[4]');
}
.box-six {
  background-color: v-bind('colorSet[5]');
}
</style>
