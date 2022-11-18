/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-03 15:22:17
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 10:19:14
 * @FilePath: \ppt-model\src\global\directive\contextmenu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Directive, DirectiveBinding, createVNode, render } from 'vue';

import { ContextmenuItem } from '@/types/contextmenu';

import ContextMenu from '@/components/context-menu/index';

const CTX_CONTEXTMENU_HANDLER = 'CTX_CONTEXTMENU_HANDLER';

const contextmenuListener = (el: HTMLElement, event: MouseEvent, binding: DirectiveBinding) => {
  // 阻止捕获和冒泡阶段中当前事件的进一步传播
  event.stopPropagation();
  // 阻止默认事件触发后的默认动作
  event.preventDefault();

  // 用于放置右键菜单项的容器
  let container: HTMLElement | null = null;

  // 获取菜单项的数据;
  let menus: ContextmenuItem = binding.value();
  if (!menus) return;

  // 移除右键菜单项容器
  const removeContextmenu = () => {
    if (container) {
      document.body.removeChild(container);
      container = null;
      // 页面滚动、窗口大小变化时移除菜单
      document.body.removeEventListener('scroll', removeContextmenu);
      document.body.removeEventListener('resize', removeContextmenu);
    }
  };
  // 菜单项的具体配置
  let options = {
    axis: {
      x: event.x,
      y: event.y
    },
    el,
    menus,
    removeContextmenu
  };
  container = document.createElement('div');
  // 创建虚拟节点
  const vnode = createVNode(ContextMenu, options, null);
  // 渲染组件
  render(vnode, container);
  // 将容器添加为body的子元素
  document.body.appendChild(container);

  // 页面滚动、窗口大小变化时移除菜单
  document.body.removeEventListener('scroll', removeContextmenu);
  document.body.removeEventListener('resize', removeContextmenu);
};

const ContextmenuDirective: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el[CTX_CONTEXTMENU_HANDLER] = (event: MouseEvent) => {
      contextmenuListener(el, event, binding);
    };
    el.addEventListener('contextmenu', el[CTX_CONTEXTMENU_HANDLER]);
  }
};

export default ContextmenuDirective;
