import { useState } from "react";

import { useNavigate } from "react-router-dom";

import tw from "tailwind-styled-components";
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

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
    checkEmail(e.target.value)
      ? setEmailError("")
      : setEmailError("이메일 형식이 아닙니다");
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
    setPasswordError(checkPassword(e.target.value));
  };

  const loginHandler = (e) => {
    e.preventDefault();

    login(email, password);
  };

  const login = async (email, password) => {
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
    } catch (error) {
      console.log(error);
      setLoginError(error);
    }
  };

  return (
    <Form onSubmit={loginHandler}>
      <FormContainer>
        <LogBox>
          <Logo />
        </LogBox>

        <div>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmailHandler}
            autoComplete="false"
            required
          />
          <ErrorMessage>{emailError}</ErrorMessage>
        </div>

        <div>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePasswordHandler}
            autoComplete="false"
            required
          />
          {passwordError === "" ? (
            <HelpText>
              비밀번호는 영문 대소문자,숫자를 혼합하여 4-20자로 입력해주세요
            </HelpText>
          ) : (
            <ErrorMessage> {passwordError}</ErrorMessage>
          )}
        </div>
        {/* <p>{loginError}</p> */}

        <Button type="button">이메일로 로그인</Button>
      </FormContainer>
    </Form>
  );
};

const Form = tw.form`
max-w-lg
border
rounded-lg
mx-auto
`;

const FormContainer = tw.div`
flex
flex-col
gap-4
p-4
md:m-8
`;

const LogBox = tw.div`
flex 
self-center
`;

const Input = tw.input`
w-full
text-gray-800
border-b
focus:border-b-black
bg-transparent
outline-none
transition
duration-100
px-3
py-2
my-4
`;

const ErrorMessage = tw.p`
  text-rose-500
`;

const HelpText = tw.p`
  text-xs
`;

export default LoginForm;
