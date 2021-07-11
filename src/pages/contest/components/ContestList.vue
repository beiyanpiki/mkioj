<template>
	<div>
		<NDataTable :data="contestData" :columns="columns" :single-line="false"
	/></div>
</template>

<script lang="ts">
	import { defineComponent, PropType, h } from 'vue'
	import { NDataTable, NTime, NText, NTag } from 'naive-ui'
	import { formatSecondToHMS, renderIcon } from '@/utils'
	import { Check as CheckIcon, Lock as LockIcon } from '@vicons/fa'
	interface IContestItem {
		cid: number
		name: string
		startAt: number
		length: number
		author: { uid: number; name: string; level: string }[]
		tags: string[]
		type: 1 | 2 | 3 | 4
		auth: 1 | 2
		status: 1 | 2 | 3
		participants: number
	}

	export default defineComponent({
		name: 'Contest-List',
		components: { NDataTable },
		props: {
			data: {
				type: Array as PropType<IContestItem[]>,
				required: true,
			},
		},
		setup(props) {
			const columns = [
				{ title: '#', key: 'cid', align: 'center' },
				{ title: 'Name', key: 'name', align: 'center' },
				{
					title: 'Author',
					key: 'author',
					align: 'center',
					render(rowData: IContestItem, rowIndex: number) {
						const authors = rowData.author.map(({ name }) => {
							return h(
								NText,
								{
									type: 'success',
									tag: 'div',
								},
								{
									default: () => name,
								},
							)
						})
						return authors
					},
				},
				{
					title: 'Start At',
					key: 'startAt',
					align: 'center',
					render(rowData: IContestItem, rowIndex: number) {
						return h(NTime, {
							time: rowData.startAt,
							unix: true,
						})
					},
				},
				{
					title: 'Length',
					key: 'length',
					align: 'center',
					render(rowData: IContestItem, rowIndex: number) {
						return formatSecondToHMS(rowData.length)
					},
				},
				{
					title: 'Tag',
					key: 'tags',
					align: 'center',
					render(rowData: IContestItem, rowIndex: number) {
						const tags = rowData.tags.map((tag) => {
							return h(
								NTag,
								{
									type: 'info',
									style: 'margin-left: 8px',
								},
								{
									default: () => tag,
								},
							)
						})
						return tags
					},
				},
				{
					title: 'Auth',
					key: 'auth',
					align: 'center',
					render(rowData: IContestItem, rowIndex: number) {
						const auth = rowData.auth
						if (auth === 1) {
							return renderIcon(LockIcon, 16, 3, '#f2721e')()
						} else {
							return renderIcon(CheckIcon, 16, 3, '#21ba45')()
						}
					},
				},
				{
					title: 'Status',
					key: 'status',
					align: 'center',
					render(rowData: IContestItem, rowIndex: number) {
						const status = rowData.status
						if (status === 1) {
							return 'Upcoming'
						} else if (status === 2) {
							return 'Running'
						} else {
							return 'Ended'
						}
					},
				},
			]
			const { data } = props
			return {
				columns,
				contestData: data,
			}
		},
	})
</script>
