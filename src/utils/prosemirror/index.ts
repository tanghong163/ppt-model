/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-07 14:21:02
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-07 14:21:20
 * @FilePath: \ppt-model\src\utils\prosemirror\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema, DOMParser } from 'prosemirror-model';

import { buildPlugins } from './plugins/index';
import { schemaNodes, schemaMarks } from './schema/index';

const schema = new Schema({
  nodes: schemaNodes,
  marks: schemaMarks
});

export const createDocument = (content: string) => {
  const htmlString = `<div>${content}</div>`;
  const parser = new window.DOMParser();
  const element = parser.parseFromString(htmlString, 'text/html').body.firstElementChild;
  return DOMParser.fromSchema(schema).parse(element as Element);
};

export const initProsemirrorEditor = (dom: Element, content: string, props = {}) => {
  return new EditorView(dom, {
    state: EditorState.create({
      doc: createDocument(content),
      plugins: buildPlugins(schema)
    }),
    ...props
  });
};
