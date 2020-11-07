import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
function bbb(){
  console.log(123456,"我是v_glguo写的")
}

function aaa(){
  console.log('我是v_glguo_x写的，给亮老比演示的代码')
}
aaa()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
