<template>
	<div style="display: flex; justify-content: center; margin-top: 100px">
		<NCard style="width: 500px">
			<NForm>
				<NFormItemRow label="Email">
					<NInput placeholder="Email" />
				</NFormItemRow>
				<NFormItemRow label="Code">
					<NInput
						style="width: 80%"
						placeholder="Check your recovery code from your email"
					/>
					<NButton
						type="primary"
						ghost
						@click="onSendMailBtnClick"
						:disabled="sendEmailCountDown > 0"
					>
						{{
							sendEmailCountDown > 0
								? `${sendEmailCountDown} seconds`
								: 'Send Code'
						}}
					</NButton>
				</NFormItemRow>
				<NFormItemRow label="Password">
					<NInput
						placeholder="6-24 characters, letters and numbers at least once respectively"
					/>
				</NFormItemRow>
				<NFormItemRow label="Confirm Password">
					<NInput placeholder="Repeat your password" />
				</NFormItemRow>
			</NForm>
			<NButton
				type="primary"
				block
				:loading="loading"
				@click="onRecoveryBtnClick"
				>Recovery
			</NButton>
		</NCard>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'
	import { NForm, NFormItemRow, NInput, NButton, NCard } from 'naive-ui'

	export default defineComponent({
		name: 'Recovery',
		components: {
			NForm,
			NFormItemRow,
			NInput,
			NButton,
			NCard,
		},
		setup() {
			const loading = ref<boolean>(false)
			const sendEmailCountDown = ref<number>(0)

			const onRecoveryBtnClick = () => {
				loading.value = true
				setTimeout(() => {
					loading.value = false
				}, 1000)
			}

			let ticker: NodeJS.Timer | null = null
			const onSendMailBtnClick = () => {
				sendEmailCountDown.value = 60
				ticker = setInterval(() => {
					sendEmailCountDown.value--
					if (sendEmailCountDown.value <= 0) {
						clearInterval(Number(ticker))
					}
				}, 1000)
			}

			return {
				loading,
				sendEmailCountDown,
				onRecoveryBtnClick,
				onSendMailBtnClick,
			}
		},
	})
</script>
