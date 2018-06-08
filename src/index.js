/* jshint esversion: 6 */
// index.js 项目入口文件 
// 引入 Vue
import Vue from 'vue';
import App from './app.vue';
//引入全局样式表
import './assets/styles/index.styl';
//在HTML中创建DOM节点
const root = document.createElement('div');
document.body.appendChild(root);
//将Vue根文件注入DOM节点(=>为ES6语法|$mount为Vue实例的生命周期钩子)
new Vue({
  render: (h) => h(App)
}).$mount(root);