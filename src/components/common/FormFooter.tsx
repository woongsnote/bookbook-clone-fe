import { Link } from "react-router-dom";

type Props = {
  title: string;
  linkTitle: string;
};

const FormFooter = ({ title, linkTitle }: Props) => {
  return (
    <div className="flex align-center justify-center">
      <p className="text-gray-500 text-sm text-center mr-2">{title}</p>
      <Link to="/register">
        <span className="text-center text-sm text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100 ">
          {linkTitle}
        </span>
      </Link>
    </div>
  );
};

export default FormFooter;
