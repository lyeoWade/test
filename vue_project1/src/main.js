// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false;


import axios from 'axios'
axios.defaults.baseURL='http://39.108.26.235:8084/etxs/';
// http://39.108.26.235:8084/swagger-ui.html?urls.primaryName=ETXS#/etxs-controller/getResonanceQuotaInfoUsingPOST

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     Indicator.open("加载中...");
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//    Indicator.close();
//     return response;
//   }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
