import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import Layout from "../components/layout/Layout";
import Button from "../elem/Button";

const Login = () => {
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
    navigate("/");
  };

  return (
    <Layout>
      <Container>
        <Form>
          <FormContainer>
            <Title>북적북적</Title>
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

            <RegisterText>아직 회원이 아니신가요?</RegisterText>

            <Link to="/register">
              <RegisterLink>가입하러가기</RegisterLink>
            </Link>

            <Button type="button" onClick={onClickLogin}>
              로그인
            </Button>
          </FormContainer>
        </Form>
      </Container>
    </Layout>
  );
};

const Container = tw.div`
px-4
mx-auto
`;

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

const RegisterLink = tw.p`
text-center
text-indigo-500
hover:text-indigo-600
active:text-indigo-700
transition duration-100`;

export default Login;
