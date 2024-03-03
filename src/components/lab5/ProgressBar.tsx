import { PasswordStrengthType } from './types.ts'

export default function ProgressBar({
	passwordStrength,
}: {
	passwordStrength: PasswordStrengthType
}) {
	const percent =
		(Object.values(passwordStrength).filter(item => item).length /
			Object.values(passwordStrength).length) *
		100
	return (
		<div>
			<p>Пароль безопасен на {percent}%</p>
		</div>
	)
}
