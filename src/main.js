import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import App from './App'
import router from './router'
import { store } from './store/store';

Vue.config.productionTip = false
Vue.use(VueNativeSock, 'wss://ws.blockchain.info/inv', { store, format: 'json' });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
