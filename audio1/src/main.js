import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './general/pxtorem.js';
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
import { Toast } from 'vant';

Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;//允许跨域携带cookie信息

// axios.defaults.baseURL = "/apis/";
// axios.defaults.baseURL = "http://58.210.88.98:10080/citylivable";
// axios.defaults.baseURL = "http://thirdapps.ksecard.cn:12503/citylivable";

Vue.use(Vant);

Vue.config.productionTip = false;

Toast.setDefaultOptions("loading", {
    duration: 20000,
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
