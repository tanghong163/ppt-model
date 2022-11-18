<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-13 08:51:14
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-29 14:57:07
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-position-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="symbol-panel">
    <div class="row">
      <Row class="p-b-10">层级:</Row>
      <Row class="p-b-10">
        <Col :span="12" class="full">
          <Button>
            <template #icon><IconSendToBack /></template>
            置顶
          </Button>
        </Col>
        <Col :span="12" class="full">
          <Button>
            <template #icon><IconBringToFrontOne /></template>
            置底
          </Button>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="12" class="full">
          <Button>
            <template #icon><IconBringToFront /></template>
            上移
          </Button>
        </Col>
        <Col :span="12" class="full">
          <Button>
            <template #icon><IconSentToBack /></template>
            下移
          </Button>
        </Col>
      </Row>
    </div>
    <Divider></Divider>
    <div class="row">
      <Row class="p-b-10">对齐:</Row>
      <Row class="p-b-10">
        <Col :span="8" class="full">
          <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="左对齐">
            <Button>
              <template #icon><IconAlignLeft /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="8" class="full">
          <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="水平居中">
            <Button>
              <template #icon><IconAlignVertically /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="8" class="full">
          <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="右对齐">
            <Button>
              <template #icon><IconAlignRight /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="full">
          <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="上对齐">
            <Button>
              <template #icon><IconAlignTop /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="8" class="full">
          <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="垂直居中对齐">
            <Button>
              <template #icon><IconAlignHorizontally /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="8" class="full">
          <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="下对齐">
            <Button>
              <template #icon><IconAlignBottom /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
    <Divider></Divider>
    <div class="row">
      <Row :gutter="2" class="p-b-10">
        <Col span="12" class="full"><InputNumber v-model:value="value1" prefix="水平:"></InputNumber></Col>
        <Col span="12" class="full"><InputNumber v-model:value="value2" prefix="垂直:"></InputNumber></Col>
      </Row>
      <Row :gutter="2">
        <Col span="12" class="full"><InputNumber v-model:value="value3" prefix="宽度:"></InputNumber></Col>
        <Col span="12" class="full"><InputNumber v-model:value="value4" prefix="高度:"></InputNumber></Col>
      </Row>
    </div>
    <Divider></Divider>
    <div class="row">
      <Row :gutter="2" class="p-b-10">
        <Col span="12" class="full"><InputNumber v-model:value="rotateValue" prefix="旋转:"></InputNumber></Col>
        <Col span="6" class="full">
          <Button type="text" @click="handleContrarotate">
            <template #icon><IconRotate /></template>
            -45°
          </Button>
        </Col>
        <Col span="6" class="full">
          <Button type="text" @click="handleClockwiseRotate">
            <template #icon><IconRotate :style="{ transform: 'rotateY(180deg)' }" /></template>
            +45°
          </Button>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref<number>(5);
const value2 = ref<number>(6);
const value3 = ref<number>(7);
const value4 = ref<number>(8);
const rotateValue = ref<number>(0);

const handleContrarotate = () => {
  rotateValue.value = rotateValue.value === -180 ? -180 : rotateValue.value - 45;
};
const handleClockwiseRotate = () => {
  rotateValue.value = rotateValue.value === 180 ? 180 : rotateValue.value + 45;
};
</script>
<style lang="scss" scoped>
.full {
  .ant-btn {
    width: 100%;
  }
  .ant-input-number {
    width: 100%;
  }
}
</style>
