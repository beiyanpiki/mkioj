import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/pages/home/index.vue'),
		meta: {
			title: 'Home',
			keepAlive: true,
		},
	},
	{
		path: '/account',
		name: 'Account',
		meta: {
			title: 'Account',
			keepAlive: true,
			key: '/account',
		},
		component: () => import('@/pages/account/index.vue'),
	},
	{
		path: '/recovery',
		name: 'Recovery',
		meta: {
			title: 'Recovery',
			keepAlive: true,
			key: '/account',
		},
		component: () => import('@/pages/recovery/index.vue'),
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
