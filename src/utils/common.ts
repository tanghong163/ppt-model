/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 13:56:36
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-21 11:19:07
 * @FilePath: \ppt-model\src\utils\common.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { min, padStart } from 'lodash';

/**
 * @description:补足数字位数
 * @param {number} digit 数字
 * @param {number} len 位数
 * @return {*}
 */
export const fillDigit = (digit: number, len: number) => {
  return padStart('' + digit, len, '0');
};
/**
 * 判断设备
 */
export const isPC = () => {
  return !navigator.userAgent.match(/(IPhone|iPod|iPad|Android|Mobile|BlackBerry|Symbian|Windows Phone)/i);
};

export const getBase64 = (img: Blob, callback: (base64Url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

/**
 * @description:将base64图片格式转换为文件流
 * @param {string} data
 * @param {string} fileName
 * @return {*}返回文件流
 */
// export const base64toFile = (data: string, fileName: string) => {
//   const dataArr = data.split(',');
//   // atob() 对经过 base-64 编码的字符串进行解码
//   const byteString = atob(dataArr[1]);
//   const options = {
//     type: 'image/jpeg'
//     // endings: 'native'
//   };
//   // Uint8Array 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。
//   // 创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素
//   const u8Arr = new Uint8Array(byteString.length);
//   for (let i = 0; i < byteString.length; i++) {
//     u8Arr[i] = byteString.charCodeAt(i);
//   }
//   return new File([u8Arr], fileName + 'jpg', options);
// };

export const base64toFile = (data: string, fileName: string) => {
  let arr = data.split(','),
    mineArr = arr[0].match(/:(.*?);/) as string[],
    mine = mineArr[1],
    // 文件后缀
    suffix = mine.split('/')[1],
    // 使用atob() 对经过 base-64 编码的字符串进行解码
    bstr = atob(arr[1]),
    // 解码后的长度
    n = bstr.length,
    // Uint8Array 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。
    u8arr = new Uint8Array(n);
  // charCodeAt()方法返回字符串指定位置的 Unicode 码点;返回 0 到 65535 之间的整数
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  // new File(bits,name[,options])返回File对象实例,
  // btis第一个参数ArrayBuffer，ArrayBufferView，Blob，或者 DOMString 对象的 Array
  // name 文件名称或者文件路径,
  // options选项对象，包含文件的可选属性, 如type表示将要放到文件中的内容的 MIME 类型。默认值为 ""
  return new File([u8arr], `fileName.${suffix}`, { type: mine });
};
/**
 * @description: base64转Blob
 * @param {string} data 进行过base-64编码的字符串
 * @return {*} 返回一个Blob对象实例
 */
export const base64toBlob = (data: string): Blob => {
  let arr = data.split(','),
    mineArr = arr[0].match(/:(.*?);/) as string[],
    mine = mineArr[1],
    suffix = mine.split('/')[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: suffix });
};

/**
 * @description: blob转为file
 * @param {Blob} blob 对象{size,type}
 * @param {string} fileName 文字名称
 * @return {*} 返回File对象实例
 */
export const blobToFile = (blob: Blob, fileName: string): File => {
  let { type } = blob;
  return new File([blob], `${fileName}.${type}`, { type: `${type}` });
};

/**
 * @description: 下载二进制流文件
 * @param {Blob} fileStream 二进制流文件
 * @param {string} filename 文件名
 * @return {*}
 */
export function fileStreamDownload(fileStream: Blob | File, filename: string) {
  const elink = document.createElement('a'); // 创建a标签
  elink.download = filename; // 自定义下载文件名
  elink.style.display = 'none';
  elink.href = URL.createObjectURL(fileStream); // 创建新的URL对象
  document.body.appendChild(elink);
  elink.click();

  URL.revokeObjectURL(elink.href);
  document.body.removeChild(elink);
}
