import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  isValidEmail,
  isValidUsername,
  isValidPassword,
} from "../../utils/validation";
import instance from "../../apis/instance";
import Input from "../common/Input";

/** 회원가입 폼 */
const RegisterForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState({
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await instance.post("/register", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        userName: userNameRef.current?.value,
      });

      console.log(response.data);

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "email":
        if (!isValidEmail(value)) {
          errorMessage = "이메일 형식에 맞지 않습니다.";
        }
        break;
      case "userName":
        if (!isValidUsername(value)) {
          errorMessage = "닉네임 형식에 맞지 않습니다.";
        }
        break;
      case "password":
        if (!isValidPassword(value)) {
          errorMessage = "비밀번호 형식에 맞지 않습니다.";
        }
        break;
      case "passwordConfirm":
        if (value !== passwordRef.current?.value) {
          errorMessage = "비밀번호가 일치하지 않습니다.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErros)=>({...prevErros, [name]: errorMessage}));
  };

  /** 이메일 유효성 확인 */
  
  /** 버튼 비활성 */
  const isDisabled = Object.values(errors).some((error)=>!!error)

  return (
    <form className="max-w-lg mx-auto p-2" onSubmit={registerHandler}>
      <div className="flex flex-row items-center">
        <Input
          type="email"
          placeholder="이메일"
          inputRef={emailRef}
          name="email"
          onChange={handleInputChange}
        />
        <button className="border m-2 p-2  h-auto rounded-lg w-32">
          중복확인
        </button>
      </div>
      {errors.email && <p className="text-rose-500 text-xs">{errors.email}</p>}
      <div className="flex flex-row items-center">
        <Input
          type="username"
          placeholder="닉네임"
          inputRef={userNameRef}
          name="userName"
          onChange={handleInputChange}
        />
        <button className="border m-2 p-2  h-auto rounded-lg w-32">
          중복확인
        </button>
      </div>
      {errors.userName && (
        <p className="text-rose-500 text-xs">{errors.userName}</p>
      )}
      <Input
        type="password"
        placeholder="비밀번호"
        inputRef={passwordRef}
        name="password"
        onChange={handleInputChange}
      />
      {errors.password && (
        <p className="text-rose-500 text-xs">{errors.password}</p>
      )}
      <Input
        type="passwordconfirm"
        placeholder="비밀번호확인"
        inputRef={passwordConfirmRef}
        name="passwordConfirm"
        onChange={handleInputChange}
      />
      {errors.passwordConfirm && (
        <p className="text-rose-500 text-xs">{errors.passwordConfirm}</p>
      )}
      <p className="text-xs mt-2">
        비밀번호는 영문 대소문자,숫자를 혼합하여 4-20자로 입력해주세요
      </p>
      <button
        type="submit"
        disabled={isDisabled}
        className="bg-Bblue p-2 rounded-lg text-white self-center mx-auto block mt-4 w-4/5"
      >
        책 읽으러가기
      </button>
    </form>
  );

};

export default RegisterForm;
