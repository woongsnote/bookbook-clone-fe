import tw from "tailwind-styled-components";
import LoginBox from "../components/register/LoginBox";
import RegisterForm from "../components/register/RegisterForm";
const Register = () => {
  return (
    <RegisterWrapper>
      <RegisterForm />
      <LoginBox />
    </RegisterWrapper>
  );
};

const RegisterWrapper = tw.div`
w-full
h-full
mt-24
`;

export default Register;
