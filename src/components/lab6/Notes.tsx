import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { NoteData } from './types'

export default function Notes() {
	const [notesData, setNotesData] = useState<NoteData[]>([])

	const initialData = {
		title: '',
		date: new Date(),
		text: '',
		id: '',
	}
	const [formData, setFormData] = useState<NoteData>(initialData)

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<input
					maxLength={10}
					type='text'
					value={formData.title}
					onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
				/>
				<textarea
					value={formData.text}
					maxLength={20}
					onChange={e => setFormData(prev => ({ ...prev, text: e.target.value }))}
				/>
				<DatePicker
					selected={formData.date}
					onChange={date =>
						setFormData(prev => ({ ...prev, date: date || new Date() }))
					}
				/>
				<button
					onClick={() => {
						setNotesData(prev => [...prev, formData])
						setFormData(initialData)
					}}>
					Добавить заметку
				</button>
				{notesData.length >= 3 && (
					<div>
						<button
							onClick={() => setNotesData(prev => prev.filter((_, i) => i !== 0))}>
							Убрать первую
						</button>
						<button
							onClick={() =>
								setNotesData(prev => prev.filter((_, i) => i !== prev.length - 1))
							}>
							Убрать последнюю
						</button>
					</div>
				)}
			</div>
			<br />
			<br />
			<div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
				{notesData.map((note, index) => (
					<div
						key={note.id}
						style={{ background: index >= 7 ? 'red' : 'yellow', width: '150px' }}>
						{index >= 7 && 'Слишком много заметок'}
						<Note noteData={note} />
					</div>
				))}
			</div>
		</>
	)
}

const Note = ({ noteData }: { noteData: NoteData }) => {
	return (
		<>
			<p>{noteData.date.toDateString()}</p>
			<p>{noteData.title}</p>
			<p>{noteData.text}</p>
		</>
	)
}
