import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);


// used to include all the imports.
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.use(VueRouter);
export const EventBus=new Vue();

const router=new VueRouter({
  routes:routes
})
new Vue({
  el: '#app',router,
  render: h => h(App)
})
