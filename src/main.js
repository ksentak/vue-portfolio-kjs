import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faGithub,
	faLinkedinIn,
	faStackOverflow,
	faMedium
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faPhone,
	faMapMarkerAlt,
	faPlus,
	faTimes,
	faCode,
	faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faGithub,
	faLinkedinIn,
	faStackOverflow,
	faMedium,
	faEnvelope,
	faPhone,
	faMapMarkerAlt,
	faPlus,
	faTimes,
	faCode,
	faExternalLinkAlt
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
