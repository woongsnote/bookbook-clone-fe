import { Link } from "react-router-dom";

const RegisterBox = () => {
  return (
    <div className="flex align-center justify-center mt-4">
      <p className="text-gray-500 text-sm text-center mr-2">
        아직 회원이 아니신가요?
      </p>
      <Link to="/register">
        <span className="text-center text-sm text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100 ">
          가입하러가기
        </span>
      </Link>
    </div>
  );
};

export default RegisterBox;
