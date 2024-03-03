export type ButtonBlockedState = { isEmailInvalid: boolean; isPasswordInvalid: boolean }

export type FormDataType = {
	email: string
	password: string
	name: string
	lastName: string
	patronymic: string
	sex: 'man' | 'woman'
	phone: string
}

export type PasswordStrengthType = {
	hasEnoughLetters: boolean
	hasEnoughNumbers: boolean
	hasSpecialCharacters: boolean
	hasLowercase: boolean
	hasUppercase: boolean
}
