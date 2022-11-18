<template>
  <div>
    <Row class="p-b-10">
      <Col span="12" class="full">
        <Button>
          <template #icon><IconFlipVertically /></template>
          <span>垂直翻转</span>
        </Button>
      </Col>
      <Col span="12" class="full">
        <Button>
          <template #icon><IconFlipHorizontally /></template>
          <span>水平翻转</span>
        </Button>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.full {
  .ant-btn {
    width: 100%;
    border-radius: 0;
  }
}
</style>
