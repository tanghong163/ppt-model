<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-13 08:49:25
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-29 11:17:07
 * @FilePath: \ppt-model\src\views\editor\toolbar\symbol-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="symbol-panel">
    <Tabs v-model:activeKey="activeKey" @change="changeTab">
      <TabPane :tab="label" v-for="{ key, children, label } in SYMBOL_LIST" :key="key">
        <div class="item">
          <div v-for="(symbol, index) in children" :key="index">{{ symbol }}</div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { SYMBOL_LIST } from '@/configs/symbol';
const activeKey = ref(SYMBOL_LIST[0].key);

const changeTab = (key: string) => {
  activeKey.value = key;
};
</script>
<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}
</style>
