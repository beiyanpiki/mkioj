import { h } from 'vue'
import { NIcon } from 'naive-ui'

export const renderIcon = (
	icon: any,
	size: number | undefined = undefined,
	depth: 1 | 2 | 3 | 4 | 5 | undefined = undefined,
	color: string | undefined = undefined,
) => {
	return () => h(NIcon, { size, color }, { default: () => h(icon) })
}
