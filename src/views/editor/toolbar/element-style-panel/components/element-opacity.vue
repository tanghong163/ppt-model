<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-14 15:36:56
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-14 16:04:22
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\components\element-opacity.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Row class="p-b-10">
      <Col :span="8" class="flex-center-left">不透明度：</Col>
      <Col :span="14" :offset="2">
        <Slider v-model:value="value1" :min="0" :max="1" :step="0.1" />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(1);
</script>
<style lang="scss" scoped></style>
