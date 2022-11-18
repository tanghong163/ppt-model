<template>
  <div>
    <Modal
      v-model:visible="modalVisible"
      destroyOnClose
      width="800px"
      :bodyStyle="{ height: '600px' }"
      okText="确定"
      cancelText="取消"
      @cancel="handleCancel"
    >
      <Row>
        <Col span="16">
          <div class="flex-col latex-l-t">
            <div>
              <Textarea v-model:value="textAreaValue" ref="textAreaRef" :bordered="false" placeholder="请输入LateX公式" :rows="15" />
            </div>
            <div class="latex-l-b" v-if="!textAreaValue">公式预览</div>
            <div class="latex-l-b" v-else>
              <FormulaContent :width="518" :height="138" :latex="textAreaValue" />
            </div>
          </div>
        </Col>
        <Col span="8">
          <Tabs v-model:activeKey="activeKey1" centered class="symbol-formula-tabs">
            <TabPane key="symbol" tab="常用符号">
              <Tabs v-model:activeKey="activeKey2" centered class="symbol-tabs">
                <TabPane v-for="{ type, label, children } in symbolList" :key="type" :tab="label">
                  <div class="symbol-item" v-for="{ latex } in children" :key="latex" @click="handleInsert(latex)">
                    <SymbolContent :latex="latex"></SymbolContent>
                  </div>
                </TabPane>
              </Tabs>
            </TabPane>
            <TabPane key="formula" tab="预置公式" class="formula">
              <div v-for="{ label, latex } in formulaList" class="formula-item" @click="textAreaValue = latex">
                <p>{{ label }}</p>
                <FormulaContent :width="236" :height="60" :latex="latex"></FormulaContent>
              </div>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { SYMBOL_LIST, FORMULA_LIST } from '@/configs/latex';

import SymbolContent from './cpns/symbol-content.vue';
import FormulaContent from './cpns/formula-content.vue';

const props = defineProps({
  modalVisible: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits('[handle-modal-visibel]');
const textAreaValue = ref('');
const textAreaRef = ref<HTMLTextAreaElement>();
const activeKey1 = ref('symbol');
const activeKey2 = ref('operators');
const symbolList = SYMBOL_LIST;
const formulaList = FORMULA_LIST;

const handleCancel = () => {
  textAreaValue.value = '';
  activeKey1.value = 'symbol';
  activeKey2.value = 'operators';
  emit('handle-modal-visibel', false);
};

const handleInsert = (latex: string) => {
  if (!textAreaRef.value) return;
  textAreaRef.value?.focus();
  // 此方法已弃用不推荐使用
  // insertText 在光标插入位置插入文本内容或者覆盖所选的文本内容。
  document.execCommand('insertText', false, latex);
};
// const changeTabs = (activeKey: string) => {
//   activeKey1.value = activeKey;
// };
// const changeSymbolTabs = (activeKey: string) => {
//   activeKey2.value = activeKey;
// };
</script>
<style lang="scss" scoped>
.latex-l-t {
  .ant-input {
    // border: none;
  }
}
.latex-l-b {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.symbol-formula-tabs {
  :deep > .ant-tabs-content-holder {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.symbol-tabs {
  // :deep .ant-tabs-content-holder {
  //   height: 400px;
  //   overflow-y: auto;
  // }
  :deep .ant-tabs-tabpane {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
.symbol-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
