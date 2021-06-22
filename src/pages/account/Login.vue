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
			>Forgot your passowrd?
			<NButton text type="primary" @click="pushRoute('/recovery')">
				Recovery
			</NButton>
		</NText>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { NForm, NFormItemRow, NInput, NButton, NText } from 'naive-ui'
	import { pushRoute } from '@/router'

	export default defineComponent({
		components: {
			NForm,
			NFormItemRow,
			NInput,
			NButton,
			NText,
		},
		setup() {
			return { pushRoute }
		},
	})
</script>
