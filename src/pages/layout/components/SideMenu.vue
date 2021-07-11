<template>
	<NMenu
		:value="menuKey"
		:collapsed-width="64"
		:collapsed-icon-size="22"
		:options="menuOptions"
		@update:value="handleUpdateValue"
	/>
</template>

<script lang="ts">
	import { defineComponent, computed, ref } from 'vue'
	import { MenuOption, NMenu } from 'naive-ui'
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
	import { useStore } from '@/store'
	import { renderIcon } from '@/utils'

	const menuOptions = ref([
		{
			label: 'Home',
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

	export default defineComponent({
		name: 'Layout-SideMenu',
		components: {
			NMenu,
		},
		setup() {
			const store = useStore()
			const menuKey = computed(() => store.state.ui.menuKey)
			const router = useRouter()

			const handleUpdateValue = (key: string, _: MenuOption) => {
				router.push(key)
			}

			return {
				menuOptions,
				menuKey,
				handleUpdateValue,
			}
		},
	})
</script>
