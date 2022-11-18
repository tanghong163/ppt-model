/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-07 15:22:17
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 15:22:28
 * @FilePath: \ppt-model\src\utils\emitter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import mitt, { Emitter } from 'mitt';

export const enum EmitterEvents {
  RICH_TEXT_COMMAND = 'RICH_TEXT_COMMAND',
  OPEN_CHART_DATA_EDITOR = 'OPEN_CHART_DATA_EDITOR',
  OPEN_LATEX_EDITOR = 'OPEN_LATEX_EDITOR'
}

export interface RichTextAction {
  command: string;
  value?: string;
}

export interface RichTextCommand {
  target?: string;
  action: RichTextAction | RichTextAction[];
}

type Events = {
  [EmitterEvents.RICH_TEXT_COMMAND]: RichTextCommand;
  [EmitterEvents.OPEN_CHART_DATA_EDITOR]: void;
  [EmitterEvents.OPEN_LATEX_EDITOR]: void;
};

const emitter: Emitter<Events> = mitt<Events>();

export default emitter;
