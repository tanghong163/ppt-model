<!--
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-26 08:51:14
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-29 10:09:55
 * @FilePath: \ppt-model\src\views\editor\canvas-tool\cpns\shape-pool.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="shape-pool" v-for="(item, i) in SHAPE_LIST" :key="i">
    <div class="flex-fs-center">
      <span class="squar"></span>
      <span>{{ item.type }}</span>
    </div>
    <div class="p-tb-10 shape-content">
      <div class="shape-item" v-for="(shape, j) in item.children" :key="j">
        <div class="content">
          <svg overflow="visible" width="18" height="18">
            <g :transform="`scale(${18 / shape.viewBox[0]}, ${18 / shape.viewBox[1]}) translate(0,0) matrix(1,0,0,1,0,0)`">
              <path
                class="shape-path"
                :class="{ outlined: shape.outlined }"
                vector-effect="non-scaling-stroke"
                stroke="currentColor"
                stroke-linecap="butt"
                stroke-miterlimit="8"
                :fill="shape.outlined ? '#999' : 'transparent'"
                :stroke="shape.outlined ? 'transparent' : '#999'"
                stroke-width="2"
                :d="shape.path"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SHAPE_LIST } from '@/configs/shape';
</script>
<style lang="scss" scoped>
.shape-content {
  display: grid;
  // grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(10, 1fr);
  gap: 4px;
}
.shape-item {
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
// .item {
//   color: rgb(187, 182, 182);
//   font-size: 25px;
//   &:hover {
//     color: rgb(204, 70, 70);
//     cursor: pointer;
//   }
// }
</style>
