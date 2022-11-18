<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-17 09:26:13
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-25 11:13:47
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\chart-style-panel\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="row">
      <Row class="full">
        <Button @click="modalVisible = true">
          <template #icon><IconEdit /></template>
          编辑图标数据
        </Button>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <CheckboxGroup v-model:value="value1" :options="plainOptions1" />
      <CheckboxGroup v-model:value="value2" :options="plainOptions2" v-if="false" />
      <CheckboxGroup v-model:value="value3" :options="plainOptions3" v-if="false" />
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">图例:</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value4" :options="options4">
            <!-- <template #suffixIcon><IconRowHeight /></template> -->
          </Select>
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">背景填充:</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">网格颜色:</Col>
        <Col :span="14" :offset="2">
          <PlatteButton :bgColor="'#000000'"></PlatteButton>
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">主题配色:</Col>
        <Col :span="14" :offset="2">
          <PlatteButton :bgColor="'#000000'"></PlatteButton>
        </Col>
      </Row>
      <ButtonGroup>
        <Popover title="Title" trigger="click">
          <template #content>内容</template>
          <Button>推荐主题</Button>
        </Popover>
        <Button>
          <template #icon><IconPlus /></template>
          添加主题颜色
        </Button>
      </ButtonGroup>
    </div>
    <Divider />
    <ElementOutline />
  </div>
  <ChartDataEditor :modalVisible="modalVisible" @handle-modal-visibel="handleModelVisibel"></ChartDataEditor>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { SelectProps } from 'ant-design-vue';

import ChartDataEditor from './chart-data-editor.vue';
import PlatteButton from '@/components/platte-button';
import ElementOutline from '../components/element-outline.vue';
const modalVisible = ref<boolean>(false);
const plainOptions1 = ['条形图样式', '堆叠样式'];
const plainOptions2 = ['面积图样式', '散点图样式', '使用平滑曲线'];
const plainOptions3 = ['环形图样式'];
const options4 = ref<SelectProps['options']>([
  {
    value: '不显示',
    label: '不显示'
  },
  {
    value: '显示在上方',
    label: '显示在上方'
  },
  {
    value: '显示在下方',
    label: '显示在下方'
  }
]);
const state = reactive({
  value1: [],
  value2: ['面积图样式'],
  value3: ['环形图样式']
});
const value4 = ref('不显示');

const handleModelVisibel = value => {
  modalVisible.value = value;
};
</script>
<style lang="scss" scoped>
.full {
  .ant-btn {
    width: 100%;
  }
  .ant-select {
    width: 100%;
  }
}
</style>
