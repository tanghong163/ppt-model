<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-26 08:50:49
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-27 17:03:43
 * @FilePath: \ppt-model\src\views\editor\canvas-tool\cpns\line-pool.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="chart-pool">
    <div v-for="(item, indx) in obj.iconList" :key="indx" class="chart-list">
      <div class="chart-item">
        <IconChartLine size="24" v-if="item === 'line'" />
        <IconChartHistogram size="24" v-else-if="item === 'histogram'" />
        <IconChartPie size="24" v-else-if="item === 'pie'" />
        <IconChartHistogramOne size="24" v-else-if="item === 'histogramOne'" />
        <IconChartLineArea size="24" v-else-if="item === 'lineArea'" />
        <IconChartRing size="24" v-else-if="item === 'ring'" />
        <IconChartScatter size="24" v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const obj = reactive({
  iconList: ['line', 'histogram', 'pie', 'histogramOne', 'lineArea', 'ring', 'scatter']
});
</script>
<style lang="scss" scoped>
.chart-pool {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  color: #999;
  // &:hover {
  //   cursor: pointer;
  //   color: $themeColor;
  // }
}
.chart-item {
  &:hover {
    cursor: pointer;
    color: $themeColor;
  }
}
</style>
