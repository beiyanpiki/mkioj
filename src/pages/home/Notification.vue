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
				<div v-else>
					<NText strong>Notification</NText>
				</div>
			</template>
			<template v-if="loading">
				<NSkeleton text :repeat="3" />
				<NSkeleton text style="width: 60%" />
			</template>
			<NText v-else>{{ content }}</NText>
		</NCard>
	</div>
</template>
<script lang="ts">
	import { defineComponent } from 'vue'
	import { NText, NCard, NSkeleton } from 'naive-ui'

	export default defineComponent({
		props: {
			content: { type: String, default: '' },
			loading: { type: Boolean, default: true },
		},
		components: { NText, NCard, NSkeleton },
	})
</script>
