<template>
	<div>
		<NForm>
			<NFormItemRow label="Username">
				<NInput
					placeholder="3-16 characters (letter, number, dash, underline), inclusive"
				/>
			</NFormItemRow>
			<NFormItemRow label="Email">
				<NInput
					placeholder="You may use this email to recovery your account"
				/>
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
		<NButton type="primary" block>Register</NButton>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { NForm, NFormItemRow, NInput, NButton } from 'naive-ui'
	import { pushRoute } from '@/router'

	export default defineComponent({
		components: {
			NForm,
			NFormItemRow,
			NInput,
			NButton,
		},
		setup() {
			return { pushRoute }
		},
	})
</script>
