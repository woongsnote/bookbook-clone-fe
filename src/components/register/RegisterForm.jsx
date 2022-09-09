import tw from "tailwind-styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../elem/Button";

/** 회원가입 폼 */
const RegisterForm = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onChangeEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const onEmailCheck = () => {
    console.log("이메일 중복확인");
  };

  const onNicknameCheck = () => {
    console.log("닉네임 중복확인");
  };

  const onClickRegister = () => {
    console.log("click Register");
    navigate("/");
  };

  return (
    <Form>
      <FormContainer>
        <Title>북적북적</Title>

        <div className="flex">
          <Input
            type="email"
            placeholder="이메일"
            value={userEmail}
            onChange={onChangeEmailHandler}
          />

          <Button type="button" onClick={onEmailCheck}>
            중복확인
          </Button>
        </div>

        <div className="flex">
          <Input
            type="text"
            placeholder="닉네임"
            value={userEmail}
            onChange={onChangeEmailHandler}
          />

          <Button type="button" onClick={onNicknameCheck}>
            중복확인
          </Button>
        </div>

        <Input
          type="password"
          placeholder="비밀번호"
          value={userPassword}
          onChange={onChangePasswordHandler}
        />

        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={userPassword}
          onChange={onChangePasswordHandler}
        />

        <RegisterText>이미 가입이 되어있으신가요?</RegisterText>

        <Link to="/login">
          <LoginLink>로그인</LoginLink>
        </Link>

        <Button type="button" onClick={onClickRegister}>
          책 읽으러가기
        </Button>
      </FormContainer>
    </Form>
  );
};

export default RegisterForm;

const Title = tw.h2`
text-gray-800 
text-2xl 
lg:text-3xl
font-bold 
text-center
mb-4
md:mb-8
my-4
`;

const Form = tw.form`
max-w-lg
border
rounded-lg
mx-auto
bg-gray-200
`;

const FormContainer = tw.div`
flex
flex-col
gap-4
p-4
md:m-8
`;

const Input = tw.input`
w-full
text-gray-800
border
focus:ring ring-indigo-300
rounded-full
outline-none
transition
duration-100
px-3
py-2
my-4`;

const RegisterText = tw.p`
text-gray-500
text-sm
text-center
`;

const LoginLink = tw.p`
text-center
text-indigo-500
hover:text-indigo-600
active:text-indigo-700
transition duration-100`;
