import tw from "tailwind-styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../elem/Button";
import Logo from "../common/Logo";
import { checkEmail, checkNickName } from "../../utils/validation";
/** 회원가입 폼 */
const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setUserEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const onChangeEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const onChangeNickNameHandler = (e) => {
    setNickName(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNewPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const onEmailCheck = () => {
    console.log("이메일 중복확인");
    console.log(email);

    let result = checkEmail(email);
    if (!result) {
      console.log("이메일 형식에 맞지 않습니다");
      return;
    }
    // 이메일 형식이 아닌 경우 오류 메시지 띄움

    //이메일 형식이 맞다면, db로 전송해서, db에 있는지 확인
    //=> return true: db에 존재하므로 사용 불가
    //=> return false: db에 존재하므로 사용 불가
  };

  const onNicknameCheck = () => {
    console.log("닉네임 중복확인");
    // 닉네임 형식이 아닌 경우 오류 메시지 띄움
    let result = checkNickName(nickName);
    if (!result) {
      console.log("이메일 형식에 맞지 않습니다");
      return;
    }
    // 닉네임 형식이 맞다면, db로 전송
  };

  //TODO 로그인 성공하면 메인 페이지로 이동 실패시 사용자에게 알려주기
  const onClickRegister = () => {
    console.log("click Register");
    navigate("/main");
  };

  return (
    <Form>
      <FormContainer>
        <LogBox>
          <Logo />
        </LogBox>

        <InputBox>
          <Input
            type="email"
            placeholder="이메일"
            value={email || ""}
            onChange={onChangeEmailHandler}
          />
          <CheckButton type="button" onClick={onEmailCheck}>
            중복확인
          </CheckButton>
        </InputBox>

        <InputBox>
          <Input
            type="text"
            placeholder="닉네임"
            value={nickName || ""}
            onChange={onChangeNickNameHandler}
          />
          <CheckButton className="" type="button" onClick={onNicknameCheck}>
            중복확인
          </CheckButton>
        </InputBox>

        <InputBox>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password || ""}
            onChange={onChangePasswordHandler}
            autoComplete="off"
          />
        </InputBox>
        <InputBox>
          <Input
            type="new-password"
            placeholder="비밀번호 확인"
            value={newPassword || ""}
            onChange={onChangeNewPasswordHandler}
            autoComplete="off"
          />
        </InputBox>

        <RegisterText>이미 가입이 되어있으신가요?</RegisterText>

        <Link to="/">
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

const Form = tw.form`
max-w-lg
border
rounded-lg
mx-auto
border-gray-200

`;

const FormContainer = tw.div`
flex
flex-col
gap-4
p-4
md:m-8
`;

const LogBox = tw.div`
  flex self-center
`;

const InputBox = tw.div`
  flex items-center border-b border-teal-700 py-2
`;

const Input = tw.input`
w-full
text-gray-800
border-b
focus:border-b-black
bg-transparent
outline-none
transition
duration-100
px-3
py-2
my-4
`;

const CheckButton = tw.button`
  flex-shrink-0
  bg-teal-500
  hover:bg-teal-700 
  border-teal-500
  hover:border-teal-700
  text-sm 
  border-4 
  text-white
  py-1 
  px-2 
  rounded
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
