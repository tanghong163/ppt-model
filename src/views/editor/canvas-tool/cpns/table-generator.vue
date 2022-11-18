<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-25 14:43:05
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-27 16:38:53
 * @FilePath: \ppt-model\src\views\editor\canvas-tool\cpns\table-generator.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="flex-sa-cnter p-b-10">
      <p>表格{{ endCell.length ? `${endCell[0]}行 X ${endCell[1]}列` : '' }}</p>
      <Button type="text" v-if="flag !== 'custom'" @click="flag = 'custom'">自定义</Button>
      <Button type="text" @click="flag = 'select'" v-else>返回</Button>
    </div>
    <div v-if="flag !== 'custom'" class="table-content">
      <!-- <div v-for="item in 100" :key="item" class="item" :class="[`item-${item}`]"></div> -->
      <div
        v-for="item in squarList"
        :key="item"
        class="item"
        :class="{ active: endCell.length && +item.split('-')[1] <= endCell[0] && +item.split('-')[2] <= endCell[1] }"
        @mouseenter="endCell = [+item.split('-')[1], +item.split('-')[2]]"
      ></div>
    </div>
    <div v-else>
      <Row class="p-b-10">
        <Col span="4" class="flex-fs-center">行数:</Col>
        <Col span="20" class="full"><InputNumber v-model:value="rowNum"></InputNumber></Col>
      </Row>
      <Row class="p-b-10">
        <Col span="4" class="flex-fs-center">列数:</Col>
        <Col span="20" class="full"><InputNumber v-model:value="columnNum"></InputNumber></Col>
      </Row>
      <Row class="flex-d-rr" :gutter="10">
        <Col>
          <Button>确认</Button>
        </Col>
        <Col>
          <Button>取消</Button>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
const flag = ref('select');
const flagContent = ref('select');
const rowNum = ref(3);
const columnNum = ref(3);
const endCell = ref<number[]>([]);
const objReactive = reactive({
  itemList: [
    {
      index: 1,
      itemClass: 'item-1'
    },
    {
      index: 2,
      itemClass: 'item-2'
    }
  ]
});
const squarList = computed(() => {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      arr.push(`item-${i}-${j}`);
    }
  }
  // console.log(arr);
  return arr;
});
</script>
<style lang="scss" scoped>
.full {
  .ant-input-number {
    width: 100%;
  }
}
.table-content {
  display: grid;
  grid-template-columns: repeat(10, 20px);
  grid-template-rows: repeat(10, 20px);
  gap: 5px;
  .item {
    border: 1px solid #c6c5ca;
    // &:hover {
    //   border: 1px solid red;
    // }
  }
  .active {
    border: 1px solid $themeColor;
  }
}
</style>
