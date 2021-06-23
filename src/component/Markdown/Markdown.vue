<template>
	<div>
		<NConfigProvider :theme="theme === 'light' ? null : darkTheme">
			<NElement
				tag="div"
				class="markdown-body"
				style="padding: 0 12px"
				v-html="output"
			/>
		</NConfigProvider>
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed } from 'vue'
	import { NConfigProvider, NElement, darkTheme } from 'naive-ui'
	import { useStore } from '@/store'
	// markdown-it and plugin
	import markdownIt from 'markdown-it'
	import markdownItKatex from '@traptitech/markdown-it-katex'
	import markdownItEmoji from 'markdown-it-emoji'
	import markdownItToc from 'markdown-it-github-toc'
	import markdownItGithubImgSize from '@steelydylan/markdown-it-imsize'
	import markdownItKbd from 'markdown-it-kbd'
	import markdownItSub from 'markdown-it-sub'
	import markdownItSup from 'markdown-it-sup'
	import markdownItFootnote from 'markdown-it-footnote'
	import markdownItAbbr from 'markdown-it-abbr'
	import markdownItIns from 'markdown-it-ins'
	import markdownItMark from 'markdown-it-mark'
	import markdownItTaskLists from 'markdown-it-task-lists'
	import markdownItSourceMap from 'markdown-it-source-map'
	import markdownItHighLight from './highlight'
	import './assets/markdown.css'
	import './assets/katex/katex.css'

	export default defineComponent({
		props: { text: { type: String, default: '' } },
		components: { NConfigProvider, NElement },
		setup({ text }) {
			const md = markdownIt()
				.set({
					html: true,
					linkify: true,
					typographer: true,
				})
				.use(markdownItKatex, {
					blockClass: 'math-block',
					errorColor: '#cc0000',
				})
				.use(markdownItEmoji)
				.use(markdownItToc, {
					tocFirstLevel: 2,
					tocLastLevel: 3,
					tocClassName: 'toc',
					anchorLinkSymbol: '',
					anchorLinkSpace: false,
					anchorClassName: 'anchor',
					anchorLinkSymbolClassName: 'octicon octicon-link',
				})
				.use(markdownItGithubImgSize, { autofill: true })
				.use(markdownItKbd)
				.use(markdownItSub)
				.use(markdownItSup)
				.use(markdownItFootnote)
				.use(markdownItAbbr)
				.use(markdownItIns)
				.use(markdownItMark)
				.use(markdownItTaskLists)
				.use(markdownItSourceMap)
				.use(markdownItHighLight)

			const output = md.render(text)

			const store = useStore()
			const theme = computed(() => store.state.ui.theme)

			return { theme, darkTheme, output }
		},
	})
</script>
