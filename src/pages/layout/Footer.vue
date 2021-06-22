<template>
	<div style="display: flex; justify-content: space-between">
		<div>
			Power by
			<NButton
				text
				tag="a"
				href="https://mki.moe"
				target="_blank"
				type="primary"
				>Mki OJ v0.0.1
			</NButton>
			| Contact:
			<NButton
				text
				tag="a"
				href="https://mki.moe"
				target="_blank"
				type="primary"
				>Shane Gao
			</NButton>
			,
			<NButton
				text
				tag="a"
				href="https://mki.moe"
				target="_blank"
				type="primary"
				>Alex Zheng
			</NButton>
		</div>
		<div>
			Developed by
			<NButton
				text
				tag="a"
				href="https://mki.moe"
				target="_blank"
				type="primary"
				>Mki Dev Team
			</NButton>
			| All rights reserved.
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { NButton } from 'naive-ui'

	export default defineComponent({
		components: { NButton },
	})
</script>
