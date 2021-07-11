import { Module } from 'vuex'
import { IRootState } from '..'

export interface IUiState {
	theme: 'light' | 'dark'
	menuKey: string
}

export const ui: Module<IUiState, IRootState> = {
	namespaced: true,
	state: {
		theme: 'dark',
		menuKey: '/home',
	},
	mutations: {
		switchTheme(state) {
			state.theme = state.theme === 'light' ? 'dark' : 'light'
		},
		changeMenuKey(state, key) {
			state.menuKey = key
		},
	},
	actions: {},
	getters: {},
}
