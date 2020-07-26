import Vue from 'vue';
import Vuelidate from 'vuelidate';
import store from './store';
import App from './App.vue';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
