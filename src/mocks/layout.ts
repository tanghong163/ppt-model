import { Slide } from '@/types/slides';

import backgroundImg from '@/assets/logo.png';

export const layout: Slide[] = [
  {
    id: 'test-slide-11',
    elements: [
      {
        type: 'text',
        id: 'TQOTAp',
        left: 304.9074074074074,
        top: 198.10185185185182,
        width: 417.9629629629629,
        height: 140,
        content: "<p style='text-align: center;'><strong><span style='font-size: 80px'>text content</span></strong></p>",
        rotate: 0,
        defaultFontName: 'Microsoft Yahei',
        defaultColor: '#333',
        wordSpace: 5
      }
    ],
    background: {
      type: 'image',
      image: `${backgroundImg}`,
      imageSize: 'cover'
    }
  },
  {
    id: 'test-slide-12',
    elements: [
      {
        type: 'text',
        id: 'TQOTAp',
        left: 304.9074074074074,
        top: 198.10185185185182,
        width: 417.9629629629629,
        height: 140,
        content: "<p style='text-align: center;'><strong><span style='font-size: 80px'>渐变色</span></strong></p>",
        rotate: 0,
        defaultFontName: 'Microsoft Yahei',
        defaultColor: '#333',
        wordSpace: 5
      }
    ],
    background: {
      type: 'gradient',
      gradientType: 'linear',
      gradientColor: ['blue', 'red'],
      gradientRotate: 45
    }
  },
  {
    id: 'test-slide-13',
    elements: [
      {
        type: 'text',
        id: 'TQOTAp',
        left: 304.9074074074074,
        top: 198.10185185185182,
        width: 417.9629629629629,
        height: 140,
        content: "<p style='text-align: center;'><strong><span style='font-size: 80px'>text content</span></strong></p>",
        rotate: 0,
        defaultFontName: 'Microsoft Yahei',
        defaultColor: '#333',
        wordSpace: 5
      }
    ],
    background: {
      type: 'image',
      image: `${backgroundImg}`,
      imageSize: 'cover'
    }
  },
  {
    id: 'test-slide-14',
    elements: [
      {
        type: 'text',
        id: 'TQOTAp',
        left: 304.9074074074074,
        top: 198.10185185185182,
        width: 417.9629629629629,
        height: 140,
        content: "<p style='text-align: center;'><strong><span style='font-size: 80px'>渐变色</span></strong></p>",
        rotate: 0,
        defaultFontName: 'Microsoft Yahei',
        defaultColor: '#333',
        wordSpace: 5
      }
    ],
    background: {
      type: 'gradient',
      gradientType: 'linear',
      gradientColor: ['blue', 'red'],
      gradientRotate: 45
    }
  }
];
