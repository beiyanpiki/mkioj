<template>
	<div>
		<NGrid responsive="screen" cols="12" x-gap="24" y-gap="12">
			<NGridItem :span="8">
				<NSpace vertical>
					<NH1 style="margin-bottom: 4px">Welcome to Mki OJ</NH1>
					<pre>{{ { height, width, currentBreakpoint } }}</pre>

					<NDivider />
					<Article
						:id="1"
						title="Hello, world!"
						username="BeiyanPiki"
						avatar="https://mki.moe/usr/uploads/2021/05/3614659291.png"
						:createdTime="1624444369"
						:content="text1"
						:vote="23"
						:comment="1"
					/>
					<NPagination :page="1" :page-count="2" show-quick-jumper />
				</NSpace>
			</NGridItem>
			<NGridItem :span="4">
				<NSpace vertical>
					<Notification :content="text2" />
					<Static
						:is-login="false"
						:user="{
							username: '',
							avatar: 'https://www.gravatar.com/avatar/e1ccabc233c966800949b364cfcbe77b?s=80&d=identicon',
							tag: 'Unrated',
							rating: { value: 1500, diff: 0 },
							rank: { value: -1, diff: 0 },
							prevStanding: { self: -1, all: -1 },
						}"
					/>
					<Static
						:is-login="true"
						:user="{
							username: 'BeiyanPiki',
							avatar: 'https://www.gravatar.com/avatar/e1ccabc233c966800949b364cfcbe77b?s=80&d=identicon',
							tag: 'Master',
							rating: { value: 1520, diff: 20 },
							rank: { value: 25, diff: -6 },
							prevStanding: { self: 5, all: 8962 },
						}"
					/>
				</NSpace>
			</NGridItem>
		</NGrid>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import {
		NGrid,
		NGridItem,
		NDivider,
		NPagination,
		NSpace,
		NH1,
	} from 'naive-ui'
	import { text1, text2 } from './mock'
	import Article from './components/Article.vue'
	import Notification from './components/Notification.vue'
	import Static from './components/Static.vue'

	import { useDimensions } from '@/hooks'

	export default defineComponent({
		name: 'Home',
		components: {
			NGrid,
			NGridItem,
			NDivider,
			NPagination,
			NSpace,
			NH1,

			Article,
			Notification,
			Static,
		},
		setup() {
			const { height, width, currentBreakpoint } = useDimensions()
			return {
				text1,
				text2,

				height,
				width,
				currentBreakpoint,
			}
		},
	})
</script>
