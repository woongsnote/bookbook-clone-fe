import { useNavigate } from "react-router-dom";

const logo = require("../../image/typo.png");

const Logo = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  return (
    <div className="w-auto">
      <img src={logo} alt="logo" className="w-48 hover:cursor-pointer" onClick={goMain} />
    </div>
  );
};

export default Logo;
