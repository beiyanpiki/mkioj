<template>
	<div>
		Hello, world! You had click button below {{ cnt }} times.
		<button @click="onAddBtnClick">+1</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'

	export default defineComponent({
		setup() {
			const cnt = ref(1)
			const onAddBtnClick = () => {
				cnt.value++
			}
			return { cnt, onAddBtnClick }
		},
	})
</script>
