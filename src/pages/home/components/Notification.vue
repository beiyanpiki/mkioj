<template>
	<div>
		<NCard
			style="margin: 8px 0"
			:segmented="{
				content: true,
			}"
		>
			<template #header>
				<NText strong>Notification</NText>
			</template>
			<NText>
				<Markdown :text="content" />
			</NText>
		</NCard>
	</div>
</template>
<script lang="ts">
	import { defineComponent } from 'vue'
	import { NText, NCard } from 'naive-ui'
	import Markdown from '@/components/Markdown/index.vue'

	export default defineComponent({
		name: 'Home-Notification',
		props: {
			content: { type: String, default: '', required: true },
		},
		components: { Markdown, NText, NCard },
	})
</script>
