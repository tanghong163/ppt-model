/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 09:18:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-05 14:42:10
 * @FilePath: \ppt-model\src\stores\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useScreenStore } from './screen/screen';
import { useSlidesStore } from './slides/sildes';
import { useMainStore } from './main/main';
import { useKeyboardStore } from './keyboard/keyboard';
import { useSnapshotStore } from './snapshot/snapshot';
export { useScreenStore, useSlidesStore, useMainStore, useKeyboardStore, useSnapshotStore };
