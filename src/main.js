import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

function aaa(){
  console.log(12345679,'我是v_glguo_x写的')
}
aaa()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
