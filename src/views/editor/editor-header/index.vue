<template>
  <div class="editor-header">
    <div class="left">
      <Dropdown :trigger="['click']">
        <div class="menuItem">
          <IconFolderClose />
          <span class="text">文件</span>
        </div>
        <template #overlay>
          <Menu>
            <!-- <FileInput accept=".pptist" @change="files => importSpecificFile(files)">
              <MenuItem>导入 pptist 文件</MenuItem>
            </FileInput> -->
            <MenuItem @click="setDialogForExport('pptist')">导出 pptist 文件</MenuItem>
            <MenuItem @click="setDialogForExport('pptx')">导出 PPTX</MenuItem>
            <MenuItem @click="setDialogForExport('image')">导出图片</MenuItem>
            <MenuItem @click="setDialogForExport('json')">导出 JSON</MenuItem>
            <MenuItem @click="setDialogForExport('pdf')">打印 / 导出 PDF</MenuItem>
          </Menu>
        </template>
      </Dropdown>
      <Dropdown :trigger="['click']">
        <div class="menuItem">
          <IconEdit />
          <span class="text">编辑</span>
        </div>
        <template #overlay>
          <Menu>
            <MenuItem @click="undo()">撤销</MenuItem>
            <MenuItem @click="redo()">重做</MenuItem>
            <MenuItem @click="createSlide()">添加页面</MenuItem>
            <MenuItem @click="deleteSlide()">删除页面</MenuItem>
            <MenuItem @click="toggleGridLines()">{{ gridLineSize ? '关闭网格线' : '打开网格线' }}</MenuItem>
            <MenuItem @click="toggleRuler()">{{ showRuler ? '关闭标尺' : '打开标尺' }}</MenuItem>
            <MenuItem @click="resetSlides()">重置幻灯片</MenuItem>
          </Menu>
        </template>
      </Dropdown>
      <Dropdown :trigger="['click']">
        <div class="menuItem">
          <IconPpt />
          <span class="text">演示</span>
        </div>
        <template #overlay>
          <Menu>
            <MenuItem @click="enterScreeningFromStart()">从头开始</MenuItem>
            <MenuItem @click="enterScreening()">从当前页开始</MenuItem>
          </Menu>
        </template>
      </Dropdown>
      <Dropdown :trigger="['click']">
        <div class="menuItem">
          <IconHelpcenter />
          <span class="text">帮助</span>
        </div>
        <template #overlay>
          <Menu>
            <MenuItem @click="goIssues()">意见反馈</MenuItem>
            <MenuItem @click="hotkeyDrawerVisible = true">快捷键</MenuItem>
          </Menu>
        </template>
      </Dropdown>
    </div>
    <div class="right">
      <Tooltip title="导出">
        <div class="menuItem" @click="setDialogForExport('pptx')">
          <IconShare size="18" fill="#666" />
        </div>
      </Tooltip>
      <Tooltip :mouseLeaveDelay="0" title="幻灯片放映">
        <div class="menuItem" @click="enterScreening()">
          <IconPpt size="19" fill="#666" style="margin-top: 1px" />
        </div>
      </Tooltip>
      <a href="https://github.com/pipipi-pikachu/PPTist" target="_blank">
        <div class="menuItem"><IconGithub size="18" fill="#666" /></div>
      </a>
    </div>
  </div>
  <Drawer :visible="hotkeyDrawerVisible" :maskClosable="false" :closeable="true" @close="hotkeyDrawerVisible = false">
    <List v-for="{ type, children } in HOTKEY_DOC" :data-source="children">
      <template #renderItem="{ item }">
        <ListItem :style="{ borderBottom: 1 + 'px ' + 'solid ' + '#e5e5e5' }">
          <span>{{ item.label }}</span>
          <span>{{ item.value }}</span>
        </ListItem>
      </template>
      <template #header>
        <div :style="{ borderBottom: 1 + 'px ' + 'solid ' + '#e5e5e5', fontWeight: 'bolder' }">{{ type }}</div>
      </template>
    </List>
  </Drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { HOTKEY_DOC } from '@/configs/hotkey';
// const hotkeyDrawerVisible = ref(false);
const hotkeyDrawerVisible = ref(false);
</script>
<style lang="scss" scoped>
.editor-header {
  background-color: #fff;
  user-select: none; /* 控制页面文字不能被选中 */
  border-bottom: 1px solid $borderColor;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.menuItem {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0 10px;
  cursor: pointer;

  .text {
    margin-left: 4px;
  }
}
.left .menuItem:hover {
  background-color: #f9f9f9;
}
</style>
