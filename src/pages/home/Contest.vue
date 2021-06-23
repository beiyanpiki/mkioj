<template>
	<div>
		<NCard
			v-if="ongoing.length > 0"
			style="margin: 8px 0"
			:segmented="{
				content: true,
			}"
		>
			<template #header>
				<NText strong>{{ t('home.ongoingContest') }}</NText>
			</template>
			<template #header-extra>
				<NButton text type="primary" @click="pushRoute('/contest')"
					>{{ t('common.more') }}
				</NButton>
			</template>
			<div v-for="(item, index) in ongoing" :key="index">
				<NDivider v-if="index !== 0" />
				<NH3 style="text-align: center">
					<NButton
						text
						type="primary"
						style="font-size: 18px"
						@click="pushRoute(`/contest/${item.id}`)"
						>{{ item.name }}
					</NButton>
				</NH3>
				<NH4 style="text-align: center">
					<CountDown
						:start="Math.round(Number(new Date()) / 1000)"
						:end="item.endTime"
					/>
				</NH4>
			</div>
		</NCard>

		<NCard
			v-if="upcoming.length > 0"
			style="margin: 32px 0"
			:segmented="{
				content: true,
			}"
		>
			<template #header>
				<NText strong>{{ t('home.upcomingContest') }}</NText>
			</template>
			<template #header-extra>
				<NButton text type="primary" @click="pushRoute('/contest')"
					>{{ t('common.more') }}
				</NButton>
			</template>
			<div v-for="(item, index) in upcoming" :key="index">
				<NDivider v-if="index !== 0" />
				<NH3 style="text-align: center">
					<NButton
						text
						type="primary"
						style="font-size: 18px"
						@click="pushRoute(`/contest/${item.id}`)"
						>{{ item.name }}
					</NButton>
				</NH3>
				<NH4 style="text-align: center">
					<CountDown
						:start="Math.round(Number(new Date()) / 1000)"
						:end="item.startTime"
					/>
				</NH4>
			</div>
		</NCard>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue'

	import { NCard, NText, NButton, NH3, NH4, NDivider } from 'naive-ui'
	import { useRouter } from 'vue-router'
	import CountDown from '@/component/CountDown/CountDown.vue'
	import { useI18n } from 'vue-i18n'

	export default defineComponent({
		props: {
			ongoing: {
				type: Array as PropType<
					{
						id: number
						name: string
						endTime: number
					}[]
				>,
				default: () => [],
			},
			upcoming: {
				type: Array as PropType<
					{
						id: number
						name: string
						startTime: number
					}[]
				>,
				default: () => [],
			},
		},
		components: {
			NCard,
			NText,
			NButton,
			NH3,
			NH4,
			NDivider,

			CountDown,
		},
		setup() {
			const router = useRouter()
			const { t } = useI18n()
			return {
				pushRoute: router.push,
				t,
			}
		},
	})
</script>
