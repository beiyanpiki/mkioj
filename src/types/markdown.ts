declare module 'markdown-it-github-toc' {
	import { PluginSimple, PluginWithOptions } from 'markdown-it/lib'

	interface Options {
		toc?: boolean
		tocClassName?: string
		tocFirstLevel?: number
		tocLastLevel?: number
		anchorLink?: boolean
		anchorLinkSymbol?: string
		anchorLinkSpace?: boolean
		anchorLinkSymbolClassName?: string | null
		anchorLinkBefore?: boolean
		anchorClassName?: string
		resetIds?: boolean
		indentation?: string
	}

	const markdownItGithubToc: PluginSimple | PluginWithOptions<Options>
	export = markdownItGithubToc
}

declare module 'markdown-it-task-lists' {
	import { PluginSimple, PluginWithOptions } from 'markdown-it/lib'

	interface Options {
		enabled?: boolean
		label?: boolean
		labelAfter?: boolean
	}

	const markdownItTaskLists: PluginSimple | PluginWithOptions<Options>
	export = markdownItTaskLists
}

declare module 'markdown-it-sub' {
	import { PluginSimple } from 'markdown-it/lib'
	const markdownItSub: PluginSimple
	export = markdownItSub
}

declare module 'markdown-it-sup' {
	import { PluginSimple } from 'markdown-it/lib'
	const markdownItSup: PluginSimple
	export = markdownItSup
}

declare module 'markdown-it-footnote' {
	import { PluginSimple } from 'markdown-it/lib'
	const markdownItFootnote: PluginSimple
	export = markdownItFootnote
}

declare module 'markdown-it-abbr' {
	import { PluginSimple } from 'markdown-it/lib'
	const markdownItAbbr: PluginSimple
	export = markdownItAbbr
}

declare module 'markdown-it-ins' {
	import { PluginSimple } from 'markdown-it/lib'
	const markdownItIns: PluginSimple
	export = markdownItIns
}

declare module 'markdown-it-mark' {
	import { PluginSimple } from 'markdown-it/lib'
	const markdownItMark: PluginSimple
	export = markdownItMark
}

declare module 'markdown-it-source-map' {
	import { PluginSimple } from 'markdown-it/lib'
	const markdownItSourceMap: PluginSimple
	export = markdownItSourceMap
}
