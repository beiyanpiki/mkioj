<template>
	<div>
		<NCard
			style="margin: 8px 0"
			:segmented="{
				content: true,
			}"
		>
			<template #header>
				<NSkeleton v-if="loading" width="30%" />
				<NText strong v-else>Notification</NText>
			</template>
			<template v-if="loading">
				<NSkeleton text :repeat="3" />
				<NSkeleton text style="width: 60%" />
			</template>
			<NText v-else>
				<Markdown :text="content" />
			</NText>
		</NCard>
	</div>
</template>
<script lang="ts">
	import { defineComponent } from 'vue'
	import { NText, NCard, NSkeleton } from 'naive-ui'
	import Markdown from '@/component/Markdown/Markdown.vue'

	export default defineComponent({
		props: {
			content: { type: String, default: '', required: true },
			loading: { type: Boolean, default: true, required: true },
		},
		components: { Markdown, NText, NCard, NSkeleton },
	})
</script>
