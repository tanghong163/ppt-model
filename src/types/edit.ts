/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-13 15:50:43
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-04 08:46:52
 * @FilePath: \ppt-model\src\types\edit.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface AlignmentLineAxis {
  x: number;
  y: number;
}

export interface AlignmentLineProps {
  type: 'vertical' | 'horizontal';
  axis: AlignmentLineAxis;
  length: number;
}
