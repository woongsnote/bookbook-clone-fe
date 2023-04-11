import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className="flex align-center justify-center mt-4">
      <span className="text-gray-500 text-sm text-center">
        이미 가입이 되어있으신가요?
      </span>
      <Link to="/">
        <span className="text-center text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">
          로그인
        </span>
      </Link>
    </div>
  );
};

export default LoginBox;
