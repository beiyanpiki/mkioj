<template>
	<div>
		<!-- Loading -->
		<NCard
			v-if="loading"
			style="margin: 8px 0"
			:segmented="{
				content: true,
				footer: true,
			}"
		>
			<template #header>
				<div style="display: flex; align-items: center">
					<NSkeleton style="width: 60%" />
				</div>
			</template>

			<NGrid :cols="3">
				<NGridItem>
					<NSpace vertical>
						<NSkeleton width="80%" />
						<NSkeleton height="40px" width="80%" />
					</NSpace>
				</NGridItem>
				<NGridItem>
					<NSpace vertical>
						<NSkeleton width="80%" />
						<NSkeleton height="40px" width="80%" />
					</NSpace>
				</NGridItem>
				<NGridItem>
					<NSpace vertical>
						<NSkeleton width="80%" />
						<NSkeleton height="40px" width="80%" />
					</NSpace>
				</NGridItem>
			</NGrid>
		</NCard>

		<!-- Login Required -->
		<NCard
			v-else-if="!isLogin"
			@click="pushRoute('/account')"
			style="cursor: pointer; margin: 8px 0"
		>
			<NResult
				status="info"
				:title="t('common.login')"
				:description="t('home.loginToViewStat')"
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
						>{{
							t('home.userStatisticDescription', {
								USERNAME: user.username,
							})
						}}
					</NText>
					<NTag type="error" style="margin-left: 8px"
						>{{ t(`usertag.${user.tag}`) }}
					</NTag>
				</div>
			</template>

			<template #header-extra>
				<NButton text type="primary" @click="pushRoute('/account')"
					>{{ t('common.detail') }}
				</NButton>
			</template>

			<NGrid :cols="3">
				<NGridItem>
					<NStatistic
						:label="t('home.userRating')"
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
						:label="t('home.userRank')"
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
				<NGridItem>
					<NStatistic
						:label="t('home.userPrevStanding')"
						:value="
							user.prevStanding
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
		NAvatar,
		NText,
		NTag,
		NButton,
		NGrid,
		NGridItem,
		NIcon,
		NSpace,
		NStatistic,
		NSkeleton,
	} from 'naive-ui'
	import {
		AngleUp as IncreaseIcon,
		AngleDown as DecreaseIcon,
		Minus as ZeroIcon,
	} from '@vicons/fa'
	import { useRouter } from 'vue-router'
	import { useI18n } from 'vue-i18n'

	export default defineComponent({
		props: {
			loading: { type: Boolean, defalut: true, required: true },
			isLogin: { type: Boolean, default: false, required: true },
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
			NSkeleton,
			NSpace,

			IncreaseIcon,
			DecreaseIcon,
			ZeroIcon,
		},
		setup() {
			const router = useRouter()
			const { t } = useI18n()
			return {
				t,
				pushRoute: router.push,
			}
		},
	})
</script>
