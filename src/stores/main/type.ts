/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-06 15:34:33
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-08 10:17:45
 * @FilePath: \ppt-model\src\stores\main\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ToolbarStates } from '@/types/toolbar';
export interface mainState {
  activeElementIdList: string[];
  activeGroupElementId: string;
  canvasPercentage: number;
  canvasScale: number;
  handleElementId: string;
  toolbarState: ToolbarStates; // 右侧工具栏状态
  editorAreaFocus: boolean;
  selectedSlidesIndex: number[];
  thumbnailsFocus: boolean;
}
