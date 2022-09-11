import logo from "../../image/typo.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <TwLogo>
      <Link to="/main">
        <img src={logo} alt="logo" />
      </Link>
    </TwLogo>
  );
};

export default Logo;

const TwLogo = tw.div`
  w-auto
  & > img {
    w-48
  }
`;
