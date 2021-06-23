export interface IConfig {
	theme: 'light' | 'dark'
	lang: 'enUS' | 'zhCN'
}

export const getConfig = (): IConfig => {
	if (!localStorage.config) {
		setConfig({ theme: 'dark', lang: 'enUS' })
	}
	return JSON.parse(localStorage.config)
}

export const setConfig = (config: IConfig) => {
	localStorage.config = JSON.stringify(config)
}
