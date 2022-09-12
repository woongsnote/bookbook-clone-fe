import tw from 'tailwind-styled-components';
import styled from 'styled-components';

import Header from '../components/common/Header';
import Layout from '../components/layout/Layout';
import SideBar from '../components/common/SideBar';

import profile from '../image/profile.jpg';
import { useState } from 'react';

const Subscribe = () => {
  const [Nickname, setNickName] = useState('췤키라웃');
  const [Sub, setSub] = useState('구독중');
  const [isHover, setIsHover] = useState(false);

  const onMouseOver=() => {{setIsHover(true);}}
  const onMouseOut=() => {{setIsHover(false);}}

  return (
    <Wrapper>
      <Header />
      <Layout>
        <div>
          <ProfileImg>
            {/* <img id='profile' src={profile} alt='bookimg' /> */}
            <img src={isHover ? {profile} : {backgroundColor:(0,0,0,.5)} } alt='profileImg' />
          </ProfileImg>
          <ProfileNick>
            <ProfileId>{Nickname}</ProfileId>
            <IsSub>{Sub}</IsSub>
          </ProfileNick>
        </div>
        <div></div>
      </Layout>
    </Wrapper>
  );
};

// const Profile = tw.div`
//   w-profile
//   h-profile
//   bg-slate-700
//   rounded-full

//   & > img {
//     w-full
//     h-full
//     object-cover
//   }
// `;

const Wrapper = styled.div`
  height: 1080px;
`;

const ProfileImg = styled.div`
  margin: 180px auto 0 auto;
  width: 180px;
  height: 180px;
  border-radius: 100%;
  overflow: hidden;

  & img,
  div {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      cursor: pointer;
      background-image: (0, 0, 0, 0.5);
    }
  }
`;

const ProfileNick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const ProfileId = styled.div`
  color: #3a3a3a;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-right: 10px;
`;
const IsSub = styled.div`
  border: 0.5px solid #567f9e;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 600;
  color: #567f9e;
`;

export default Subscribe;
