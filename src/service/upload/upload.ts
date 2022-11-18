/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-20 09:16:19
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-20 14:47:05
 * @FilePath: \ppt-model\src\service\upload\upload.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from '@/service/index';

export const uploadImageRequest = (data: FormData) => {
  return http.request({
    method: 'post',
    url: '/uploadImage',
    data
  });
};
