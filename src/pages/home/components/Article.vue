<template>
	<div>
		<NCard
			style="margin: 8px 0"
			:segmented="{
				content: true,
				footer: true,
			}"
		>
			<template #header>
				<div>
					<NText strong> {{ title }}</NText>
					<NIcon
						size="12"
						:depth="5"
						style="margin-left: 8px; cursor: pointer"
						@click="routerPush('/blog?id=1')"
					>
						<LinkIcon />
					</NIcon>
					<NText depth="3" style="margin-left: 8px; font-size: 16px"
						>@{{ username }}
					</NText>
				</div>
			</template>
			<Markdown :text="content" />
			<template #footer>
				<div style="display: flex; justify-content: space-between">
					<div style="display: flex; align-items: center">
						<NAvatar circle :size="24" :src="avatar" />
						<NText depth="3" style="margin-left: 4px"
							>{{ username }} @
							<NTime :time="createdTime" unix />
						</NText>
						<NIcon :depth="3" size="16" style="margin-left: 8px">
							<CommentIcon />
						</NIcon>
						<NText depth="3" style="margin-left: 4px"
							>{{ comment }} comments
						</NText>
					</div>
					<div style="display: flex; align-items: center">
						<NButton
							size="tiny"
							style="margin-right: 12px"
							type="success"
							ghost
						>
							<template #icon>
								<NIcon>
									<UpVoteIcon />
								</NIcon>
							</template>
						</NButton>
						<NText type="success" strong>{{ vote }}</NText>
						<NButton
							size="tiny"
							style="margin-left: 12px"
							type="error"
							ghost
						>
							<template #icon>
								<NIcon>
									<DownVoteIcon />
								</NIcon>
							</template>
						</NButton>
					</div>
				</div>
			</template>
		</NCard>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { NCard, NText, NIcon, NAvatar, NButton, NTime } from 'naive-ui'
	import { ExternalLinkAlt as LinkIcon } from '@vicons/fa'
	import {
		ChevronUp as UpVoteIcon,
		ChevronDown as DownVoteIcon,
		ChatboxEllipsesSharp as CommentIcon,
	} from '@vicons/ionicons5'
	import Markdown from '@/components/Markdown/index.vue'
	import { useRouter } from 'vue-router'

	export default defineComponent({
		name: 'Home-Article',
		components: {
			NCard,
			NText,
			NIcon,
			NAvatar,
			NButton,
			NTime,

			LinkIcon,
			UpVoteIcon,
			DownVoteIcon,
			CommentIcon,

			Markdown,
		},
		props: {
			id: { type: Number, default: 0, required: true },
			title: { type: String, default: '', required: true },
			username: { type: String, default: '', required: true },
			avatar: {
				type: String,
				default:
					'https://www.gravatar.com/avatar/e1ccabc233c966800949b364cfcbe77b?s=80&d=identicon',
				required: true,
			},
			createdTime: { type: Number, default: 0, required: true },
			content: { type: String, default: '', required: true },
			vote: { type: Number, default: 0, required: true },
			comment: { type: Number, default: 0, required: true },
		},
		setup() {
			const router = useRouter()
			return {
				routerPush: router.push,
			}
		},
	})
</script>
