import MarkdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token'

import hljs from 'highlight.js/lib/core'

import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import java from 'highlight.js/lib/languages/java'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'

hljs.registerLanguage('c', c)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('java', java)
hljs.registerLanguage('py', python)
hljs.registerLanguage('python', python)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)

import 'highlight.js/styles/github-dark-dimmed.css'

const highlightPlugin = (md: MarkdownIt) => {
	md.renderer.rules.fence = (tokens: Token[], idx: number) => {
		const token = tokens[idx]
		const code = token.content
		const lang = token.info
		const langObj = hljs.getLanguage(lang)
		let cnt
		if (langObj) {
			cnt = hljs.highlight(code, {
				language: lang,
				ignoreIllegals: true,
			}).value
		} else {
			cnt = hljs.highlightAuto(code).value
		}

		return `<pre class='hljs'><code>${cnt}</code></pre>`
	}
}

export default highlightPlugin
