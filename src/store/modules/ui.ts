import { Module } from 'vuex'
import { IRootState } from '..'
import { setConfig } from '@/util/localStorage'

export interface IUiState {
	theme: 'light' | 'dark'
	isMobile: boolean
	menuKey: string
	lang: 'enUS' | 'zhCN'
}

export const ui: Module<IUiState, IRootState> = {
	namespaced: true,
	state: {
		theme: 'light',
		isMobile: false,
		menuKey: '/home',
		lang: 'enUS',
	},
	mutations: {
		init(
			state,
			config: {
				theme: 'light' | 'dark'
				lang: 'enUS' | 'zhCN'
			},
		) {
			state.theme = config.theme
			state.lang = config.lang
		},
		switchTheme(state) {
			state.theme = state.theme === 'light' ? 'dark' : 'light'
			setConfig({ theme: state.theme, lang: state.lang })
		},
		switchLang(state) {
			state.lang = state.lang === 'enUS' ? 'zhCN' : 'enUS'
			setConfig({ theme: state.theme, lang: state.lang })
		},
		switchMobile(state, isMobile) {
			state.isMobile = isMobile
		},
		changeMenuKey(state, key) {
			state.menuKey = key
		},
	},
	actions: {},
	getters: {},
}
