import React from "react";

type JobMenuProps = {};

type JobMenuState = {
  selectedProfession: string | null;
};

const professions = ["Доктор", "Учитель", "Инженер", "Дизайнер", "Программист"];

const menus = {
  Доктор: [
    "Прием пациентов",
    "Назначение лечения",
    "Проведение операций",
    "Медицинские исследования",
    "Подготовка медицинских отчетов",
    "Сотрудничество с медицинским персоналом",
    "Обучение студентов-медиков",
  ],
  Учитель: [
    "Планирование уроков",
    "Преподавание предметов",
    "Оценивание успеваемости",
    "Консультирование учеников",
    "Организация внеклассной работы",
    "Работа с родителями",
    "Профессиональное развитие",
  ],
  Инженер: [
    "Проектирование",
    "Разработка",
    "Тестирование",
    "Внедрение",
    "Поддержка",
    "Анализ и оптимизация",
    "Сотрудничество с командой",
  ],
  Дизайнер: [
    "Исследование и анализ",
    "Создание концепции и макетов",
    "Разработка графических элементов",
    "Прототипирование",
    "Тестирование и анализ пользовательского опыта",
    "Сотрудничество с командой разработки",
    "Создание стилей и брендинга",
  ],
  Программист: [
    "Разработка программного кода",
    "Тестирование и отладка",
    "Рефакторинг и оптимизация",
    "Создание архитектуры приложения",
    "Сотрудничество с командой разработки",
    "Работа с базами данных",
    "Документирование кода",
  ],
};

class JobMenu extends React.Component<JobMenuProps, JobMenuState> {
  constructor(props: JobMenuProps) {
    super(props);
    this.state = {
      selectedProfession: null,
    };
  }

  handleProfessionChange = (profession: string) => {
    this.setState({ selectedProfession: profession });
  };

  render() {
    const { selectedProfession } = this.state;

    return (
      <div>
        <h3>Выберите профессию:</h3>
        <ul>
          {professions.map((profession) => (
            <li key={profession}>
              <label>
                <input
                  type="radio"
                  value={profession}
                  checked={selectedProfession === profession}
                  onChange={() => this.handleProfessionChange(profession)}
                />
                {profession}
              </label>
            </li>
          ))}
        </ul>

        {selectedProfession && (
          <div>
            <h3>Меню для профессии: {selectedProfession}</h3>
            <ul>
              {menus[selectedProfession].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default JobMenu;
