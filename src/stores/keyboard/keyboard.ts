/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-13 15:41:15
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-13 16:22:24
 * @FilePath: \ppt-model\src\stores\keyboard\keyboard.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { KeyboardState } from './type';
import { defineStore } from 'pinia';

export const useKeyboardStore = defineStore('keyboard', {
  state: (): KeyboardState => ({
    ctrlKeyState: false, // ctrl键按下状态
    shiftKeyState: false, // shift键按下状态
    spaceKeyState: false // space键按下状态
  }),
  getters: {
    ctrlOrShiftKeyActive(state) {
      return state.ctrlKeyState || state.shiftKeyState;
    }
  },

  actions: {
    setCtrlKeyState(active: boolean) {
      this.ctrlKeyState = active;
    },
    setShiftKeyState(active: boolean) {
      this.shiftKeyState = active;
    },
    setSpaceKeyState(active: boolean) {
      this.spaceKeyState = active;
    }
  }
});
