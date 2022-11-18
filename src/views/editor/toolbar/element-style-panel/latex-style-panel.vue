<template>
  <div>
    <Row class="full">
      <Button @click="handleLatexModal">编辑LateX</Button>
    </Row>
    <Divider />
    <Row class="p-b-10">
      <Col :span="8" class="flex-center-left">颜色：</Col>
      <Col :span="14" :offset="2">
        <PlatteButton :bgColor="'#5b9bd5'"></PlatteButton>
      </Col>
    </Row>
    <Row class="p-b-10">
      <Col :span="8" class="flex-center-left">粗细：</Col>
      <Col :span="14" :offset="2" class="full">
        <InputNumber id="inputNumber" v-model:value="value2" :min="1" :max="10" />
      </Col>
    </Row>
  </div>
  <LatexModal :modalVisible="modalVisible" @handle-modal-visibel="handleModelVisibel"></LatexModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PlatteButton from '@/components/platte-button';
import LatexModal from '@/views/components/latex-modal/index';

const value2 = ref(2);
const modalVisible = ref<Boolean>(false);

const handleLatexModal = () => {
  modalVisible.value = true;
};

const handleModelVisibel = value => {
  modalVisible.value = value;
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
