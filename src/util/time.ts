export const formatSecondToHMS = (s: number): string => {
	const hour = Math.floor(s / 3600)
	s -= hour * 3600
	const minute = Math.floor(s / 60)
	s -= minute * 60
	const second = s
	return `${hour}:${minute < 10 ? '0' + minute : minute}:${
		second < 10 ? '0' + second : second
	}`
}
