import { onBeforeUnmount, onMounted, ref } from 'vue'

type IBreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const defaultBreakPoint = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
}

const useDimensions = () => {
	const width = ref<Number>(0)
	const height = ref<Number>(0)
	const currentBreakpoint = ref<IBreakPoint>('xxl')

	const getCurrentBreakpoint = (dimension: Number): IBreakPoint => {
		if (dimension < defaultBreakPoint.sm) {
			return 'xs'
		} else if (dimension < defaultBreakPoint.md) {
			return 'sm'
		} else if (dimension < defaultBreakPoint.lg) {
			return 'md'
		} else if (dimension < defaultBreakPoint.xl) {
			return 'lg'
		} else if (dimension < defaultBreakPoint.xxl) {
			return 'xl'
		} else {
			return 'xxl'
		}
	}

	const onResize = () => {
		width.value = window.innerWidth
		height.value = window.innerHeight
		currentBreakpoint.value = getCurrentBreakpoint(width.value)
	}

	onMounted(() => {
		window.addEventListener('resize', onResize)
		onResize()
	})

	onBeforeUnmount(() => {
		window.removeEventListener('resize', onResize)
	})

	return {
		width,
		height,
		currentBreakpoint,
	}
}

export default useDimensions
