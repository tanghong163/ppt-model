/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-26 10:39:32
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-09 14:15:45
 * @FilePath: \ppt-model\src\utils\crypto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CryptoJS from 'crypto-js';

const CRYPTO_KEY = 'pptist';

/**
 * 加密
 * @param msg 待加密字符串
 */
export const encrypt = (msg: string) => {
  return CryptoJS.AES.encrypt(msg, CRYPTO_KEY).toString();
};

/**
 * 解密
 * @param ciphertext 待解密字符串
 */
export const decrypt = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, CRYPTO_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
