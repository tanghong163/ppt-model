/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 09:18:47
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-03 16:38:15
 * @FilePath: \ppt-model\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { globalRegister } from '@/global/index';
import App from './App.vue';
// @icon-park/vue-next的样式引用
import '@icon-park/vue-next/styles/index.css';

// import '@/assets/styles/global.scss';
// import '@/assets/styles/app.scss';
import '@/assets/styles/index.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(globalRegister);
app.mount('#app');
