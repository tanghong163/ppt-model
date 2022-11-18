<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-14 08:28:22
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-17 16:47:12
 * @FilePath: \ppt-model\src\views\editor\toolbar\element-style-panel\text-style-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="row">
      <Row v-for="item in obj.previewStyle" :key="id">
        <Col :span="12" class="all-backgroud preview-col" v-for="{ c_id, elem } in item.children" :key="c_id">
          <Button>
            <span v-html="elem"></span>
          </Button>
        </Col>
      </Row>
    </div>
    <Divider />
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
        <Col :span="7" class="full">
          <Tooltip>
            <template #title>文字颜色</template>
            <Button>
              <template #icon><IconText /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="7" class="full">
          <Tooltip>
            <template #title>文字高亮</template>
            <Button>
              <template #icon><IconHighLight /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>增大字号</template>
            <Button>
              <template #icon>
                <IconFontSize />
                +
              </template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>减小字号</template>
            <Button>
              <template #icon>
                <IconFontSize />
                -
              </template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>加粗</template>
            <Button>
              <template #icon><IconTextBold /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>斜体</template>
            <Button>
              <template #icon><IconTextItalic /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>下划线</template>
            <Button>
              <template #icon><IconTextUnderline /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>删除线</template>
            <Button>
              <template #icon><IconStrikethrough /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>清除格式</template>
            <Button>
              <template #icon><IconFormat /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>上标</template>
            <Button>
              <template #icon><IconUpOne /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>下标</template>
            <Button>
              <template #icon><IconDownOne /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>行内代码</template>
            <Button>
              <template #icon><IconCode /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>引用</template>
            <Button>
              <template #icon><IconQuote /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col :span="5" class="full">
          <Tooltip>
            <template #title>超链接</template>
            <Button>
              <template #icon><IconLinkOne /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
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
      <Row class="p-b-10">
        <Col span="12" class="full">
          <Tooltip>
            <template #title>项目符号</template>
            <Button>
              <template #icon><IconList /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col span="12" class="full">
          <Tooltip>
            <template #title>编号</template>
            <Button>
              <template #icon><IconOrderedList /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col span="12" class="full">
          <Tooltip>
            <template #title>减小缩进</template>
            <Button>
              <template #icon><IconIndentLeft /></template>
            </Button>
          </Tooltip>
        </Col>
        <Col span="12" class="full">
          <Tooltip>
            <template #title>增大缩进</template>
            <Button>
              <template #icon><IconIndentRight /></template>
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
    <Divider />
    <div class="row">
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">行间距:</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value4" :options="options4">
            <template #suffixIcon><IconRowHeight /></template>
          </Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">段间距:</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value4" :options="options4">
            <template #suffixIcon><IconVerticalSpacingBetweenItems /></template>
          </Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">字间距：</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value4" :options="options4">
            <template #suffixIcon><IconFullwidth /></template>
          </Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">首行缩进：</Col>
        <Col :span="14" :offset="2" class="full">
          <Select v-model:value="value4" :options="options4">
            <template #suffixIcon><IconIndentRight /></template>
          </Select>
        </Col>
      </Row>
      <Row class="p-b-10">
        <Col :span="8" class="flex-center-left">文本填充:</Col>
        <Col :span="14" :offset="2">
          <PlatteButton></PlatteButton>
        </Col>
      </Row>
    </div>
    <Divider></Divider>
    <ElementOutline :bgColor="'#000'" />
    <Divider />
    <ElementShadow></ElementShadow>
    <Divider />
    <ElementOpacity />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import PlatteButton from '@/components/platte-button';

import ElementOutline from './components/element-outline.vue';
import ElementShadow from './components/element-shadow.vue';
import ElementOpacity from './components/element-opacity.vue';
const value1 = ref('mico');
const value2 = ref('12px');
const checked = ref<boolean>(false);
const checked1 = ref<boolean>(false);
const obj = reactive({
  previewStyle: [
    {
      id: 0,
      children: [
        {
          c_id: 0,
          elem: "<span style='font-size: 25px; font-weight: bold'>大标题</span>"
        },
        {
          c_id: 1,
          elem: "<span style='font-size: 20px; font-weight: bold'>小标题</span>"
        }
      ]
    },
    {
      id: 1,
      children: [
        {
          c_id: 2,
          elem: "<span style='font-size: 18px;'>正文</span>"
        },
        {
          c_id: 3,
          elem: "<span style='font-size: 15px'>正文[小]</span>"
        }
      ]
    },
    {
      id: 2,
      children: [
        {
          c_id: 4,
          elem: "<span style='font-size: 15px; font-style: italic'>注释1</span>"
        },
        {
          c_id: 5,
          elem: "<span style='font-size: 15px; text-decoration: underline'>注释2</span>"
        }
      ]
    }
  ]
});
const options = ref<SelectProps['options']>([
  {
    id: 'system',
    name: '系统字体',
    children: [
      {
        id: 'Arial',
        name: 'Arial'
      },
      {
        id: 'mico',
        name: '微软雅黑'
      }
    ]
  },
  {
    id: 'online',
    name: '在线字体',
    children: [
      {
        id: '1',
        name: '苍耳小丸子'
      },
      {
        id: '2',
        name: '优设标题黑'
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
</script>
<style lang="scss" scoped>
.preview-col {
  .ant-btn {
    border-radius: 0;
    height: 50px;
  }
}
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
.ant-col-5 {
  // width: 20%;
  flex-basis: 20%;
}
</style>
