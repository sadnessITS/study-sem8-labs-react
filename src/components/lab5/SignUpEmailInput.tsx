import { Dispatch, SetStateAction } from 'react'
import { ButtonBlockedState, FormDataType } from './types.ts'

export const SignUpEmailInput = ({
	IsSendBlocked,
	setIsSendBlocked,
	formData,
	setFormData,
}: {
	IsSendBlocked: ButtonBlockedState
	setIsSendBlocked: Dispatch<SetStateAction<ButtonBlockedState>>
	formData: FormDataType
	setFormData: Dispatch<SetStateAction<FormDataType>>
}) => {
	return (
		<div>
			<label
				htmlFor='email'
				style={{
					marginRight: '20px',
				}}>
				Email
			</label>
			<input
				id='email'
				type='email'
				value={formData.email}
				onChange={e => {
					setFormData(prev => ({ ...prev, email: e.target.value }))
					setIsSendBlocked(prevState => ({
						...prevState,
						isEmailInvalid: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value),
					}))
				}}
			/>
			{IsSendBlocked.isEmailInvalid && (
				<p style={{ color: 'red' }}>Ошибка валидации. </p>
			)}
		</div>
	)
}
