import { Dispatch, FormEvent, RefObject, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../shared/api";
import Input from "../common/Input";

interface InputField {
  ref: RefObject<HTMLInputElement>;
  validationFunction: (value: string) => string;
  errorStateFunction: Dispatch<React.SetStateAction<string>>;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /** 로그인 */
  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await instance.post("/login", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  /** 버튼 비활성 */
  const isDisabled = !!emailError || !!passwordError;

  const emailChangeHandler = () => {};

  const passwordChangeHandler = () => {};

  return (
    <form onSubmit={loginHandler} className="max-w-lg mx-auto p-4">
      <Input
        type="email"
        placeholder="이메일"
        inputRef={emailRef}
        onChange={emailChangeHandler}
      />
      {emailError && <p className="text-rose-500 text-xs">{emailError}</p>}

      <Input
        type="password"
        placeholder="비밀번호"
        inputRef={passwordRef}
        onChange={passwordChangeHandler}
      />
      {passwordError && (
        <p className="text-rose-500 text-xs">{passwordError}</p>
      )}
      <p className="text-xs mt-2">
        비밀번호는 영문 대소문자,숫자를 혼합하여 4-20자로 입력해주세요
      </p>

      <button
        type="submit"
        disabled={isDisabled}
        className="bg-Bblue p-2 rounded-lg text-white self-center mx-auto block mt-4 w-4/5">
        이메일로 로그인
      </button>
    </form>
  );
};

export default LoginForm;
