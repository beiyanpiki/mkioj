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
				<NText strong v-else>{{ t('home.notification') }}</NText>
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
	import Markdown from '../../component/Markdown/Markdown.vue'
	import { useI18n } from 'vue-i18n'

	export default defineComponent({
		props: {
			content: { type: String, default: '', required: true },
			loading: { type: Boolean, default: true, required: true },
		},
		components: { NText, NCard, NSkeleton, Markdown },
		setup() {
			const { t } = useI18n()
			return { t }
		},
	})
</script>
