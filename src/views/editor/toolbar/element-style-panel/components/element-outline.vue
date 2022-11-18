<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-14 15:36:16
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-14 16:09:19
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\components\element-outline.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Row class="p-b-10">
      <Col :span="8" class="flex-center-left">启用边框：</Col>
      <Col :span="6" :offset="10">
        <Switch v-model:checked="checked" />
      </Col>
    </Row>
    <Row class="p-b-10" v-if="checked">
      <Col :span="8" class="flex-center-left">边框样式:</Col>
      <Col :span="14" :offset="2" class="full">
        <Select :value="value1" :options="options1"></Select>
      </Col>
    </Row>
    <Row class="p-b-10" v-if="checked">
      <Col :span="8" class="flex-center-left">边框颜色:</Col>
      <Col :span="14" :offset="2">
        <PlatteButton :bgColor="bgColor"></PlatteButton>
      </Col>
    </Row>
    <Row class="p-b-10" v-if="checked">
      <Col :span="8" class="flex-center-left">边框粗细：</Col>
      <Col :span="14" :offset="2" class="full">
        <InputNumber id="inputNumber" :value="value2" :min="1" :max="10" />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';

import PlatteButton from '@/components/platte-button';

const props = defineProps({
  bgColor: {
    type: String,
    default: '#fff'
  }
});
const value1 = ref('实线边框');
const value2 = ref(1);
const checked = ref<Boolean>(false);

const options1 = ref<SelectProps['options']>([
  {
    value: '实线边框',
    label: '实线边框'
  },
  {
    value: '虚线边框',
    label: '虚线边框'
  }
]);
</script>
<style lang="scss" scoped>
.full {
  .ant-select {
    width: 100%;
  }
  .ant-btn {
    width: 100%;
    border-radius: 0px;
  }
  .ant-input-number {
    width: 100%;
  }
}
.ant-col-5 {
  // width: 20%;
  flex-basis: 20%;
}
</style>
