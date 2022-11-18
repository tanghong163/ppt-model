/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-04 11:14:21
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-04 11:16:23
 * @FilePath: \ppt-model\src\mocks\components.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ContextMenu from '@/components/context-menu/index';

declare module 'vue' {
  export interface GlobalComponents {
    ContextMenu: typeof ContextMenu;
  }
}

export {};
