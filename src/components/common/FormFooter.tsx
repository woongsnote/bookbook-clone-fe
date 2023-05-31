import { Link } from "react-router-dom";

type FormFooterProps = {
  title: string;
  linkTitle: string;
  href: string;
};

const FormFooter = ({ title, linkTitle, href }: FormFooterProps) => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-gray-500 text-sm text-center mr-2">{title}</p>
      <Link to={href}>
        <span className="text-center text-sm text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100 ">
          {linkTitle}
        </span>
      </Link>
    </div>
  );
};

export default FormFooter;
