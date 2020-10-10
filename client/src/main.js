import Vue from 'vue';
import App from './App.vue';
import router from './router';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
