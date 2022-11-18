/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-08 10:10:28
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 15:19:08
 * @FilePath: \ppt-model\src\configs\hotkey.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const enum KEYS {
  X = 'X',
  C = 'C',
  V = 'V',
  A = 'A',
  D = 'D',
  ENTER = 'ENTER',
  DELETE = 'DELETE'
}
export const HOTKEY_DOC = [
  {
    type: '通用',
    children: [
      { label: '剪切', value: 'Ctrl + X' },
      { label: '复制', value: 'Ctrl + C' },
      { label: '粘贴', value: 'Ctrl + V' },
      { label: '快速复制粘贴', value: 'Ctrl + D' },
      { label: '全选', value: 'Ctrl + A' },
      { label: '撤销', value: 'Ctrl + Z' },
      { label: '恢复', value: 'Ctrl + Y' },
      { label: '删除', value: 'Delete / Backspace' },
      { label: '多选', value: '按住 Ctrl 或 Shift' },
      { label: '打印', value: 'Ctrl + P' },
      { label: '关闭弹窗', value: 'ESC' }
    ]
  },
  {
    type: '幻灯片放映',
    children: [
      { label: '从头开始放映幻灯片', value: 'F5' },
      { label: '从当前开始放映幻灯片', value: 'Shift + F5' },
      { label: '切换上一页', value: '↑ / ← / PgUp' },
      { label: '切换下一页', value: '↓ / → / PgDown' },
      { label: '切换下一页', value: 'Enter / Space' },
      { label: '退出放映', value: 'ESC' },
      { label: '调整画笔笔触大小', value: '鼠标滚轮' }
    ]
  },
  {
    type: '幻灯片编辑',
    children: [
      { label: '新建幻灯片', value: 'Enter' },
      { label: '移动画布', value: 'Space + 鼠标拖拽' },
      { label: '缩放画布', value: 'Ctrl + 鼠标滚轮' },
      { label: '放大画布', value: 'Ctrl + =' },
      { label: '缩小画布', value: 'Ctrl + -' },
      { label: '使画布适应当前屏幕', value: 'Ctrl + 0' },
      { label: '上一页（未选中元素）', value: '↑ / ←' },
      { label: '下一页（未选中元素）', value: '↓ / →' },
      { label: '上一页', value: '鼠标上滚 / PgUp' },
      { label: '下一页', value: '鼠标下滚 / PgDown' }
    ]
  },
  {
    type: '元素操作',
    children: [
      { label: '移动', value: '↑ / ← / ↓ / →' },
      { label: '锁定', value: 'Ctrl + L' },
      { label: '组合', value: 'Ctrl + G' },
      { label: '取消组合', value: 'Ctrl + Shift + G' },
      { label: '置顶层', value: 'Alt + F' },
      { label: '置底层', value: 'Alt + B' },
      { label: '锁定宽高比例', value: '按住 Ctrl 或 Shift' },
      { label: '创建水平 / 垂直线条', value: '按住 Ctrl 或 Shift' },
      { label: '切换焦点元素', value: 'Tab' },
      { label: '确认图片裁剪', value: 'Enter' }
    ]
  },
  {
    type: '表格编辑',
    children: [
      { label: '聚焦到下一个单元格', value: 'Tab' },
      { label: '在上方插入一行', value: 'Ctrl + ↑' },
      { label: '在下方插入一行', value: 'Ctrl + ↓' },
      { label: '在左侧插入一列', value: 'Ctrl + ←' },
      { label: '在右侧插入一列', value: 'Ctrl + →' }
    ]
  },
  {
    type: '图表数据编辑',
    children: [{ label: '聚焦到下一行', value: 'Enter' }]
  },
  {
    type: '文本编辑',
    children: [
      { label: '加粗', value: 'Ctrl + B' },
      { label: '斜体', value: 'Ctrl + I' },
      { label: '下划线', value: 'Ctrl + U' },
      { label: '删除线', value: 'Ctrl + D' }
    ]
  }
];
