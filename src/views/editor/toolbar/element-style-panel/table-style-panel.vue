<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-17 16:21:27
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-18 08:57:29
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\table-style-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="row">
      <Row class="p-b-10">
        <Col span="15" class="full">
          <Select v-model:value="value1" :options="options">
            <template #suffixIcon><IconFontSize></IconFontSize></template>
          </Select>
        </Col>
        <Col span="9" class="full">
          <Select v-model:value="value2" :options="options2">
            <template #suffixIcon><IconAddText></IconAddText></template>
          </Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="12" class="full">
          <Tooltip>
            <template #title>文字颜色</template>
            <Button>
              <template #icon><IconText /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="12" class="full">
          <Tooltip>
            <template #title>单元格填充</template>
            <Button>
              <template #icon><IconFill /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="6" class="full">
          <Tooltip>
            <template #title>加粗</template>
            <Button>
              <template #icon><IconTextBold /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="6" class="full">
          <Tooltip>
            <template #title>斜体</template>
            <Button>
              <template #icon><IconTextItalic /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="6" class="full">
          <Tooltip>
            <template #title>下划线</template>
            <Button>
              <template #icon><IconTextUnderline /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="6" class="full">
          <Tooltip>
            <template #title>删除线</template>
            <Button>
              <template #icon><IconStrikethrough /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col span="8" class="full">
          <Tooltip>
            <template #title>左对齐</template>
            <Button>
              <template #icon><IconAlignTextLeft /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col span="8" class="full">
          <Tooltip>
            <template #title>居中</template>
            <Button>
              <template #icon><IconAlignTextCenter /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col span="8" class="full">
          <Tooltip>
            <template #title>右对齐</template>
            <Button>
              <template #icon><IconAlignTextRight /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">边框样式:</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value3" :options="options3"></Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">边框颜色:</Col>
        <Col :span="14" :offset="2" class="full">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">边框粗细</Col>
        <Col :span="14" :offset="2" class="full">
          <InputNumber id="inputNumber" v-model:value="value4" />
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">行数:</Col>
        <Col :span="14" :offset="2">
          <Row :gutter="5">
            <Col span="8"><Button @click="handleRow('minus')">-</Button></Col>
            <Col span="8" class="flex-center">
              <span>{{ value5 }}</span>
            </Col>
            <Col span="8"><Button @click="handleRow('plus')">+</Button></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col :span="8" class="flex-center-left">列数:</Col>
        <Col :span="14" :offset="2">
          <Row :gutter="5">
            <Col span="8"><Button @click="handleMinusColumn">-</Button></Col>
            <Col span="8" class="flex-center">
              <span>{{ value6 }}</span>
            </Col>
            <Col span="8"><Button @click="handlePlusColumn">+</Button></Col>
          </Row>
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="10" class="flex-center-left">启用主题表格:</Col>
        <Col :span="4" :offset="10">
          <Switch v-model:checked="checked" />
        </Col>
      </Row>
      <CheckboxGroup v-model:value="value7" v-if="checked" style="width: 100%" class="p-b-10">
        <Row>
          <Col :span="12">
            <Checkbox value="标题行">标题行</Checkbox>
          </Col>
          <Col :span="12">
            <Checkbox value="会总行">会总行</Checkbox>
          </Col>
          <Col :span="12">
            <Checkbox value="第一列">第一列</Checkbox>
          </Col>
          <Col :span="12">
            <Checkbox value="最后一列">最后一列</Checkbox>
          </Col>
        </Row>
      </CheckboxGroup>
      <Row class="p-b-10" v-if="checked">
        <Col :span="10" class="flex-center-left">主题颜色:</Col>
        <Col :span="12" :offset="2">
          <PlatteButton :bgColor="'#1E90FF'"></PlatteButton>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';

import PlatteButton from '@/components/platte-button';
const value1 = ref('mico');
const value2 = ref('12px');
const value3 = ref('实线边框');
const value4 = ref(1);
const value5 = ref(1);
const value6 = ref(1);
const value7 = ref([]);
const checked = ref<Boolean>(false);
const options = ref<SelectProps['options']>([
  {
    label: 'system',
    options: [
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'mico',
        value: '微软雅黑'
      }
    ]
  },
  {
    label: 'online',
    options: [
      {
        label: '苍耳小丸子1',
        value: '苍耳小丸子'
      },
      {
        label: '优设标题黑',
        value: '优设标题黑'
      }
    ]
  }
]);
const options2 = ref<SelectProps['options']>([
  {
    value: '12px',
    label: '12px'
  },
  {
    value: '14px',
    label: '14px'
  }
]);
const options3 = ref<SelectProps['options']>([
  {
    value: '实线边框',
    label: '实线边框'
  },
  {
    value: '虚线边框',
    label: '虚线边框'
  }
]);
const handleRow = flag => {
  if (flag === 'minus' && value5.value === 1) return;
  flag === 'minus' ? value5.value-- : value5.value++;
};
const handleMinusColumn = () => {
  if (value6.value === 1) return;
  value6.value--;
};
const handlePlusColumn = () => {
  value6.value++;
};
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
</style>
