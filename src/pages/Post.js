// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Header from '../components/common/Header';

// 각각 요소 컴포넌트
import BookImg from '../components/post/BookImg';
import ReadingPeriod from '../components/post/ReadingPeriod';
import Star from '../components/post/Star';
import BookIntro from '../components/post/BookIntro';
import PublisherPage from '../components/post/PublisherPage';

const Post = () => {
  // const navigate = useNavigate;
  // const [title, setTitle] = useState('');

  return (
    <PostWrap>
      <Header />

      <PostCon>
        <InfoBox className='flex mt-16'>
          <BookImg />
          <BookInfo>
            <PostTitle placeholder='제목을 입력하세요' />
            <ReadingPeriod />
            <Star />
            <BookIntro />
            <PublisherPage />
          </BookInfo>
        </InfoBox>
        <Button className='button transition delay-100 duration-300 ease-in-out' type='button' >
          등록
        </Button>
      </PostCon>
    </PostWrap>
  );
};

const PostWrap = tw.div`
  w-full
  h-auto
  `;

const PostCon = tw.div`
  w-c
  bg-slate-300
  mx-auto
  `;

const PostTitle = tw.input`
  text-Bblack
  text-2xl
  font-bold
  w-auto
  mb-3
  `;

const InfoBox = tw.div`
  w-full
  `;

const BookInfo = tw.div`
    w-3/5
    h-1/2
    px-10
`;

const Button = tw.button`
  w-full
  h-10
  mt-20
  bg-Bblue
  text-Bwhite
  rounded-full
  hover:bg-BDeepblue
`;

export default Post;
