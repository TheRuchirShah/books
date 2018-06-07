// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NotFound from './components/NotFound';
import FeatherIcon from './components/FeatherIcon';

Vue.config.productionTip = false

Vue.component('not-found', NotFound);
Vue.component('feather-icon', FeatherIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})