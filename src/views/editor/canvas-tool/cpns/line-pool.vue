<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-26 08:50:49
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-29 10:00:21
 * @FilePath: \ppt-model\src\views\editor\canvas-tool\cpns\line-pool.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="line-pool" v-for="(item, i) in LINE_LIST" :key="i">
    <div class="flex-fs-center">
      <span class="squar"></span>
      <span>{{ item.type }}</span>
    </div>
    <div class="line-content">
      <div class="p-10 line-item" v-for="(line, j) in item.children" :key="j">
        <div class="content">
          <svg width="20px" height="20px" overflow="visible">
            <defs>
              <!-- id切记不一样不然引用时就是同一个了 -->
              <marker
                v-if="line.markerId === 'arrow'"
                :id="`${line.markerId}-${i}-${j}`"
                markerUnits="userSpaceOnUse"
                orient="auto"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
              >
                <path d="M0,0 L10,5 0,10 Z" fill="currentColor" transform="scale(0.6,0.6) rotate(0,5,5)"></path>
              </marker>
              <marker
                v-if="line.markerId! === 'circle'"
                :id="`${line.markerId}-${i}-${j}`"
                markerUnits="userSpaceOnUse"
                orient="auto"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
              >
                <path d="m0 5a5 5 0 1 0 10 0a5 5 0 1 0 -10 0z" fill="currentColor" transform="scale(0.6,0.6) rotate(0,5,5)" />
              </marker>
            </defs>
            <!-- currentColor是与字体的颜色color一致的意思 -->
            <path
              :d="line.path"
              fill="none"
              stroke="currentColor"
              stroke-width="2px"
              :stroke-dasharray="line.strokeDashArray?.length ? line.strokeDashArray : []"
              :marker-end="`url(#${line.markerId}-${i}-${j})`"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { LINE_LIST } from '@/configs/line';
</script>
<style lang="scss" scoped>
.line-content {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(5, 1fr);
}
.line-item {
  &:hover {
    cursor: pointer;
  }
}
.content {
  color: #999;
  &:hover {
    color: $themeColor;
  }
}
</style>
