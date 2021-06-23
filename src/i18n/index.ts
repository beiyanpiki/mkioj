import zhCN from './zhCN'
import enUS from './enUS'
import { createI18n } from 'vue-i18n'
import { getConfig } from '../util/localStorage'

const config = getConfig()
const { lang } = config

export const i18n = createI18n({
	legacy: false,
	locale: lang || 'enUS',
	fallbackLocale: 'enUS',
	globalInjection: true,
	messages: {
		zhCN,
		enUS,
	},
})
