<template>
	<span>{{ formatSecondToHMS(remain) }}</span>
</template>

<script lang="ts">
	import { onMounted, defineComponent, ref } from 'vue'
	import { formatSecondToHMS } from '@/util/time'

	export default defineComponent({
		props: {
			start: { type: Number, required: true },
			end: { type: Number, required: true },
		},
		setup({ start, end }) {
			let ticker: NodeJS.Timer | null = null
			const remain = ref(end - start)

			const startCountDown = () => {
				ticker = setInterval(() => {
					remain.value -= 1
					if (remain <= 0) {
						remain.value = 0
						clearInterval(ticker)
					}
				}, 1000)
			}

			onMounted(() => {
				startCountDown()
			})
			return { formatSecondToHMS, remain }
		},
	})
</script>
