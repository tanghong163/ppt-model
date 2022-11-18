/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-11-02 11:05:59
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-02 14:56:20
 * @FilePath: \ppt-model\src\hooks\useSlideBackgroundStyle.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Ref, computed } from 'vue';

import { SlideBackground } from '@/types/slides';

// 幻灯片背景色计算
export default (background: Ref<SlideBackground | undefined>) => {
  const backgroundStyle = computed(() => {
    // 幻灯片不设置背景色的默认颜色
    if (!background.value) return { backgroundColor: '#fff' };

    const { type, color, image, imageSize, gradientColor, gradientType, gradientRotate } = background.value;

    // 纯色填充,设置背景色
    if (type === 'solid') return { backgroundColor: color };
    // 图片填充
    if (type === 'image') {
      if (!image) return { backgroundColor: '#fff' };
      if (imageSize === 'repeat') {
        return {
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain'
        };
      }
      return {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: imageSize || 'cover' //imageSize不存在时给定的默认值
      };
    }
    // 渐变填充
    if (type === 'gradient') {
      const color1 = gradientColor ? gradientColor[0] : '#fff';
      const color2 = gradientColor ? gradientColor[1] : '#fff';
      const rotate = gradientRotate || 0;
      // 两种
      if (gradientType === 'radial') return { backgroundImage: `linear-gradient(${color1}, ${color2})` };
      return { backgroundImage: `linear-gradient(${rotate}deg,${color1},${color2})` };
    }
  });
  return {
    backgroundStyle
  };
};
