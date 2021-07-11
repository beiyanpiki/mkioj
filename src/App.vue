<template>
	<NConfigProvider :theme="darkTheme" :locale="enUS" :date-locale="dateEnUS">
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
	import { defineComponent } from 'vue'
	import {
		NConfigProvider,
		NNotificationProvider,
		NLoadingBarProvider,
		NMessageProvider,
		darkTheme,
		enUS,
		dateEnUS,
	} from 'naive-ui'
	import Layout from '@/pages/layout/index.vue'

	export default defineComponent({
		name: 'App',
		components: {
			NConfigProvider,
			NNotificationProvider,
			NLoadingBarProvider,
			NMessageProvider,
			Layout,
		},
		setup() {
			return {
				darkTheme,
				enUS,
				dateEnUS,
			}
		},
	})
</script>
