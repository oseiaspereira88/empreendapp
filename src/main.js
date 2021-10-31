import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import LazyTransition from 'vue-lazy-transition';

Vue.config.productionTip = false
Vue.use(LazyTransition)

new Vue({
  vuetify,
  render: h => h(App)
})



    .$mount('#app')
