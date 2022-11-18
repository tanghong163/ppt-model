/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-11 14:14:26
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 15:19:39
 * @FilePath: \ppt-model\src\configs\hotkeyDraw.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// interface hotkey
export const hotkeyList = [
  {
    headerName: '通用',
    children: [
      {
        name: '剪切',
        keys: 'Ctrl + X'
      },
      {
        name: '复制',
        keys: 'Ctrl + C'
      }
    ]
  },
  {
    headerName: '幻灯片放映',
    children: [
      {
        name: '从头开始放映幻灯片',
        keys: 'F5'
      },
      {
        name: '从当前开始放映幻灯片',
        keys: 'Shift + F5'
      }
    ]
  }
];
