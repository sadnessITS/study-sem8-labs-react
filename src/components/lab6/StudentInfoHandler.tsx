import { StudentInfoType } from './types.ts'
import { phoneProviders } from './utils.ts'

export default function StudentInfoHandler({
	studentInfo,
}: {
	studentInfo: StudentInfoType
}) {
	const studentAge = new Date().getFullYear() - studentInfo.birthday.getFullYear()
	const course =
		new Date().getFullYear() - studentInfo.enrollment.getFullYear() > 4
			? 'Окончил университет'
			: new Date().getFullYear() - studentInfo.enrollment.getFullYear()
	const mailOperator = studentInfo.email.split('@')[1]
	const phoneProvider = phoneProviders.find(
		provider =>
			provider.pattern1.test(studentInfo.phone) ||
			provider?.pattern2?.test(studentInfo.phone)
	)
	return (
		<>
			<table border={1} style={{ borderCollapse: 'collapse' }}>
				<tbody style={{ border: '1px solid black' }}>
					<tr>
						<td>Фио</td>
						<td>
							{studentInfo.lastName} {studentInfo.name} {studentInfo.patronymic}
						</td>
					</tr>
					<tr>
						<td>Возраст</td>
						<td>{studentAge}</td>
					</tr>
					<tr>
						<td>Факультет курс группа</td>
						<td>
							{studentInfo.faculty} {course} {studentInfo.group}
						</td>
					</tr>
					<tr>
						<td>Специальность</td>
						<td>{studentInfo.specialization}</td>
					</tr>
					<tr>
						<td>Почта</td>
						<td>{studentInfo.email}</td>
					</tr>
					<tr>
						<td>Оператор почты</td>
						<td>{mailOperator}</td>
					</tr>
					<tr>
						<td>Оператор услуг мобильной связи</td>
						<td>{phoneProvider ? phoneProvider.name : 'Не удалось определить'}</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}
