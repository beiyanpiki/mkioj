import { InjectionKey } from 'vue'
import {
	createLogger,
	createStore,
	Store,
	useStore as useBaseStore,
} from 'vuex'
import { IUiState, ui } from './modules/ui'

export interface IRootState {}

export const store = createStore<IRootState>({
	state: {},
	modules: {
		ui,
	},
	strict: process.env.NODE_ENV !== 'production',
	plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
})

export const key: InjectionKey<Store<IRootState>> = Symbol('vue-store')

export interface IAllState extends IRootState {
	ui: IUiState
}

export const useStore = <T = IAllState>() => {
	return useBaseStore<T>(key)
}
