// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import './assets/css/common.css'
import './assets/css/iconfont.css'
import axios from 'axios';
// ./指的是当前目录文件下
Vue.prototype.FileSaver = FileSaver
Vue.prototype.XLSX = XLSX
Vue.config.productionTip = false
Vue.prototype.axios = axios;

require('./mock')//此部分引入的是我们所编写的mockjs文档	
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  XLSX,
  FileSaver,
})
