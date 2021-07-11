<template>
	<div style="height: 100vh; position: relative">
		<NLayout position="absolute" has-sider>
			<NLayoutHeader style="height: 64px; line-height: 64px" bordered>
				<Header />
			</NLayoutHeader>

			<NLayout has-sider position="absolute" style="top: 64px">
				<NLayoutSider
					bordered
					show-trigger
					collapse-mode="width"
					:collapsed-width="64"
					:width="240"
				>
					<SideMenu />
				</NLayoutSider>

				<NLayout
					:native-scrollbar="false"
					content-style="display: flex; flex-direction: column; min-height: calc(100vh - 64px);"
				>
					<NLayoutContent
						style="flex-shrink: 0; flex-grow: 1; padding: 32px 24px"
					>
						<router-view></router-view>
					</NLayoutContent>
					<NLayoutFooter
						bordered
						style="flex-shrink: 0; flex-grow: 0; padding: 4px"
					>
						<Footer />
					</NLayoutFooter>
				</NLayout>
			</NLayout>
		</NLayout>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Header from './components/Header.vue'
	import SideMenu from './components/SideMenu.vue'
	import Footer from './components/Footer.vue'
	import {
		NLayout,
		NLayoutHeader,
		NLayoutSider,
		NLayoutContent,
		NLayoutFooter,
		useLoadingBar,
	} from 'naive-ui'
	import { useStore } from '@/store'
	import { useRouter } from 'vue-router'

	export default defineComponent({
		name: 'Layout',
		components: {
			NLayout,
			NLayoutHeader,
			NLayoutSider,
			NLayoutContent,
			NLayoutFooter,

			Header,
			SideMenu,
			Footer,
		},
		setup() {
			const store = useStore()
			const router = useRouter()
			const loadingBar = useLoadingBar()

			router.beforeEach((to, from) => {
				loadingBar?.start()
			})
			router.afterEach((to, from) => {
				if (to.meta.key) {
					store.commit('ui/changeMenuKey', to.meta.key)
				}
				loadingBar?.finish()
			})
		},
	})
</script>
