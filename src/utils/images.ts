/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-29 14:35:54
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-09-29 16:20:40
 * @FilePath: \ppt-model\src\utils\images.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface ImageSize {
  width: number,
  height: number
}
/**
 * @description: 获取图像文件的DataURL
 * @param {File} file：图像文件
 * @return {*}以promise的形式返回DataURL
 */
export const getImageDataURL = ( file: File): Promise<string> => {
  const reader = new FileReader();
  return new Promise((resolve,reject) =>{
    reader.addEventListener('load', function(){
      resolve(reader.result as string)
    },false)
    reader.readAsDataURL(file)
  })
}
/**
 * @description: 获取图片的原始宽高
 * @param {string} src 图片地址(DataURL)
 * @return {*}以Promise的形式返回图片的原始宽高
 */
export const getImageSize = (src: string): Promise<ImageSize> => {
  return new Promise((resolve,reject) => {
    // 在body上创建一个原始图片，以便获取其宽高；获取后再移除
    const img = document.createElement('img');
    img.src = src;
    img.style.opacity = '0';
    document.body.appendChild(img);

    img.onload = () => {
      const imgWidth = img.clientWidth;
      const imgHeight = img.clientHeight;

      img.onload = null;
      img.onerror = null;
      document.body.removeChild(img);

      resolve({width: imgWidth,height: imgHeight})

    }
    img.onerror= () => {
      img.onload = null
      img.onerror = null
    }
  })
}
