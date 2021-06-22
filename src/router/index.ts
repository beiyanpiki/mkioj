import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/pages/home/index.vue'),
		meta: {
			title: 'Home',
			keepAlive: true,
		},
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
