import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
// import logo from "../../image/typo.png";
import Logo from './Logo';
import SideBar from './SideBar';

const Header = () => {
  const [spreadNav, setSpreadNav] = React.useState(false); // 네비바를 여는 스테이트.
  const [isView, setIsView] = React.useState(false); // 내부 값을 보이게 하는 스테이트.
  const [bgView, setBgView] = React.useState('transparent');

  const [id, setId] = React.useState('췤키라웃')
  const [img, setImg] = React.useState({})

  const onClick = () => {
    setSpreadNav(props => !props);
    setTimeout(() => setIsView(props => !props), 350);
  };

  // const onChangeBg = () => {
  //   backgroundColor === 'blue' ? setBgView('blue') : setBgView('transparent');
  // };
  return (
    <HeaderBox>
      <MenuWrap>
        <MenuButton onClick={onClick}>{!spreadNav ? <BiMenu fontSize='30px' color='#3a3a3a' /> : <IoClose fontSize='30px' color='#3a3a3a' />}</MenuButton>
        <SideBar spreadNav={spreadNav} isView={isView} />
        <MenuButton onClick={onClick}>{!spreadNav ? <BiMenu fontSize='30px' color='#3a3a3a' /> : <IoClose fontSize='30px' color='#fff' />}</MenuButton>
      </MenuWrap>

      <Logo>{/* <img src={logo} alt="logo" /> */}</Logo>

      <UserInfo>
        <UserImg className='w-3 h-3 rounded-full hidden'>
          <img className='w-full h-full object-cover bg-slate-600' src={setImg} alt="profile-img"/>
        </UserImg>
        <UserId>{id}</UserId>
      </UserInfo>
    </HeaderBox>
  );
};

const MenuWrap = styled.div`
  width: 77px;
`;

const HeaderBox = tw.div`
  flex
  flex-row
  justify-between
  items-center
  w-full
  h-24
  p-5
  bg-slate-200
  fixed
`;

const MenuButton = styled.div`
  cursor: pointer;
  position: absolute;
  left: 15px;
  top: 20px;
  /* z-index: 11; */
`;

const UserInfo = tw.div`
  w-20
`;
const UserImg = tw.div`
w-3 h-3 rounded-full hidden

& img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
const UserId = tw.div``

export default Header;
