<template>
	<div>
		<span>123{{ a }}</span>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		setup() {
			const a = 1
			return { a }
		},
	})
</script>
