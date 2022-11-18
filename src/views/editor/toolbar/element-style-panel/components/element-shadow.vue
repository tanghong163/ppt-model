<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-14 14:34:46
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-14 16:03:48
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\components\element-shadow.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Row class="p-b-10">
      <Col :span="8" class="flex-center-left">启用阴影：</Col>
      <Col :span="6" :offset="10">
        <Switch v-model:checked="checked" />
      </Col>
    </Row>
    <Row class="p-b-10" v-if="checked">
      <Col :span="8" class="flex-center-left">水平阴影：</Col>
      <Col :span="14" :offset="2">
        <Slider v-model:value="value1" :min="-10" :max="10" :step="1" />
      </Col>
    </Row>
    <Row class="p-b-10" v-if="checked">
      <Col :span="8" class="flex-center-left">垂直阴影：</Col>
      <Col :span="14" :offset="2">
        <Slider v-model:value="value2" :min="-10" :max="10" />
      </Col>
    </Row>
    <Row class="p-b-10" v-if="checked">
      <Col :span="8" class="flex-center-left">模糊距离：</Col>
      <Col :span="14" :offset="2">
        <Slider v-model:value="value3" :max="20" />
      </Col>
    </Row>
    <Row class="p-b-10" v-if="checked">
      <Col :span="8" class="flex-center-left">阴影颜色:</Col>
      <Col :span="14" :offset="2">
        <PlatteButton :bgColor="bgColor"></PlatteButton>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import PlatteButton from '@/components/platte-button';

const props = defineProps({
  bgColor: {
    type: String,
    default: '#fff'
  }
});
const value1 = ref(1);
const value2 = ref(1);
const value3 = ref(2);
const checked = ref<Boolean>(false);
</script>
<style lang="scss" scoped></style>
