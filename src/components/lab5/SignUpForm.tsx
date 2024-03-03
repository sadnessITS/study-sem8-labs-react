import { useState } from "react";
import DatePicker from "react-datepicker";
import Phone from "../lab3/Phone.tsx";
import ProgressBar from "./ProgressBar.tsx";
import { SignUpEmailInput } from "./SignUpEmailInput.tsx";
import SignUpPasswordInput from "./SignUpPasswordInput.tsx";
import {
  ButtonBlockedState,
  FormDataType,
  PasswordStrengthType,
} from "./types.ts";
import "react-datepicker/dist/react-datepicker.css";

export default function SignUpForm() {
  const [IsSendBlocked, setIsSendBlocked] = useState<ButtonBlockedState>({
    isEmailInvalid: true,
    isPasswordInvalid: true,
  });

  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    name: "",
    lastName: "",
    patronymic: "",
    sex: "man",
    phone: "",
  });

  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrengthType>({
      hasEnoughLetters: false,
      hasEnoughNumbers: false,
      hasSpecialCharacters: false,
      hasLowercase: false,
      hasUppercase: false,
    });

  return (
    <div style={{ border: "1px solid black", padding: "5%" }}>
      <SignUpEmailInput
        setIsSendBlocked={setIsSendBlocked}
        IsSendBlocked={IsSendBlocked}
        formData={formData}
        setFormData={setFormData}
      />
      <SignUpPasswordInput
        setPasswordStrength={setPasswordStrength}
        setIsSendBlocked={setIsSendBlocked}
        IsSendBlocked={IsSendBlocked}
        formData={formData}
        setFormData={setFormData}
      />
      <ProgressBar passwordStrength={passwordStrength} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "left",
        }}
      >
        <p>Дата рождения</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div
        style={{
          marginTop: "16px",
          width: "60%",
          alignItems: "left",
          flexDirection: "column",
          // margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            width: "250px",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="1">Имя</label>
          <input
            id={"1"}
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            width: "250px",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="2">Фамилия</label>
          <input
            id={"2"}
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            width: "250px",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="3">Отчество</label>
          <input
            id={"3"}
            type="text"
            value={formData.patronymic}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, patronymic: e.target.value }))
            }
          />
        </div>
      </div>
      <div style={{ justifyContent: "space-between", marginTop: "10px" }}>
        <label htmlFor={"man"}>Мужчина</label>
        <input
          type="radio"
          id={"man"}
          name={"sex"}
          checked={formData.sex === "man"}
          onChange={() => setFormData((prev) => ({ ...prev, sex: "man" }))}
        />
        <label htmlFor={"woman"}>Женщина</label>
        <input
          type="radio"
          id={"woman"}
          name={"sex"}
          checked={formData.sex === "woman"}
          onChange={() => setFormData((prev) => ({ ...prev, sex: "woman" }))}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <Phone />
      </div>

      <button
        style={{ marginTop: "10px" }}
        disabled={Object.values(IsSendBlocked).some((field) => field)}
        onClick={() => {
          console.log(formData);
        }}
      >
        Отправить
      </button>
    </div>
  );
}
