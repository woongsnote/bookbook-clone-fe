import React from "react";
import tw from "tailwind-styled-components";
import { BiMenu } from "react-icons/bi";
import logo from "../../image/typo.png";
import App from "./../../App";

const Header = () => {
  return (
    <HeaderBox>
      <BiMenu fontSize={40} />
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <UserInfo>도토리킹</UserInfo>
    </HeaderBox>
  );
};

const HeaderBox = tw.div`
  flex
  flex-row
  justify-between
  items-center
  w-full
  h-24
  p-5
`;

const Logo = tw.div`
  w-auto
  & > img {
    w-48
  }
`;

const UserInfo = tw.div`
  w-20
`;

export default Header;
