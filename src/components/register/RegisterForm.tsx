import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  isValidEmail,
  isvalidUsername,
  isValidPassword,
} from "../../utils/validation";
import instance from "../../shared/api";
import Input from "../common/Input";

/** 회원가입 폼 */
const RegisterForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const [emailError, setEmailError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

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

  /** 이메일 유효성 확인 */
  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (emailRef.current) {
      if (!isValidEmail(emailRef.current.value)) {
        setEmailError("이메일 형식에 맞지 않습니다.");
      } else {
        setEmailError("");
      }
    }
  };

  /** 닉네임 유효성 확인 */
  const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (userNameRef.current) {
      if (!isvalidUsername(userNameRef.current.value)) {
        setUserNameError("닉네임 형식에 맞지 않습니다.");
      } else {
        setUserNameError("");
      }
    }
  };

  /** 비밀번호 유효성 확인 */
  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // if (passwordRef.current) {
    //   if (isValidPassword(passwordRef.current.value) !== "") {
    //     setPasswordError(isValidPassword(passwordRef.current.value));
    //   } else {
    //     setPasswordError("");
    //   }
    // }
  };

  const passwordConfirmChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // if (passwordConfirmRef.current) {
    //   if (isValidPassword(passwordConfirmRef.current.value) !== "") {
    //     setPasswordConfirmError(isValidPassword(passwordConfirmRef.current.value));
    //   } else {
    //     setPasswordConfirmError("");
    //   }
    // }
  };
  /** 버튼 비활성 */
  const isDisabled = !!emailError || !!passwordError;
  
  return (
    <form className="max-w-lg mx-auto p-2" onSubmit={registerHandler}>
      <div className="flex flex-row items-center">
        <Input
          type="email"
          placeholder="이메일"
          inputRef={emailRef}
          onChange={emailChangeHandler}
        />
        <button className="border m-2 p-2  h-auto rounded-lg w-32">
          중복확인
        </button>
      </div>
      {emailError && <p className="text-rose-500 text-xs">{emailError}</p>}
      <div className="flex flex-row items-center">
        <Input
          type="username"
          placeholder="닉네임"
          inputRef={userNameRef}
          onChange={usernameChangeHandler}
        />
        <button className="border m-2 p-2  h-auto rounded-lg w-32">
          중복확인
        </button>
      </div>
      {userNameError && (
        <p className="text-rose-500 text-xs">{userNameError}</p>
      )}
      <Input
        type="password"
        placeholder="비밀번호"
        inputRef={passwordRef}
        onChange={passwordChangeHandler}
      />
      {passwordError && (
        <p className="text-rose-500 text-xs">{passwordError}</p>
      )}
      <Input
        type="passwordconfirm"
        placeholder="비밀번호확인"
        inputRef={passwordConfirmRef}
        onChange={passwordConfirmChangeHandler}
      />
      {passwordConfirmError && (
        <p className="text-rose-500 text-xs">{passwordConfirmError}</p>
      )}
      <p className="text-xs mt-2">
        비밀번호는 영문 대소문자,숫자를 혼합하여 4-20자로 입력해주세요
      </p>
      <button
        type="submit"
        disabled={isDisabled}
        className="bg-Bblue p-2 rounded-lg text-white self-center mx-auto block mt-4 w-4/5">
        책 읽으러가기
      </button>
    </form>
  );
};

export default RegisterForm;
