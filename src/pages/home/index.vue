<template>
	<div>
		<NGrid responsive="screen" cols="12" x-gap="24" y-gap="12">
			<NGridItem :span="isMobile ? 12 : 8">
				<NSpace vertical>
					<NH1 style="margin-bottom: 4px"
						>{{ t('home.welcome', { SITE_NAME: 'Mki OJ' }) }}
					</NH1>
					<NDivider />
					<TopicBlog
						:id="1"
						title="Hello, world!"
						username="BeiyanPiki"
						avatar="https://mki.moe/usr/uploads/2021/05/3614659291.png"
						:createdTime="1624444369"
						:content="mockText"
						:vote="23"
						:comment="1"
						:loading="loading"
					/>
					<NSkeleton
						text
						height="25px"
						style="width: 40%; margin-top: 8px"
						v-if="loading"
					/>
					<NPagination
						:page="page"
						:page-count="2"
						show-quick-jumper
						v-else
					/>
				</NSpace>
			</NGridItem>
			<NGridItem :span="isMobile ? 12 : 4">
				<NSpace vertical>
					<Notification :content="notifyText" :loading="loading" />
					<UserInformation
						@click="onLoginClick"
						:loading="loading"
						:isLogin="isLogin"
						:user="{
							username: 'BeiyanPiki',
							avatar: 'https://www.gravatar.com/avatar/e1ccabc233c966800949b364cfcbe77b?s=80&d=identicon',
							tag: 'master',
							rating: { value: 2562, diff: 15 },
							rank: { value: 23, diff: -3 },
							prevStanding: { self: 20, all: 15302 },
						}"
					/>
					<Contest
						:loading="loading"
						:ongoing="[
							{
								id: 1,
								name: 'MLeague #1 - Div.1',
								endTime: 1625068800,
							},
							{
								id: 2,
								name: 'MLeague #1 - Div.2',
								endTime: 1625068800,
							},
						]"
						:upcoming="[
							{
								id: 1,
								name: 'MLeague #2 - Div.1',
								startTime: 1625068800,
							},
							{
								id: 2,
								name: 'MLeague #2 - Div.2',
								startTime: 1625068800,
							},
						]"
					/>
				</NSpace>
			</NGridItem>
		</NGrid>
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed, ref, onMounted } from 'vue'
	import {
		NGrid,
		NGridItem,
		NDivider,
		NPagination,
		NSkeleton,
		NSpace,
		NH1,
	} from 'naive-ui'

	import { mockBlogText, mockNotifyText } from './test'
	import { useStore } from '@/store'
	import TopicBlog from './TopicBlog.vue'
	import Notification from './Notification.vue'
	import UserInformation from './UserInformation.vue'
	import Contest from './Contest.vue'
	import { useI18n } from 'vue-i18n'

	export default defineComponent({
		components: {
			NGrid,
			NGridItem,
			NDivider,
			NPagination,
			NSkeleton,
			NSpace,
			NH1,

			TopicBlog,
			Notification,
			UserInformation,
			Contest,
		},
		setup() {
			const store = useStore()
			const { t } = useI18n()

			const isMobile = computed(() => store.state.ui.isMobile)
			const loading = ref(true)
			const page = ref<number>(1)

			onMounted(() => {
				setTimeout(() => {
					loading.value = false
				}, 2000)
			})

			const notifyText = mockNotifyText

			const isLogin = ref(true)
			const onLoginClick = () => {
				isLogin.value = ture
			}

			return {
				t,
				mockText: mockBlogText,
				isMobile,
				loading,
				page,
				notifyText,
				isLogin,
				onLoginClick,
			}
		},
	})
</script>
