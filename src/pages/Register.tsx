import Wrapper from "../components/common/Wrapper";
import FormContainer from "../components/common/FormContainer";
import RegisterForm from "../components/register/RegisterForm";
import FormFooter from "../components/common/FormFooter";

const Register = () => {
  return (
    <Wrapper>
      <FormContainer>
        <RegisterForm />
        <FormFooter
          title={"이미 가입이 되어있으신가요?"}
          linkTitle={"로그인"}
          href={"/login"}
        />
      </FormContainer>
    </Wrapper>
  );
};

export default Register;
