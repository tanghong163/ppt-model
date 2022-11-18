<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-28 16:11:35
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-29 09:55:27
 * @FilePath: \ppt-model\src\views\editor\canvans-tool\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="canvas-tool">
    <div class="left-handler">
      <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="撤销">
        <IconBack class="handler-item" />
      </Tooltip>
      <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="重做">
        <IconNext class="handler-item" />
      </Tooltip>
    </div>

    <div class="add-element-handler">
      <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入文本">
        <IconFontSize class="handler-item"></IconFontSize>
        <Dropdown :trigger="['click']">
          <IconDown class="handler-item" />
          <template #overlay>
            <Menu>
              <MenuItem key="0">
                <IconTextRotationNone />
                横向文本框
              </MenuItem>
              <MenuItem key="1">
                <IconTextRotationDown />
                竖向文本框
              </MenuItem>
            </Menu>
          </template>
        </Dropdown>
      </Tooltip>
      <FileInput @change="files => insertImageElement(files)">
        <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入图片">
          <IconPicture class="handler-item" />
        </Tooltip>
      </FileInput>
      <Popover trigger="click" :overlayStyle="{ width: '350px', overflow: 'scroll' }">
        <template #content>
          <ShapePool></ShapePool>
        </template>
        <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入形状">
          <IconGraphicDesign class="handler-item"></IconGraphicDesign>
        </Tooltip>
      </Popover>
      <Popover trigger="click" :overlayStyle="{ width: '250px', overflow: 'scroll' }">
        <template #content>
          <LinePool></LinePool>
        </template>
        <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入线条">
          <IconConnection class="handler-item"></IconConnection>
        </Tooltip>
      </Popover>
      <Popover trigger="click">
        <template #content>
          <ChartPool></ChartPool>
        </template>
        <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入图表">
          <IconChartProportion class="handler-item"></IconChartProportion>
        </Tooltip>
      </Popover>
      <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入表格">
        <!-- <IconInsertTable class="handler-item"></IconInsertTable> -->
        <Popover trigger="click" :overlayStyle="{ width: '280px' }">
          <template #content>
            <TableGenerator></TableGenerator>
          </template>
          <IconInsertTable class="handler-item"></IconInsertTable>
        </Popover>
      </Tooltip>
      <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入公式">
        <IconFormula class="handler-item" @click="handleLatexVisible"></IconFormula>
        <LatexModal :modalVisible="visible1" @handle-modal-visibel="handleModelVisibel"></LatexModal>
      </Tooltip>
      <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="插入音视频">
        <Popover trigger="click" :overlayStyle="{ width: '500px' }">
          <template #content>
            <!-- <a @click="hide">Close</a> -->
            <Tabs v-model:activeKey="activeKey">
              <TabPane key="1" tab="视频">
                <Input v-model:value="videoUrl"></Input>
                <Row class="p-t-10 flex-d-rr" :gutter="10">
                  <Col>
                    <Button>取消</Button>
                  </Col>
                  <Col>
                    <Button>确认</Button>
                  </Col>
                </Row>
              </TabPane>
              <TabPane key="2" tab="音频" force-render>
                <Input v-model:value="audioUrl"></Input>
                <Row class="p-t-10 flex-d-rr" :gutter="10">
                  <Col>
                    <Button>取消</Button>
                  </Col>
                  <Col>
                    <Button>确认</Button>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </template>
          <IconVideoTwo class="handler-item"></IconVideoTwo>
        </Popover>
      </Tooltip>
    </div>

    <div class="right-handler">
      <IconMinus class="handler-item viewport-size" />
      <Popover trigger="click">
        <template #content>
          <div class="viewport-size-preset">
            <div class="preset-item" v-for="item in canvasScalePresetList" :key="item" @click="applyCanvasPresetScale(item)">{{ item }}%</div>
          </div>
        </template>
        <!-- <span class="text">{{ canvasScalePercentage }}</span> -->
        <span class="text">100%</span>
      </Popover>
      <IconPlus class="handler-item viewport-size" />
      <Tooltip :mouseLeaveDelay="0" :mouseEnterDelay="0.5" title="适应屏幕">
        <IconFullScreen class="handler-item viewport-size-adaptation" />
      </Tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getImageDataURL } from '@/utils/images';

import FileInput from '@/components/file-input/index';
import LatexModal from '@/views/components/latex-modal/index';
import ShapePool from './cpns/shape-pool.vue';
import LinePool from './cpns/line-pool.vue';
import ChartPool from './cpns/chart-pool.vue';
import TableGenerator from './cpns/table-generator.vue';
const insertImageElement = (files: FileList) => {
  // 获取到一个 FileList 对象中的第一个文件(是一个File对象)
  const imageList = files[0];
  if (!imageList) return;
  getImageDataURL(imageList);
};

const visible = ref<boolean>(false);
const visible1 = ref<boolean>(false);
const activeKey = ref('1');
const videoUrl = ref('https://mazwai.com/videvo_files/video/free/2019-01/small_watermarked/181004_04_Dolphins-Whale_06_preview.webm');
const audioUrl = ref('https://freesound.org/data/previews/614/614107_11861866-lq.mp3');

const hide = () => {
  visible.value = false;
};
const handleLatexVisible = () => {
  visible1.value = true;
};
const handleModelVisibel = value => {
  visible1.value = value;
};
</script>
<style lang="scss" scoped>
.canvas-tool {
  position: relative;
  border-bottom: 1px solid $borderColor;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 13px;
  user-select: none;
}
.left-handler {
  display: flex;
  align-items: center;
}
.add-element-handler {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  .handler-item {
    width: 32px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    border-radius: $borderRadius;

    &:not(.group-btn):hover {
      background-color: #f1f1f1;
    }

    &.active {
      color: $themeColor;
    }

    &.group-btn {
      width: auto;
      margin-right: 4px;

      &:hover {
        background-color: #f3f3f3;
      }

      .icon,
      .arrow {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .icon {
        width: 26px;
        padding: 0 2px;

        &:hover {
          background-color: #e9e9e9;
        }
        &.active {
          color: $themeColor;
        }
      }
      .arrow {
        font-size: 12px;

        &:hover {
          background-color: #e9e9e9;
        }
      }
    }
  }
  > :deep span {
    display: flex;
    > span:nth-child(2) {
      width: 12px;
      margin-left: -6px;
    }
  }
}
.handler-item {
  margin: 0 10px;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;

  &.disable {
    opacity: 0.5;
  }
}
.right-handler {
  display: flex;
  align-items: center;

  .text {
    width: 40px;
    text-align: center;
    cursor: pointer;
  }

  .viewport-size {
    font-size: 13px;
  }
}
.preset-item {
  padding: 8px 20px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: $themeColor;
  }
}
.text-type-item {
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  & + .text-type-item {
    margin-top: 3px;
  }
}
.full {
  .ant-input {
    width: 100%;
  }
}
</style>
