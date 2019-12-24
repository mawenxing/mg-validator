import Vue from 'vue'
import App from './App.vue'
/* eslint-disable */
// 引入验证器
import mgValidator from 'mg-validator'

Vue.config.productionTip = false
// 安装插件
Vue.use(mgValidator)

new Vue({
  render: h => h(App)
}).$mount('#app')
