<template>
	<div>
		<!-- Login Required -->
		<NCard
			v-if="!isLogin"
			@click="pushRoute('/account')"
			style="cursor: pointer; margin: 8px 0"
		>
			<NResult
				status="info"
				title="Login"
				description="Login to view user's statistic"
				size="small"
			/>
		</NCard>

		<!-- User's statistical -->
		<NCard
			v-else
			style="margin: 8px 0"
			:segmented="{
				content: true,
				footer: true,
			}"
		>
			<template #header>
				<div style="display: flex; align-items: center">
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
					>Detail
				</NButton>
			</template>

			<NGrid :cols="3">
				<NGridItem>
					<NStatistic
						label="Rating"
						:value="user.rating ? user.rating.value : '-'"
					>
						<template #suffix v-if="user.rating">
							<NText
								style="font-size: 14px"
								:type="
									user.rating.diff === 0
										? 'default'
										: user.rating.diff > 0
										? 'success'
										: 'error'
								"
							>
								<NIcon>
									<IncreaseIcon v-if="user.rating.diff > 0" />
									<DecreaseIcon
										v-else-if="user.rating.diff < 0"
									/>
									<ZeroIcon v-else />
								</NIcon>
								{{
									user.rating.diff === 0
										? ''
										: Math.abs(user.rating.diff)
								}}
							</NText>
						</template>
					</NStatistic>
				</NGridItem>
				<NGridItem>
					<NStatistic
						label="Prev. Standing"
						:value="
							user.prevStanding
								? `${user.prevStanding.self}/${user.prevStanding.all}`
								: '-'
						"
					/>
				</NGridItem>
				<NGridItem>
					<NStatistic
						label="Rank"
						:value="user.rank ? user.rank.value : '-'"
					>
						<template #suffix v-if="user.rank">
							<NText
								style="font-size: 14px"
								:type="
									user.rank.diff === 0
										? 'default'
										: user.rank.diff > 0
										? 'success'
										: 'error'
								"
							>
								<NIcon>
									<IncreaseIcon v-if="user.rank.diff > 0" />
									<DecreaseIcon
										v-else-if="user.rank.diff < 0"
									/>
									<ZeroIcon v-else />
								</NIcon>
								{{
									user.rank.diff === 0
										? ''
										: Math.abs(user.rank.diff)
								}}
							</NText>
						</template>
					</NStatistic>
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
		NAvatar,
		NText,
		NTag,
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
		props: {
			isLogin: { type: Boolean, default: false },
			user: {
				type: Object as PropType<{
					username: string
					avatar: string
					tag: string
					rating?: { value: number; diff: number }
					rank?: { value: number; diff: number }
					prevStanding?: { self: number; all: number }
				}>,
				default: () => ({
					username: '',
					avatar: 'https://www.gravatar.com/avatar/e1ccabc233c966800949b364cfcbe77b?s=80&d=identicon',
					tag: 'Unrated',
				}),
			},
		},
		components: {
			NCard,
			NResult,
			NAvatar,
			NText,
			NTag,
			NButton,
			NGrid,
			NGridItem,
			NIcon,
			NStatistic,

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
