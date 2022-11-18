/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-09 15:16:25
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-10 09:54:28
 * @FilePath: \ppt-model\src\hooks\usePasteTextClipboardData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import useAddSlidesOrElements from './useAddSlidesOrElements';
import { pasteCustomClipboardString } from '@/utils/clipboard';
interface PasteTextClipboardDataOptions {
  onlySlide?: boolean;
  onlyElement?: boolean;
}
export default () => {
  const addSlidesOrElements = useAddSlidesOrElements();
  const { addSlidesFromData } = addSlidesOrElements;
  const pasteTextClipboardData = (text: string, options?: PasteTextClipboardDataOptions) => {
    const clipboardData = pasteCustomClipboardString(text);
    if (typeof clipboardData === 'object') {
      const { type, data } = clipboardData;
      if (type === 'slide') addSlidesFromData(data);
    }
  };
  return {
    pasteTextClipboardData
  };
};
