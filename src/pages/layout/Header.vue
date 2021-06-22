<template>
	<div style="display: flex; justify-content: flex-start; height: 64px">
		<div style="display: flex; width: 240px; justify-content: center">
			<NH3 align-text>
				<NText strong>Mki OJ</NText>
			</NH3>
		</div>
		<div
			style="
				display: flex;
				width: calc(100% - 240px);
				justify-content: space-between;
			"
		>
			<!-- left -->
			<div style="padding-left: 16px">
				<NInput type="input" placeholder="Search" clearable />
			</div>
			<!-- right -->
			<div style="padding-right: 16px">
				<NButton
					style="margin-left: 16px"
					@click="onThemeSwitchButtonClick"
					>{{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
				</NButton>
				<NButton
					style="margin-left: 16px"
					@click="onLangSwitchButtonClick"
					>{{ lang === 'zhCN' ? '中文' : 'English' }}
				</NButton>
				<NButton style="margin-left: 16px" @click="onAccountBtnClick"
					>Account
				</NButton>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent } from 'vue'
	import { NInput, NButton, NH3, NText } from 'naive-ui'
	import { useStore } from '@/store'
	import { menuOptions } from './SideMenu.vue'
	import { useRouter } from 'vue-router'

	export default defineComponent({
		components: {
			NInput,
			NButton,
			NH3,
			NText,
		},
		setup() {
			const store = useStore()
			const router = useRouter()

			const theme = computed(() => store.state.ui.theme)
			const lang = computed(() => store.state.ui.lang)
			const onThemeSwitchButtonClick = () => {
				store.commit('ui/switchTheme')
			}
			const onLangSwitchButtonClick = () => {
				store.commit('ui/switchLang')
			}
			const onAccountBtnClick = () => {
				router.push('/account')
			}

			return {
				theme,
				lang,
				menuOptions,
				onThemeSwitchButtonClick,
				onLangSwitchButtonClick,
				onAccountBtnClick,
			}
		},
	})
</script>
