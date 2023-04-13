import Wrapper from "../components/common/Wrapper";
import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";
import RegisterBox from "../components/login/RegisterBox";

const Login = () => {
  return (
    <Wrapper>
      <LoginHeader />
      <LoginForm />
      <RegisterBox />
    </Wrapper>
  );
};

export default Login;
