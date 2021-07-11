<template>
	<div style="display: flex; justify-content: flex-start; height: 64px">
		<div style="display: flex; width: 240px; justify-content: center">
			<NH3 align-text>
				<NText strong>Mki OJ</NText>
			</NH3>
		</div>
		<div
			style="
				display: flex;
				width: calc(100% - 240px);
				justify-content: space-between;
			"
		>
			<!-- left -->
			<div style="padding-left: 16px">
				<NInput type="input" placeholder="Search" clearable />
			</div>
			<!-- right -->
			<div style="padding-right: 16px">
				<NButton
					style="margin-left: 16px"
					@click="pushRoute('/account')"
				>
					Account
				</NButton>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { NInput, NButton, NH3, NText } from 'naive-ui'
	import { useRouter } from 'vue-router'

	export default defineComponent({
		name: 'Layout-Header',
		components: {
			NInput,
			NButton,
			NH3,
			NText,
		},
		setup() {
			const router = useRouter()

			return {
				pushRoute: router.push,
			}
		},
	})
</script>
