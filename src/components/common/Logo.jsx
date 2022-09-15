import logo from "../../image/typo.png";
import tw from "tailwind-styled-components";

const Logo = () => {
  return (
    <TwLogo>
      <img src={logo} alt="logo" />
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
