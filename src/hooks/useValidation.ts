import { ChangeEvent, useRef, useState } from "react";
import { isValidEmail, isValidPassword } from "../utils/validation";

const useValidation = (validationFunction: (value: string) => boolean) => {
  const valueRef = useRef("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    valueRef.current = e.target.value;
  };

  const handleBlur = () => {
    const isValid = validationFunction(valueRef.current);
    setError(isValid ? "" : "유효하지 않은 값입니다.");
  };

  return {
    valueRef,
    error,
    handleChange,
    handleBlur,
    isValid: error === "" && valueRef.current !== "",
  };
};

const useEmailValidation = () => {
  const isEmailValid = (value: string) => isValidEmail(value);
  return useValidation(isEmailValid);
};

const usePasswordValidation = () => {
  const isPasswordValid = (value: string) => isValidPassword(value);
  return useValidation(isPasswordValid);
};

export { useEmailValidation, usePasswordValidation };
