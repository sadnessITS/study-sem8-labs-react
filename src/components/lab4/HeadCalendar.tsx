import { Dispatch, SetStateAction } from 'react'

const HeadCalendar = ({
	setCurrentDateInCalendar,
	currentDateInCalendar,
}: {
	currentDateInCalendar: Date
	setCurrentDateInCalendar: Dispatch<SetStateAction<Date>>
}) => {
	const setPrevMonth = () => {
		setCurrentDateInCalendar(prev => {
			const prevMonth = prev.getMonth() - 1 < 0 ? 11 : prev.getMonth() - 1
			const prevYear =
				prev.getMonth() - 1 < 0 ? prev.getFullYear() - 1 : prev.getFullYear()
			return new Date(prevYear, prevMonth, 1)
		})
	}

	const setNextMonth = () => {
		setCurrentDateInCalendar(prev => {
			const nextMonth = prev.getMonth() + 1 > 11 ? 0 : prev.getMonth() + 1
			const nextYear =
				prev.getMonth() + 1 > 11 ? prev.getFullYear() + 1 : prev.getFullYear()
			return new Date(nextYear, nextMonth, 1)
		})
	}

	return (
		<div style={{ width: '100%' }}>
			<button onClick={setPrevMonth}>{'<'}</button>
			<span>{currentDateInCalendar.toDateString().slice(3)}</span>
			<button onClick={setNextMonth}>{'>'}</button>
		</div>
	)
}

export default HeadCalendar
