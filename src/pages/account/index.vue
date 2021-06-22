<template>
	<div style="display: flex; justify-content: center">
		<NCard style="width: 500px; margin-top: 200px">
			<NTabs
				default-value="signin"
				size="large"
				justify-content="space-evenly"
			>
				<NTabPane name="signin" tab="Login">
					<Login />
				</NTabPane>
				<NTabPane name="signup" tab="Register">
					<Register />
				</NTabPane>
			</NTabs>
		</NCard>
	</div>
</template>

<script lang="ts">
	import { NCard, NTabs, NTabPane } from 'naive-ui'
	import { defineComponent } from 'vue'

	import Login from './Login.vue'
	import Register from './Register.vue'

	export default defineComponent({
		components: {
			NCard,
			NTabs,
			NTabPane,

			Login,
			Register,
		},
	})
</script>
