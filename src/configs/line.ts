/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-27 10:40:02
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 14:15:55
 * @FilePath: \ppt-model\src\configs\line.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const LINE_LIST = [
  {
    type: '直线',
    children: [
      {
        path: 'M 0 0 L 20 20',
        markerId: ''
      },
      {
        path: 'M 0 0 L 20 20',
        strokeDashArray: '3 3',
        markerId: ''
      },
      {
        path: 'M 0 0 L 20 20',
        markerId: 'arrow'
      },
      {
        path: 'M 0 0 L 20 20',
        strokeDashArray: '3 3',
        markerId: 'arrow'
      },
      {
        path: 'M 0 0 L 20 20',
        markerId: 'circle'
      }
    ]
  },
  {
    type: '折线、曲线',
    children: [
      {
        path: 'M 0 0 L 0 20 L 20 20',
        markerId: 'arrow'
      },
      { path: 'M 0 0 Q 0 20 20 20', markerId: 'arrow' },
      { path: 'M 0 0 C 20 0 0 20 20 20', markerId: 'arrow' }
    ]
  }
];
