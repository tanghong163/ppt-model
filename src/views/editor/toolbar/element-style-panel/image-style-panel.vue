<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-14 16:59:59
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-17 09:18:28
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\image-style-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="row">
      <Row class="p-b-10">
        <Image :preview="false" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </Row>
      <ElementFlip />
      <Row class="full">
        <DropdownButton :loading="loading2" @click="enterLoading2">
          <IconTailoring />
          裁剪图片
          <template #overlay>
            <Menu>
              <MenuItem key="1">Submit and continue</MenuItem>
            </Menu>
          </template>
          <template #icon><IconDown /></template>
        </DropdownButton>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="12" class="flex-center-left">重新着色(蒙版):</Col>
        <Col :span="6" :offset="6">
          <Switch v-model:checked="checked1" />
        </Col>
      </Row>
      <Row v-if="checked1" class="p-b-10">
        <Col :span="8" class="flex-center-left">蒙版颜色</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row v-if="checked1">
        <Col :span="8" class="flex-center-left">不透明度</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value" :min="0" :max="1" :step="0.05" />
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row>
        <Col :span="8" class="flex-center-left">启用滤镜：</Col>
        <Col :span="6" :offset="10">
          <Switch v-model:checked="checked" />
        </Col>
      </Row>
      <Row v-if="checked">
        <Col :span="8" class="flex-center-left">模糊</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value1" :min="0" :max="10" :step="1" />
        </Col>
      </Row>
      <Row v-if="checked">
        <Col :span="8" class="flex-center-left">亮度</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value2" :min="1" :max="200" :step="5" />
        </Col>
      </Row>
      <Row v-if="checked">
        <Col :span="8" class="flex-center-left">对比度</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value3" :min="1" :max="200" :step="5" />
        </Col>
      </Row>
      <Row v-if="checked">
        <Col :span="8" class="flex-center-left">灰度</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value4" :min="1" :max="100" :step="5" />
        </Col>
      </Row>
      <Row v-if="checked">
        <Col :span="8" class="flex-center-left">饱和度</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value5" :min="1" :max="200" :step="5" />
        </Col>
      </Row>
      <Row v-if="checked">
        <Col :span="8" class="flex-center-left">色相</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value6" :min="1" :max="360" :step="5" />
        </Col>
      </Row>
      <Row v-if="checked">
        <Col :span="8" class="flex-center-left">不透明度</Col>
        <Col :span="14" :offset="2">
          <Slider v-model:value="value7" :min="1" :max="100" :step="5" />
        </Col>
      </Row>
    </div>
    <Divider />
    <ElementOutline />
    <Divider />
    <ElementShadow />
    <Divider />
    <Row class="p-b-10">
      <Col span="24" class="full">
        <Button>
          <template #icon><IconTransform /></template>
          <span>替换图片</span>
        </Button>
      </Col>
    </Row>
    <Row class="p-b-10">
      <Col span="24" class="full">
        <Button>
          <template #icon><IconUndo /></template>
          <span>重置样式</span>
        </Button>
      </Col>
    </Row>
    <Row class="p-b-10">
      <Col span="24" class="full">
        <Button>
          <template #icon><IconTheme /></template>
          <span>设为背景</span>
        </Button>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ElementOutline from './components/element-outline.vue';
import ElementShadow from './components/element-shadow.vue';
import PlatteButton from '@/components/platte-button';
import ElementFlip from './components/element-flip.vue';

const checked = ref<Boolean>(false);
const checked1 = ref<Boolean>(false);
const value1 = ref(0);
const value2 = ref(100);
const value3 = ref(100);
const value4 = ref(0);
const value5 = ref(100);
const value6 = ref(0);
const value7 = ref(100);
const value8 = ref(0.15);
</script>
<style lang="scss" scoped>
.full {
  .ant-btn {
    width: 100%;
  }
  .ant-dropdown-button {
    width: 100%;
    :deep button:first-child {
      width: 100%;
    }
  }
}
</style>
