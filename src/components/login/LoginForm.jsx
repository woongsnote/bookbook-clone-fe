import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import Button from "../../elem/Button";
import Logo from "../common/Logo";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onChangeEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click Login");
    navigate("/main");
  };
  return (
    <Form>
      <FormContainer>
        <LogBox>
          <Logo />
        </LogBox>

        <Input
          type="email"
          placeholder="이메일"
          value={userEmail}
          onChange={onChangeEmailHandler}
        />

        <Input
          type="text"
          placeholder="비밀번호"
          value={userPassword}
          onChange={onChangePasswordHandler}
        />

        <Button type="button" onClick={onClickLogin}>
          이메일로 로그인
        </Button>
        <div className="flex align-center justify-center mt-4">
          <RegisterText>아직 회원이 아니신가요? </RegisterText>

          <Link to="/register">
            <RegisterLink> 가입하러가기</RegisterLink>
          </Link>
        </div>
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
border
focus:ring ring-indigo-300

outline-none
transition
duration-100
px-3
py-2
my-4
bg-gray-200
`;

const RegisterText = tw.p`
text-gray-500
text-sm
text-center
mr-2
`;

const RegisterLink = tw.p`
text-center
text-sm
text-indigo-500
hover:text-indigo-600
active:text-indigo-700
transition duration-100`;

export default LoginForm;
