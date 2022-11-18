/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 16:54:06
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-04 10:16:05
 * @FilePath: \ppt-model\src\global\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';
import registerElement from './register-element';
import registerIcons from './register-icons';
import Contextmenu from './directive/contextmenu';

export function globalRegister(app: App): void {
  app.use(registerElement);
  app.use(registerIcons);
  app.directive('contextmenu', Contextmenu);
}
