import tw from "tailwind-styled-components";
import LoginForm from "../components/login/LoginForm";
import RegisterBox from "../components/login/RegisterBox";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
      <RegisterBox />
    </LoginWrapper>
  );
};

const LoginWrapper = tw.div`
w-full
h-full
mt-24
`;

export default Login;
