import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BusinessView from '@/views/BusinessView.vue';
import AboutView from '../views/AboutView.vue';
import PricesView from '@/views/PricesView.vue';
import OrderView from '@/views/OrderView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/business',
			name: 'business',
			component: BusinessView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
		{
			path: '/prices',
			name: 'prices',
			component: PricesView,
		},
		{
			path: '/order',
			name: 'order',
			component: OrderView,
		},
	],
});

export default router;
