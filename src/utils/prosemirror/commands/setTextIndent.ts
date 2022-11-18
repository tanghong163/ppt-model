/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-07 15:26:46
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 15:27:35
 * @FilePath: \ppt-model\src\utils\prosemirror\commands\setTextIndent.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Schema } from 'prosemirror-model';
import { TextSelection, AllSelection, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { isList } from './toggleList';

function setNodeIndentMarkup(tr: Transaction, pos: number, delta: number): Transaction {
  if (!tr.doc) return tr;

  const node = tr.doc.nodeAt(pos);
  if (!node) return tr;

  const minIndent = 0;
  const maxIndent = 7;

  let indent = (node.attrs.indent || 0) + delta;
  if (indent < minIndent) indent = minIndent;
  if (indent > maxIndent) indent = maxIndent;

  if (indent === node.attrs.indent) return tr;

  const nodeAttrs = {
    ...node.attrs,
    indent
  };

  return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}

const setTextIndent = (tr: Transaction, schema: Schema, delta: number): Transaction => {
  const { selection, doc } = tr;
  if (!selection || !doc) return tr;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) return tr;

  const { from, to } = selection;

  doc.nodesBetween(from, to, (node, pos) => {
    const nodeType = node.type;

    if (nodeType.name === 'paragraph' || nodeType.name === 'blockquote') {
      tr = setNodeIndentMarkup(tr, pos, delta);
      return false;
    } else if (isList(node, schema)) return false;
    return true;
  });

  return tr;
};

export const indentCommand = (view: EditorView, delta: number) => {
  const { state } = view;
  const { schema, selection } = state;

  const tr = setTextIndent(state.tr.setSelection(selection), schema, delta);
  if (tr.docChanged) {
    view.dispatch(tr);
    return true;
  }

  return false;
};
