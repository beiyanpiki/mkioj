<template>
	<div style="display: flex; justify-content: center; margin-top: 100px">
		<NCard style="width: 500px">
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

	import Login from './components/Login.vue'
	import Register from './components/Register.vue'

	export default defineComponent({
		name: 'Account',
		components: {
			NCard,
			NTabs,
			NTabPane,

			Login,
			Register,
		},
	})
</script>
