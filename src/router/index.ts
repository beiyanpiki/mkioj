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
			key: 'home',
		},
	},
	{
		path: '/contest',
		name: 'Contest',
		component: () => import('@/pages/contest/index.vue'),
		meta: {
			title: 'Contest',
			keepAlive: true,
			key: 'contest',
		},
	},
	{
		path: '/account',
		name: 'Account',
		component: () => import('@/pages/account/index.vue'),
		meta: {
			title: 'Account',
			keepAlive: true,
			key: 'account',
		},
	},

	{
		path: '/recovery',
		name: 'Recovery',
		component: () => import('@/pages/recovery/index.vue'),
		meta: {
			title: 'Recovery',
			keepAlive: true,
			key: 'account',
		},
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from) => {
	if (to.meta.title) {
		document.title = `${to.meta.title} | Mki OJ`
	}
})
