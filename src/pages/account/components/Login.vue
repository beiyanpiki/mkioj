<template>
	<div>
		<NForm>
			<NFormItemRow label="Account">
				<NInput placeholder="Username or Email" />
			</NFormItemRow>
			<NFormItemRow label="Password">
				<NInput placeholder="Password" />
			</NFormItemRow>
		</NForm>
		<NButton type="primary" block>Login</NButton>
		<NText tag="div" style="margin-top: 12px; text-align: center"
			>Forgot your password?
			<NButton text type="primary" @click="routerPush('/recovery')">
				Recovery
			</NButton>
		</NText>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { NForm, NFormItemRow, NInput, NButton, NText } from 'naive-ui'
	import { useRouter } from 'vue-router'

	export default defineComponent({
		name: 'Account-Login',
		components: {
			NForm,
			NFormItemRow,
			NInput,
			NButton,
			NText,
		},
		setup() {
			const router = useRouter()

			return {
				routerPush: router.push,
			}
		},
	})
</script>
