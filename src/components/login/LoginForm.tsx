import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkEmail, checkPassword } from "../../utils/validation";

import Button from "../../elem/Button";
import Logo from "../common/Logo";
import instance from "../../shared/api";

const LoginForm = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginError, setLoginError] = useState("");

  const onChangeEmailHandler = (e:any) => {
    setEmail(e.target.value);
    checkEmail(e.target.value)
      ? setEmailError("")
      : setEmailError("이메일 형식이 아닙니다");
  };

  const onChangePasswordHandler = (e: any) => {
    setPassword(e.target.value);
    setPasswordError(checkPassword(e.target.value));
  };

  const loginHandler = (e: any) => {
    e.preventDefault();

    login(email, password);
  };

  const login = async (email: string, password: string) => {
    try {
      const user = { email, password };

      const res = await instance.post(`/api/member/login`, user);
      console.log(res);

      if (res.status === 200) {
        const accessToken = res.headers.authorization;
        const refreshToken = res.headers["refresh-token"];
        sessionStorage.setItem("Access_token", accessToken);
        sessionStorage.setItem("Refresh_token", refreshToken);
        navigate("/main");
      } else {
        setLoginError(res.data.error);
      }
    } catch (error: any) {
      console.log(error);
      setLoginError(error);
    }
  };

  return (
    <form
      onSubmit={loginHandler}
      className="max-w-lg    border    rounded-lg    mx-auto">
      <div className="flex flex-col gap-4 p-4 md:m-8">
        <div className="flex self-center">
          <Logo />
        </div>

        <div>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmailHandler}
            autoComplete="false"
            required
          />
          <p className="text-rose-500">{emailError}</p>
        </div>

        <div>
          <input
            className="w-full
text-gray-800
border-b
focus:border-b-black
bg-transparent
outline-none
transition
duration-100
px-3
py-2
my-4"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePasswordHandler}
            autoComplete="false"
            required
          />
          {passwordError === "" ? (
            <p className="text-xs">
              비밀번호는 영문 대소문자,숫자를 혼합하여 4-20자로 입력해주세요
            </p>
          ) : (
            <p className="text-rose-500"> {passwordError}</p>
          )}
        </div>

        <Button>이메일로 로그인</Button>
      </div>
    </form>
  );
};

export default LoginForm;
