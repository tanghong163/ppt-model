import { ScreenState } from './type';
import { defineStore } from 'pinia';
export const useSnapshotStore = defineStore('snapshot', {
  state: (): ScreenState => ({
    snapshotCursor: -1, // 历史快照指针
    snapshotLength: 0 // 历史快照长度
  })
});
