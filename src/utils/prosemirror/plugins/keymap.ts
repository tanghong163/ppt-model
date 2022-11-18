/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-07 14:22:45
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 15:17:33
 * @FilePath: \ppt-model\src\utils\prosemirror\plugins\keymap.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { splitListItem, liftListItem, sinkListItem } from 'prosemirror-schema-list';
import { Schema } from 'prosemirror-model';
import { undo, redo } from 'prosemirror-history';
import { undoInputRule } from 'prosemirror-inputrules';
import { Command } from 'prosemirror-state';
import { toggleMark, selectParentNode, joinUp, joinDown } from 'prosemirror-commands';

export const buildKeymap = (schema: Schema) => {
  // 以下会报错所以改成
  // const keys = {};
  // const bind = (key: string, cmd: Command) => (keys[key] = cmd);
  const keys: any = {};
  const bind = (key: string, cmd: Command) => (keys[key] = cmd);

  bind('Alt-ArrowUp', joinUp);
  bind('Alt-ArrowDown', joinDown);
  bind('Ctrl-z', undo);
  bind('Ctrl-y', redo);
  bind('Backspace', undoInputRule);
  bind('Escape', selectParentNode);
  bind('Ctrl-b', toggleMark(schema.marks.strong));
  bind('Ctrl-i', toggleMark(schema.marks.em));
  bind('Ctrl-u', toggleMark(schema.marks.underline));
  bind('Ctrl-d', toggleMark(schema.marks.strikethrough));

  bind('Enter', splitListItem(schema.nodes.list_item));
  bind('Mod-[', liftListItem(schema.nodes.list_item));
  bind('Mod-]', sinkListItem(schema.nodes.list_item));

  return keys;
};
