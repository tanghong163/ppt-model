<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-10 13:50:49
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-21 11:41:25
 * @FilePath: \ppt-model\src\views\editor\toolbar\slide-design-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="slide-design-panel">
    <div class="row">
      <Row class="p-b-10">背景填充</Row>
      <Row class="p-b-10">
        <Col :span="11">
          <Select v-model:value="value1" style="width: 100px" :options="options1"></Select>
        </Col>
        <Col :span="11" :offset="2" v-if="value1 === 'pure'">
          <PlatteButton></PlatteButton>
        </Col>
        <Col :span="11" :offset="2" v-else-if="value1 === 'image'">
          <Select v-model:value="value2" style="width: 100px" :options="options2"></Select>
        </Col>
        <Col :span="11" :offset="2" v-else-if="value1 === 'dash'">
          <Select v-model:value="value3" style="width: 100px" :options="options3"></Select>
        </Col>
      </Row>
      <Row v-if="value1 === 'image'" class="p-b-10">
        <Upload maxCount="1" name="avatar" list-type="picture-card" :show-upload-list="false" action="">
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <IconLoadingOne v-if="loading"></IconLoadingOne>
            <IconPlus v-else></IconPlus>
          </div>
        </Upload>
      </Row>
      <Row v-if="value1 === 'dash'" class="p-b-10">
        <Col :span="8" class="flex-center-left">起点颜色：</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row v-if="value1 === 'dash'" class="p-b-10">
        <Col :span="8" class="flex-center-left">终点颜色：</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row v-if="value1 === 'dash' && value3 === 'line'" class="p-b-10">
        <Col :span="8" class="flex-center-left">渐变角度：</Col>
        <Col :span="14" :offset="2">
          <Slider />
        </Col>
      </Row>
      <Row class="p-b-10 all-backgroud">
        <Button>应用背景到全部</Button>
      </Row>
    </div>
    <Divider></Divider>
    <div class="row">
      <Row>
        <Col :span="8" class="flex-center-left">画布尺寸:</Col>
        <Col :span="14" :offset="2">
          <Select v-model:value="value4" style="width: 140px" :options="options4"></Select>
        </Col>
      </Row>
    </div>
    <Divider></Divider>
    <div class="row">
      <Row class="p-b-10">全局主题</Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">字体:</Col>
        <Col :span="14" :offset="2">
          <Select v-model:value="value4" style="width: 140px" :options="options4"></Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">字体颜色：</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">背景颜色：</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">主题颜色：</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row class="p-b-10 all-backgroud">
        <Button>应用主题到全部</Button>
      </Row>
    </div>
    <Divider></Divider>
    <div class="row">
      <Row class="p-b-10">预设主题</Row>
      <Row :gutter="10" class="p-b-10" v-for="{ id, children } in previewThemeOptions" :key="id">
        <Col :span="12" v-for="{ c_id, color, bgColor } in children" :key="c_id">
          <PreviewTheme :color-set="color" :cell-background-color="bgColor"></PreviewTheme>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import PlatteButton from '@/components/platte-button';
import PreviewTheme from '@/components/preview-theme/index';
const options1 = ref<SelectProps['options']>([
  {
    value: 'pure',
    label: '纯色填充'
  },
  {
    value: 'image',
    label: '图片填充'
  },
  {
    value: 'dash',
    label: '渐变填充'
  }
]);
const options2 = ref<SelectProps['options']>([
  {
    value: 'scale',
    label: '缩放'
  },
  {
    value: 'paste',
    label: '拼贴'
  },
  {
    value: 'scale full',
    label: '缩放铺满'
  }
]);
const options3 = ref<SelectProps['options']>([
  {
    value: 'line',
    label: '线性渐变'
  },
  {
    value: 'raduis',
    label: '径向渐变'
  }
]);
const options4 = ref<SelectProps['options']>([
  {
    value: '宽屏16 : 9',
    label: '宽屏16 : 9'
  },
  {
    value: '宽屏16 : 10',
    label: '宽屏16 : 10'
  },
  {
    value: '标准4 : 3',
    label: '标准4 : 3'
  }
]);
const previewThemeOptions = ref([
  {
    id: 0,
    children: [
      {
        c_id: 0,
        color: ['#FF0000	', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']
      },
      {
        c_id: 1,
        color: ['#FF0000	', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']
      }
    ]
  },
  {
    id: 2,
    children: [
      {
        c_id: 3,
        color: ['#FF0000	', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']
      },
      {
        c_id: 4,
        color: ['#FF0000	', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'],
        bgColor: '#CCFFCC'
      }
    ]
  }
]);
const value1 = ref('pure');
const value2 = ref('scale');
const value3 = ref('line');
const value4 = ref('宽屏16 : 9');
const visible = ref<boolean>(false);
</script>
<style lang="scss" scoped>
.panel {
  .ant-btn-icon-only {
    width: 100%;
    padding-right: 5px;
  }
  .ant-btn {
    text-align: right;
  }
}

.all-backgroud {
  .ant-btn {
    text-align: center;
    width: 100%;
  }
}

:deep .ant-upload.ant-upload-select-picture-card {
  width: 100%;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
// .cell {
//   cursor: pointer;
// }
// .cell:hover .cell-y {
//   display: block;
//   z-index: 2;
// }
// .cell {
//   .cell-y {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.2);
//     display: none;
//   }
// }
// .gutter-example {
//   width: 90%;
// }
// .gutter-example :deep(.ant-row > div) {
//   background: transparent;
//   border: 0;
// }
// .gutter-box {
//   background: #00a0e9;
//   padding: 5px 0;
// }
// .theme-title {
//   font-size: 16px;
// }
// .color-item {
//   height: ;
// }
// .color-item-one {
//   width: 15%;
//   padding-top: 100%;
//   background: #ff47d6;
//   &::after {
//     content: '';
//     display: inline-block;
//     padding-top: 100%;
//   }
// }
</style>
