import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Portfolio from '../views/Portfolio';
import Contact from '../views/Contact';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: Portfolio
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
