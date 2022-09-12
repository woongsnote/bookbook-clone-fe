import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import Button from "../../elem/Button";
import Logo from "../common/Logo";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = (e) => {
    console.log("click Login");
    e.preventDefault();
    navigate("/main");
  };
  return (
    <Form onSubmit={onClickLogin}>
      <FormContainer>
        <LogBox>
          <Logo />
        </LogBox>

        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmailHandler}
          autoComplete="false"
          required
        />

        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePasswordHandler}
          autoComplete="false"
          required
        />
        {/* 로그인 실패 시 오류 메시지 전달 */}
        {/* <p>test</p> */}

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
  flex self-center
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

export default LoginForm;
