/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-20 08:52:53
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-20 14:55:00
 * @FilePath: \ppt-model\src\service\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';

const instance = axios.create({
  timeout: 3000
});

instance.interceptors.request.use(
  config => {
    // console.log('requestConfig', config);
    // return Promise.resolve(config);
    return config;
  },
  error => {
    //  请求错误的常见状态码：4XX  401-请求超时  404-mot found
    // console.log('requestError', error);
    const hide = message.loading('Action in progress..', 0);
    setTimeout(hide, 2500);
  }
);

instance.interceptors.response.use(
  response => {
    // const { request, data, status, statusText, headers, config } = response;
    // console.log('responseConfig', response);
    return response;
  },
  error => {
    // 响应错误的常见状态码 5XX 500-服务器错误 502-服务器重启
    handeleResponseAxiosError(error);
  }
);

const handeleResponseAxiosError = (error: AxiosError) => {
  console.log('responseError', error);
  const { code, config, name, request } = error;
  if (code === 'ECONNABORTED' || error.message === 'timeout of 2000ms exceeded' || error.message.includes('timeout')) {
    const hide = message.loading(error.message, 0);
    setTimeout(hide, 2500);
  }
};
// 结合请求拦截器与响应拦截器来说，不管是请求错误还是响应错误，都会执行catch方法。
// instance
//   .get('')
//   .then(res => {})
//   .catch(err => {});
export default instance;
