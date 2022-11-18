<template>
  <div>
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">图标颜色：</Col>
        <Col :span="14" :offset="2">
          <PlatteButton :bgColor="'#5b9bd5'"></PlatteButton>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">自动播放：</Col>
        <Col :span="6" :offset="10">
          <Switch v-model:checked="checked1" />
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">循环播放：</Col>
        <Col :span="6" :offset="10">
          <Switch v-model:checked="checked1" />
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PlatteButton from '@/components/platte-button';
import { ref } from 'vue';

const checked1 = ref<Boolean>(false);
const checked2 = ref<Boolean>(false);
</script>
<style lang="scss" scoped></style>
