import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkEmail, checkPassword } from "../../utils/validation";
import instance from "../../shared/api";

const LoginForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /** 로그인 */
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await instance.post("/login", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/main");
    } catch (error) {
      console.error(error);
    }
  };

  /** 이메일 유효성 확인 */
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (emailRef.current) {
      if (!checkEmail(emailRef.current.value)) {
        setEmailError("유효하지 않은 이메일입니다.");
      } else {
        setEmailError("");
      }
    }
  };

  /** 비밀번호 유효성 확인 */
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordRef.current) {
      if (checkPassword(passwordRef.current.value) !== "") {
        setPasswordError("유효하지 않은 비밀번호입니다.");
      } else {
        setPasswordError("");
      }
    }
  };

  /** 버튼 비활성 */
  const isDisabled = !!emailError || !!passwordError;

  return (
    <form onSubmit={loginHandler} className="max-w-lg rounded-lg mx-auto p-4">
      <input
        className="w-full text-gray-800 border-b focus:border-b-black bg-transparent outline-none transition duration-100 px-3 py-2 my-4"
        type="email"
        placeholder="이메일"
        ref={emailRef}
        onChange={emailChangeHandler}
        required
      />
      {emailError && <p className="text-rose-500 text-sm">{emailError}</p>}
      <input
        className="w-full text-gray-800 border-b focus:border-b-black bg-transparent outline-none transition duration-100 px-3 py-2 my-4"
        type="password"
        placeholder="비밀번호"
        ref={passwordRef}
        onChange={passwordChangeHandler}
        required
      />
      {passwordError === "" ? (
        <p className="text-sm my-3">
          비밀번호는 영문 대소문자,숫자를 혼합하여 4-20자로 입력해주세요
        </p>
      ) : (
        <p className="text-rose-500 text-sm">{passwordError}</p>
      )}
      <button
        type="submit"
        disabled={isDisabled}
        className="bg-Bblue p-2 rounded-lg text-white self-center mx-auto block my-4 w-4/5">
        이메일로 로그인
      </button>
    </form>
  );
};

export default LoginForm;
