/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-05 14:29:36
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-10 08:29:45
 * @FilePath: \ppt-model\src\hooks\useGlobalHotkey.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { useKeyboardStore, useMainStore } from '@/stores';

import { KEYS } from '@/configs/hotkey';

import useSlideHandler from '@/hooks/useSlideHandler';

export default () => {
  const mainStore = useMainStore();
  const { thumbnailsFocus } = storeToRefs(mainStore);

  const keyboardStore = useKeyboardStore();
  const { ctrlKeyState, shiftKeyState } = storeToRefs(keyboardStore);
  const { setCtrlKeyState, setShiftKeyState } = keyboardStore;

  const { selectAllSlide, createSlide, cutSlide, copySlide, pasteSlide, duplicateSlide, removeSlide } = useSlideHandler();

  const selectAll = (e: KeyboardEvent) => {
    // 组织默认事件触发后的默认动作
    e.preventDefault();
    if (thumbnailsFocus.value) {
      selectAllSlide();
    }
  };
  const remove = () => {
    if (thumbnailsFocus.value) removeSlide();
  };
  const cut = () => {
    if (thumbnailsFocus.value) cutSlide();
  };
  const copy = () => {
    if (thumbnailsFocus.value) copySlide();
  };
  const paste = () => {
    if (thumbnailsFocus.value) pasteSlide();
  };
  const duplicate = () => {
    if (thumbnailsFocus.value) duplicateSlide();
  };
  const keydownListener = (e: KeyboardEvent) => {
    const { ctrlKey, shiftKey } = e;
    let key = e.key.toUpperCase();

    if (ctrlKey && !ctrlKeyState.value) setCtrlKeyState(true);
    if (shiftKey && !shiftKeyState.value) setShiftKeyState(true);
    if (ctrlKey && key === KEYS.X) {
      e.preventDefault();
      cut();
    }
    if (ctrlKey && key === KEYS.C) {
      e.preventDefault();
      copy();
    }
    if (ctrlKey && key === KEYS.V) {
      e.preventDefault();
      paste();
    }
    if (ctrlKey && key === KEYS.A) {
      selectAll(e);
    }
    if (key === KEYS.ENTER) {
      e.preventDefault();
      createSlide();
    }
    if (ctrlKey && key === KEYS.D) {
      e.preventDefault();
      duplicate();
    }
    if (key === KEYS.DELETE) {
      e.preventDefault();
      remove();
    }
  };
  const keyupListener = (e: KeyboardEvent) => {
    if (ctrlKeyState.value) keyboardStore.setCtrlKeyState(false);
    if (shiftKeyState.value) keyboardStore.setShiftKeyState(false);
  };
  onMounted(() => {
    document.addEventListener('keydown', keydownListener);
    document.addEventListener('keyup', keyupListener);
  });
};
