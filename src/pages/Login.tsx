import Wrapper from "../components/common/Wrapper";
import FormContainer from "../components/common/FormContainer";
import LoginForm from "../components/login/LoginForm";
import FormFooter from "../components/common/FormFooter";

const Login = () => {
  return (
    <Wrapper>
      <FormContainer>
        <LoginForm />
        <FormFooter
          title={"아직 회원이 아니신가요?"}
          linkTitle={"가입하러가기"}
          href={"/register"}
        />
      </FormContainer>
    </Wrapper>
  );
};

export default Login;
