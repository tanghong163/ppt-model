/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-27 14:30:31
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-08 14:47:20
 * @FilePath: \ppt-model\src\stores\slides\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { Slide} from '@/mocks/slides/type';
import { Slide } from '@/types/slides';

export interface SlidesState {
  slides: Slide[];
  slideIndex: number;
  viewportRatio: number;
  storeSlide: Slide[];
}
