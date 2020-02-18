import Vue from 'vue'
import 'lib-flexible/flexible' // flexible会自动根据设备情况动态设置rem的值的大小
import router from './router'

import App from './App.vue'

 
//关闭提示
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// new Vue({
//   el:'#app',
//   render:h=>h(App),
// })

new Vue({
  el:'#app',
  components:{App},
  template:"<App/>",
  router
})





