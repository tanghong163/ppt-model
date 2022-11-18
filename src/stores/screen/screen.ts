import { defineStore } from 'pinia';

import { screenState } from './type';

export const useScreenStore = defineStore('screen',{
  state: (): screenState => {
    return {
      screening: false // 是否进入放映状态
    }
  }
})

