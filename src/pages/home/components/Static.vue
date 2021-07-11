<template>
	<div>
		<NCard
			v-if="!isLogin"
			@click="pushRoute('/account')"
			style="cursor: pointer; margin: 8px 0"
		>
			<NResult
				status="info"
				title="Login"
				description="Login to view your statistic"
				size="small"
			/>
		</NCard>
		<NCard
			v-else
			style="margin: 8px 0"
			:segmented="{
				content: true,
				footer: true,
			}"
		>
			<template #header>
				<div v-if="isLogin">
					<NAvatar circle :size="20" :src="user.avatar" />
					<NText style="margin-left: 8px"
						>{{ user.username }}'s Statistic
					</NText>
					<NTag type="error" style="margin-left: 8px"
						>{{ user.tag }}
					</NTag>
				</div>
			</template>
			<template #header-extra>
				<NButton text type="primary" @click="pushRoute('/account')"
					>Detail</NButton
				>
			</template>
			<NGrid :cols="3">
				<NGridItem>
					<NStatistic
						label="Rating"
						:value="
							user.rating.value !== -1 ? user.rating.value : '-'
						"
					>
						<template #suffix v-if="user.rating.value !== -1">
							<NText
								style="font-size: 14px"
								:type="
									user.rating.diff > 0 ? 'success' : 'error'
								"
							>
								<NIcon>
									<IncreaseIcon v-if="user.rating.diff > 0" />
									<DecreaseIcon
										v-else-if="user.rating.diff < 0"
									/>
									<ZeroIcon v-else />
								</NIcon>
								{{ Math.abs(user.rating.diff) }}
							</NText>
						</template>
					</NStatistic>
				</NGridItem>
				<NGridItem>
					<NStatistic
						label="Rank"
						:value="user.rank.value !== -1 ? user.rank.value : '-'"
					>
						<template #suffix v-if="user.rank.value !== -1">
							<NText
								style="font-size: 14px"
								:type="user.rank.diff > 0 ? 'success' : 'error'"
							>
								<NIcon>
									<IncreaseIcon v-if="user.rank.diff > 0" />
									<DecreaseIcon
										v-else-if="user.rank.diff < 0"
									/>
									<ZeroIcon v-else />
								</NIcon>
								{{ Math.abs(user.rank.diff) }}
							</NText>
						</template>
					</NStatistic></NGridItem
				>
				<NGridItem>
					<NStatistic
						label="Last Contest Standing"
						:value="
							user.prevStanding.self !== -1
								? `${user.prevStanding.self}/${user.prevStanding.all}`
								: '-'
						"
					/>
				</NGridItem>
			</NGrid>
		</NCard>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue'
	import {
		NCard,
		NResult,
		NTag,
		NText,
		NAvatar,
		NButton,
		NGrid,
		NGridItem,
		NIcon,
		NStatistic,
	} from 'naive-ui'
	import {
		AngleUp as IncreaseIcon,
		AngleDown as DecreaseIcon,
		Minus as ZeroIcon,
	} from '@vicons/fa'
	import { useRouter } from 'vue-router'

	export default defineComponent({
		name: 'Home-Static',
		props: {
			isLogin: {
				type: Boolean,
				default: false,
			},
			user: {
				type: Object as PropType<{
					username: string
					avatar: string
					tag: string
					// if value is -1, rating is disabled
					rating: { value: number; diff: number }
					// if value is -1, rank is disabled
					rank: { value: number; diff: number }
					// if value is -1, prev standing is disabled
					prevStanding: { self: number; all: number }
				}>,
				default: () => ({
					username: '',
					avatar: 'https://www.gravatar.com/avatar/e1ccabc233c966800949b364cfcbe77b?s=80&d=identicon',
					tag: 'Unrated',
					rating: { value: 1500, diff: 0 },
					rank: { value: -1, diff: 0 },
					prevStanding: { self: -1, all: -1 },
				}),
			},
		},
		components: {
			NCard,
			NResult,
			NTag,
			NText,
			NAvatar,
			NButton,
			NGrid,
			NGridItem,
			NStatistic,
			NIcon,

			IncreaseIcon,
			DecreaseIcon,
			ZeroIcon,
		},
		setup() {
			const router = useRouter()
			return {
				pushRoute: router.push,
			}
		},
	})
</script>
