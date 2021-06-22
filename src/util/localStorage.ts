export const getConfig = () => {
	if (!localStorage.config) {
		setConfig({ theme: 'dark', lang: 'enUS' })
	}
	return JSON.parse(localStorage.config)
}

export const setConfig = (config: {
	theme: 'light' | 'dark'
	lang: 'enUS' | 'zhCN'
}) => {
	const confStr = JSON.stringify(config)
	localStorage.config = confStr
}
