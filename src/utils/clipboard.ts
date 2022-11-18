/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-09 14:19:17
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-10 09:53:39
 * @FilePath: \ppt-model\src\utils\clipboard.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ClipboardJS from 'clipboard';
import { decrypt } from '@/utils/crypto';
// 复制内容到剪切板
export const copyText = (text: string) => {
  return new Promise((resolve, reject) => {
    let newBtn = document.createElement('button');
    let clipboard = new ClipboardJS(newBtn, {
      text: (): string => text,
      action: () => 'copy',
      container: document.body //设置焦点元素值
    });
    clipboard.on('success', e => {
      // 清除创建的事件对象; 更准确的管理单页面应用的DOM生命周期
      // console.info('Action:', e.action);
      // console.info('Text:', e.text);
      // console.info('Trigger:', e.trigger);
      clipboard.destroy();
      resolve(e);
    });
    clipboard.on('error', e => {
      // console.error('Action:', e.action);
      // console.error('Trigger:', e.trigger);
      clipboard.destroy();
      reject(e);
    });
    document.body.appendChild(newBtn);
    // 当前元素触发点击事件
    newBtn.click();
    document.body.removeChild(newBtn);
  });
};

// 读取剪贴板
export const readClipboard = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard?.readText) {
      navigator.clipboard.readText().then(text => {
        if (!text) reject('剪贴板为空或者不包含文本');
        return resolve(text);
      });
    } else reject('浏览器不支持或禁止访问剪贴板，请使用快捷键 Ctrl + V');
  });
};
// 解析加密后的剪贴板内容
export const pasteCustomClipboardString = (text: string) => {
  let clipBoardData;
  try {
    clipBoardData = JSON.parse(decrypt(text));
  } catch {
    clipBoardData = text;
  }
  return clipBoardData;
};
