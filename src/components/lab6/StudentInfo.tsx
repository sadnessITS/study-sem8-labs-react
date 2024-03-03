import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { createPortal } from "react-dom";
import StudentInfoHandler from "./StudentInfoHandler.tsx";
import { StudentInfoType } from "./types.ts";
import "react-datepicker/dist/react-datepicker.css";

export default function StudentInfo() {
  const [studentInfo, setStudentInfo] = useState<StudentInfoType>({
    email: "",
    name: "",
    lastName: "",
    patronymic: "",
    birthday: new Date(),
    enrollment: new Date(),
    phone: "",
    faculty: "",
    group: "",
    specialization: "",
  });
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (container) {
      const curWindow = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
      curWindow.document.body.appendChild(container);
      return () => {
        curWindow.close();
        setContainer(null);
      };
    }
  }, [container]);
  return (
    <div>
      <div
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="l">Фамилия</label>
        <input
          type="text"
          id={"l"}
          value={studentInfo.lastName}
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="n">Имя</label>
        <input
          type="text"
          id={"n"}
          value={studentInfo.name}
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="p">Отчество</label>
        <input
          id={"p"}
          type="text"
          value={studentInfo.patronymic}
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, patronymic: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="e">Email</label>
        <input
          id={"e"}
          type="text"
          value={studentInfo.email}
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="f">Факультет</label>
        <input
          id={"f"}
          type="text"
          value={studentInfo.faculty}
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, faculty: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="g">Группа</label>
        <input
          id={"g"}
          type="text"
          value={studentInfo.group}
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, group: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="s">Специализация</label>
        <input
          id={"s"}
          type="text"
          value={studentInfo.specialization}
          onChange={(e) =>
            setStudentInfo((prev) => ({
              ...prev,
              specialization: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <p>Дата зачисления</p>
        <DatePicker
          selected={studentInfo.enrollment}
          onChange={(date: Date) =>
            setStudentInfo((prev) => ({ ...prev, enrollment: date }))
          }
        />
      </div>
      <div>
        <p>Дата рождения</p>
        <DatePicker
          selected={studentInfo.birthday}
          onChange={(date: Date) =>
            setStudentInfo((prev) => ({ ...prev, birthday: date }))
          }
        />
      </div>
      <div>
        <p>Телефон</p>
        <input
          id={"ph"}
          type="text"
          value={studentInfo.phone}
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>
      {container &&
        createPortal(
          <StudentInfoHandler studentInfo={studentInfo} />,
          container
        )}
      <button
        style={{ marginTop: "10px", marginBottom: "10px" }}
        onClick={() =>
          setContainer((prev) => (prev ? null : document.createElement("div")))
        }
      >
        {container ? "Закрыть окно" : "Получить информацию в новом окне"}{" "}
      </button>
      <StudentInfoHandler studentInfo={studentInfo} />
    </div>
  );
}
