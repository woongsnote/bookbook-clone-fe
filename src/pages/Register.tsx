import FormContainer from "../components/common/FormContainer";
import Wrapper from "../components/common/Wrapper";
import LoginBox from "../components/register/LoginBox";
import RegisterForm from "../components/register/RegisterForm";

const Register = () => {
  return (
    <Wrapper>
      <FormContainer>
        <RegisterForm />
        <LoginBox />
      </FormContainer>
    </Wrapper>
  );
};

export default Register;
