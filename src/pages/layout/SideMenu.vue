<template>
	<NMenu
		:value="menuKey"
		:onUpdateValue="handleUpdateValue"
		:collapsed-width="64"
		:collapsed-icon-size="22"
		:options="menuOptions"
	/>
</template>

<script lang="ts">
	import { defineComponent, computed, ref, watch, onMounted, h } from 'vue'
	import { MenuOption, NIcon, NMenu } from 'naive-ui'
	import {
		HomeOutline as HomeIcon,
		CodeSlashOutline as ContestIcon,
		DocumentTextOutline as ProblemIcon,
		PodiumOutline as RankIcon,
		CloudOutline as StatusIcon,
		CalendarOutline as CalendarIcon,
		HelpCircleOutline as HelpIcon,
		BugOutline as TestIcon,
	} from '@vicons/ionicons5'
	import { AccountCircleOutlined as UserIcon } from '@vicons/material'
	import { PeopleTeam24Regular as TeamIcon } from '@vicons/fluent'
	import { useRouter } from 'vue-router'
	import { useStore } from '../../store'
	import { useI18n } from 'vue-i18n'

	export default defineComponent({
		components: {
			NMenu,
		},
		setup() {
			const store = useStore()
			const menuKey = computed(() => store.state.ui.menuKey)
			const lang = computed(() => store.state.ui.lang)
			const router = useRouter()
			const { t } = useI18n()
			const renderIcon = (
				icon: any,
				size: number | undefined = undefined,
				depth: 1 | 2 | 3 | 4 | 5 | undefined = undefined,
				color: string | undefined = undefined,
			) => {
				return () => h(NIcon, { size }, { default: () => h(icon) })
			}
			const menuOptions = ref([
				{
					label: t('sideMenu.home', {}),
					key: 'home',
					icon: renderIcon(HomeIcon),
				},
				{
					label: 'Contest',
					key: 'contest',
					icon: renderIcon(ContestIcon),
				},
				{
					label: 'Problemset',
					key: 'problemset',
					icon: renderIcon(ProblemIcon),
				},
				{
					label: 'Rank',
					key: 'rank',
					icon: renderIcon(RankIcon),
				},
				{
					label: 'Status',
					key: 'status',
					icon: renderIcon(StatusIcon),
				},
				{
					label: 'Team',
					key: 'team',
					icon: renderIcon(TeamIcon),
				},
				{
					label: 'Calendar',
					key: 'calendar',
					icon: renderIcon(CalendarIcon),
				},
				{
					label: 'Help',
					key: 'help',
					icon: renderIcon(HelpIcon),
				},
				{
					label: 'Account',
					key: 'account',
					icon: renderIcon(UserIcon),
				},
				{
					label: 'Test',
					key: 'test',
					icon: renderIcon(TestIcon),
				},
			])
			const translateMenuOption = () => {
				for (let i = 0; i < menuOptions.value.length; i++) {
					menuOptions.value[i].label = t(
						`sideMenu.${menuOptions.value[i].key}`,
						{},
					)
				}
			}
			// Watch language, when language change, switch menuOptions
			watch(
				() => lang.value,
				() => {
					translateMenuOption()
				},
			)
			onMounted(() => {
				translateMenuOption()
			})

			const handleUpdateValue = (key: string, _: MenuOption) => {
				router.push(key)
			}

			return {
				menuOptions,
				menuKey,
				handleUpdateValue,
				lang,
			}
		},
	})
</script>
