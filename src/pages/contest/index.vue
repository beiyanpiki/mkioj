<template>
	<div>
		<NCard
			style="margin: 8px 0"
			:segmented="{
				content: true,
				footer: true,
			}"
		>
			<NPageHeader
				subtitle="Improve your contest rating in our official contest."
				@back="routerBack()"
			>
				<!-- Avatar -->
				<template #avatar>
					<NAvatar style="background-color: #18181c">
						<NIcon>
							<ContestIcon />
						</NIcon>
					</NAvatar>
				</template>

				<!-- Title -->
				<template #title> Contest </template>

				<!-- Header -->
				<template #header>
					<NBreadcrumb>
						<NBreadcrumbItem @click="routerPush('/home')"
							>Home</NBreadcrumbItem
						>
						<NBreadcrumbItem>Contest</NBreadcrumbItem>
					</NBreadcrumb>
				</template>

				<!-- Content -->
				<ContestList :data="contestList" />
			</NPageHeader>
		</NCard>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import {
		NPageHeader,
		NAvatar,
		NCard,
		NIcon,
		NBreadcrumb,
		NBreadcrumbItem,
	} from 'naive-ui'
	import { useRouter } from 'vue-router'
	import { CodeSlashOutline as ContestIcon } from '@vicons/ionicons5'

	import ContestList from './components/ContestList.vue'
	import { data1 } from './mock'

	export default defineComponent({
		name: 'Contest',
		components: {
			NPageHeader,
			NAvatar,
			NIcon,
			NBreadcrumb,
			NBreadcrumbItem,
			NCard,

			ContestIcon,

			ContestList,
		},
		setup() {
			const router = useRouter()
			const contestList = data1
			return {
				routerBack: router.back,
				routerPush: router.push,
				contestList,
			}
		},
	})
</script>
