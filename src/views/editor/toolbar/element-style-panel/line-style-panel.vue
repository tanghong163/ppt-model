<template>
  <div>
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">线条样式：</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value1" :options="options1"></Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">线条颜色:</Col>
        <Col :span="14" :offset="2">
          <PlatteButton :bgColor="'#5b9bd5'"></PlatteButton>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">线条宽度：</Col>
        <Col :span="14" :offset="2" class="full">
          <InputNumber id="inputNumber" v-model:value="value2" :min="1" :max="10" />
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">起点样式：</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value3" :options="options3"></Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">终点样式：</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value4" :options="options4"></Select>
        </Col>
      </Row>
    </div>
    <Divider></Divider>
    <ElementShadow :bgColor="'#000'" />
  </div>
</template>

<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue';
import { ref } from 'vue';

import PlatteButton from '@/components/platte-button';
import ElementShadow from './components/element-shadow.vue';

const value1 = ref('solid');
const value2 = ref(2);
const value3 = ref('无');
const value4 = ref('无');
const options1 = ref<SelectProps['options']>([
  {
    value: 'solid',
    label: '实线'
  },
  {
    value: 'dash',
    label: '虚线'
  }
]);
const options3 = ref<SelectProps['options']>([
  {
    value: '无',
    label: '无'
  },
  {
    value: '箭头',
    label: '箭头'
  },
  {
    value: '圆点',
    label: '圆点'
  }
]);
const options4 = ref<SelectProps['options']>([
  {
    value: '无',
    label: '无'
  },
  {
    value: '箭头',
    label: '箭头'
  },
  {
    value: '圆点',
    label: '圆点'
  }
]);
</script>
<style lang="scss" scoped>
.full {
  .ant-select {
    width: 100%;
  }
  .ant-input-number {
    width: 100%;
  }
}
</style>
