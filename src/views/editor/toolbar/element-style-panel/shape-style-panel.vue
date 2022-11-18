<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-14 08:29:26
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-17 08:41:08
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\shape-style-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="row">
      <Row class="p-b-10" :gutter="16">
        <Col :span="12" class="full">
          <Select v-model:value="value1" :options="options1"></Select>
        </Col>
        <Col :span="12" class="full">
          <PlatteButton :bgColor="'#5b9bd5'"></PlatteButton>
        </Col>
      </Row>
      <ElementFlip />
    </div>
    <Divider />
    <ElementOutline />
    <Divider />
    <ElementShadow :bgColor="'#000'" />
    <Divider />
    <ElementOpacity />
  </div>
</template>

<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue';
import { ref } from 'vue';

import PlatteButton from '@/components/platte-button';
import ElementOutline from './components/element-outline.vue';
import ElementShadow from './components/element-shadow.vue';
import ElementOpacity from './components/element-opacity.vue';
import ElementFlip from './components/element-flip.vue';
const value1 = ref('纯色填充');

const options1 = ref<SelectProps['options']>([
  {
    value: '纯色填充',
    label: '纯色填充'
  },
  {
    value: '渐变填充',
    label: '渐变填充'
  }
]);
</script>
<style lang="scss" scoped>
.full {
  .ant-btn {
    width: 100%;
    border-radius: 0;
  }
  .ant-select {
    width: 100%;
  }
  .ant-input-number {
    width: 100%;
  }
}
</style>
