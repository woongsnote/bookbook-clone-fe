import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <LoginContainer>
      <RegisterText>이미 가입이 되어있으신가요?</RegisterText>

      <Link to="/">
        <LoginLink>로그인</LoginLink>
      </Link>
    </LoginContainer>
  );
};

const LoginContainer = tw.div`
flex
align-center
justify-center
mt-4    
`;

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

export default LoginBox;
