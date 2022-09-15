import tw from "tailwind-styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../elem/Button";
import Logo from "../common/Logo";
import {
  checkEmail,
  checkUserName,
  checkPassword,
} from "../../utils/validation";
import instance from "../../shared/api";

/** 회원가입 폼 */
const RegisterForm = () => {
  const navigate = useNavigate();

  const [email, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setNewPassword] = useState("");

  const [emailHelp, setEmailHelp] = useState("");
  const [usernameHelp, setUsernameHelp] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isUsernameError, setIsUsernameError] = useState(false);

  const passwordDoubleCheck = (password, newPassword) => {
    if (password !== newPassword) {
      console.log("비밀번호가 다릅니다.");
      return;
    } else {
      console.log("비밀번호가 동일합니다");
    }
  };

  const onChangeEmailHandler = (e) => {
    setUserEmail(e.target.value);
    checkEmail(e.target.value)
      ? setEmailError("")
      : setEmailError("이메일 형식이 아닙니다");
  };

  const onChangeUsernameHandler = (e) => {
    setUsername(e.target.value);
    checkUserName(e.target.value)
      ? setUsernameError("")
      : setUsernameError("닉네임 형식이 아닙니다");
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
    setPasswordError(checkPassword(e.target.value));
  };

  const onChangeNewPasswordHandler = (e) => {
    setNewPassword(e.target.value);
    setPasswordConfirmError(checkPassword(e.target.value));
    passwordDoubleCheck(password, e.target.value);
  };

  const onEmailCheck = async () => {
    if (email === "") {
      setEmailError("이메일을 입력해주세요!");
      return;
    } else {
      if (checkEmail(email)) {
        // dispatch(__checkEmail(email));
        const response = await instance.post("/api/member/email", { email });
        console.log(response);

        if (response.status === 200) {
          setIsEmailError(false);
          setEmailHelp("사용 가능한 이메일입니다.");
          return;
        } else {
          setIsEmailError(true);
          setEmailError("이미 존재하는 이메일입니다.");
          return;
        }

        const checked = response.data.check;
        console.log(checked);

        if (checked) {
          setEmailHelp("사용 가능한 이메일입니다.");
        } else {
          setIsEmailError(true);
          setEmailError("이미 존재하는 이메일입니다.");
        }
      }
    }
  };

  const onUsernameCheck = async () => {
    if (username === "") {
      setUsernameError("닉네임을 입력해주세요!");
      return;
    } else {
      if (checkUserName(username)) {
        const response = await instance.post("/api/member/nickname", {
          username,
        });
        console.log(response);

        const checked = response.data.check;
        if (checked) {
          setUsernameHelp("사용 가능한 닉네임입니다.");
        } else {
          setIsUsernameError(true);
          setUsernameError("이미 존재하는 닉네임입니다.");
        }
      }
    }
  };

  //TODO 회원가입 성공하면 메인 페이지로 이동 실패시 사용자에게 알려주기
  const onRegister = (e) => {
    console.log("click Register");
    e.preventDefault();

    join(email, username, password);
  };

  const join = async (email, username, password) => {
    try {
      const res = await instance.post(`/api/member/signup`, {
        email,
        username,
        password,
      });
      console.log(res);
      if (res.data.statusCode === 200) {
        navigate("/");
      } else {
        alert("회원가입을 실패했습니다. 다시 시도해 주세요");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onRegister}>
      <FormContainer>
        <LogBox>
          <Logo />
        </LogBox>
        <InputContainer>
          <InputBox>
            <Input
              type="email"
              placeholder="이메일"
              value={email || ""}
              onChange={onChangeEmailHandler}
              required
            />
            <CheckButton type="button" onClick={onEmailCheck}>
              중복확인
            </CheckButton>
          </InputBox>
          {emailError === "" ? "" : ""}
          {isEmailError ? (
            <ErrorMessage>{emailError}</ErrorMessage>
          ) : (
            <HelpMessage>{emailHelp}</HelpMessage>
          )}
        </InputContainer>
        <InputContainer>
          <InputBox>
            <Input
              type="text"
              placeholder="닉네임"
              value={username || ""}
              required
              onChange={onChangeUsernameHandler}
            />
            <CheckButton className="" type="button" onClick={onUsernameCheck}>
              중복확인
            </CheckButton>
          </InputBox>
          {isUsernameError ? (
            <ErrorMessage>{usernameError}</ErrorMessage>
          ) : (
            <HelpMessage>{usernameHelp}</HelpMessage>
          )}
        </InputContainer>
        <InputContainer>
          <InputBox>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password || ""}
              onChange={onChangePasswordHandler}
              autoComplete="off"
              required
            />
          </InputBox>
          <ErrorMessage>{passwordError}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <InputBox>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm || ""}
              onChange={onChangeNewPasswordHandler}
              autoComplete="off"
              required
            />
          </InputBox>
          <ErrorMessage>{passwordConfirmError}</ErrorMessage>
        </InputContainer>

        <Button>책 읽으러가기</Button>
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
mt-4
`;

const InputContainer = tw.div``;

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

const ErrorMessage = tw.p`
text-rose-500
text-sm
`;

const HelpMessage = tw.p`
text-green-500
text-sm
`;
