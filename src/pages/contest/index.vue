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
				subtitle="Improve your contest rating in our offical contest."
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
		},
		setup() {
			const router = useRouter()
			return {
				routerBack: router.back,
				routerPush: router.push,
			}
		},
	})
</script>
