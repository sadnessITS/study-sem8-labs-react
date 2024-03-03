import { Dispatch, SetStateAction, useState } from "react";
import {
  ButtonBlockedState,
  FormDataType,
  PasswordStrengthType,
} from "./types.ts";

export default function SignUpPasswordInput({
  setPasswordStrength,
  IsSendBlocked,
  setIsSendBlocked,
  formData,
  setFormData,
}: {
  setPasswordStrength: Dispatch<SetStateAction<PasswordStrengthType>>;
  IsSendBlocked: ButtonBlockedState;
  setIsSendBlocked: Dispatch<SetStateAction<ButtonBlockedState>>;
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
}) {
  const [submitPassword, setSubmitPassword] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <label htmlFor="pass1" style={{ marginBottom: "10px" }}>
          Введите пароль
        </label>
        <input
          id={"pass1"}
          type="password"
          value={formData.password}
          style={{ marginBottom: "15px" }}
          onChange={(e) => {
            setPasswordStrength({
              hasEnoughLetters: /[a-zA-Z]{4,}/.test(e.target.value),
              hasEnoughNumbers: /\d{4,}/.test(e.target.value),
              hasLowercase: /[a-z]/.test(e.target.value),
              hasUppercase: /[A-Z]/.test(e.target.value),
              hasSpecialCharacters: /[^a-zA-Z0-9]/.test(e.target.value),
            });
            setIsSendBlocked((prevState) => ({
              ...prevState,
              isPasswordInvalid:
                e.target.value !== submitPassword || !e.target.value,
            }));
            setFormData((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <label htmlFor="pass2" style={{ marginBottom: "10px" }}>
          Повторите пароль
        </label>
        <input
          id={"pass2"}
          type="password"
          value={submitPassword}
          onChange={(e) => {
            setSubmitPassword(e.target.value);
            setIsSendBlocked((prevState) => ({
              ...prevState,
              isPasswordInvalid: e.target.value !== formData.password,
            }));
          }}
        />
      </div>
      {IsSendBlocked.isPasswordInvalid && (
        <p style={{ color: "red" }}>Пароли не совпадают</p>
      )}
      {!formData.password && <p style={{ color: "red" }}>Введите пароль</p>}
    </>
  );
}
