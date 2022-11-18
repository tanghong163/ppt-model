/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 09:18:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-04 10:45:52
 * @FilePath: \ppt-model\src\shims-vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
