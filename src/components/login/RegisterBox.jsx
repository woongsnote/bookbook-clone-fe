import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const RegisterBox = () => {
  return (
    <RegisterContainer>
      <RegisterText>아직 회원이 아니신가요? </RegisterText>

      <Link to="/register">
        <RegisterLink> 가입하러가기</RegisterLink>
      </Link>
    </RegisterContainer>
  );
};

const RegisterContainer = tw.div`
flex
align-center
justify-center
mt-4    
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

export default RegisterBox;
