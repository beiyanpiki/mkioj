<template>
	<NConfigProvider
		:theme="theme === 'dark' ? darkTheme : null"
		:locale="lang === 'enUS' ? enUS : zhCN"
		:date-locale="lang === 'enUS' ? dateEnUS : dateZhCN"
	>
		<NNotificationProvider>
			<NLoadingBarProvider>
				<NMessageProvider>
					<Layout />
				</NMessageProvider>
			</NLoadingBarProvider>
		</NNotificationProvider>
	</NConfigProvider>
</template>

<script lang="ts">
	import { computed, defineComponent, onMounted } from 'vue'
	import {
		NConfigProvider,
		NNotificationProvider,
		NLoadingBarProvider,
		NMessageProvider,
		darkTheme,
		zhCN,
		dateZhCN,
		enUS,
		dateEnUS,
	} from 'naive-ui'

	import Layout from '@/pages/layout/index.vue'
	import { getConfig } from '@/util/localStorage'
	import { useStore } from '@/store'

	export default defineComponent({
		components: {
			NConfigProvider,
			NNotificationProvider,
			NLoadingBarProvider,
			NMessageProvider,

			Layout,
		},
		setup() {
			const store = useStore()
			const theme = computed(() => store.state.ui.theme)
			const lang = computed(() => store.state.ui.lang)
			onMounted(() => {
				// Init method
				const config = getConfig()
				store.commit('ui/init', config)
			})
			return {
				theme,
				lang,
				darkTheme,
				zhCN,
				dateZhCN,
				enUS,
				dateEnUS,
			}
		},
	})
</script>
