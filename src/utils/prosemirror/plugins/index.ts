/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-07 14:21:41
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 15:03:49
 * @FilePath: \ppt-model\src\utils\prosemirror\plugins\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { keymap } from 'prosemirror-keymap';
import { Schema } from 'prosemirror-model';
import { history } from 'prosemirror-history';
import { baseKeymap } from 'prosemirror-commands';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';

import { buildKeymap } from './keymap';
import { buildInputRules } from './inputrules';

export const buildPlugins = (schema: Schema) => {
  return [buildInputRules(schema), keymap(buildKeymap(schema)), keymap(baseKeymap), dropCursor(), gapCursor(), history()];
};
