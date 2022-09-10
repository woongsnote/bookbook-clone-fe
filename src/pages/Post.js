// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Header from '../components/common/Header';

// 각각 요소 컴포넌트
import Star from '../components/post/Star';
import BookImg from '../components/post/BookImg';
import ReadingPeriod from '../components/post/ReadingPeriod';
import BookIntro from '../components/post/BookIntro';
import PublisherPage from '../components/post/PublisherPage';

const Post = () => {
  // const navigate = useNavigate;
  // const [title, setTitle] = useState('');

  return (
    <PostWrap>
      <Header />

      {/* NOTE 컨텐츠 */}
      <PostCon>
        <PostTitle>해리포터</PostTitle>

        <InfoBox className='flex mt-16 h-screen'>
          {/* WHAT 책이미지 */}
          <BookImg />

          {/* ANCHOR 책정보 */}
          <BookInfo>
            <ReadingPeriod />
            <Star />
            <BookIntro />
            <PublisherPage />

            <button type='button'>등록하기</button>
          </BookInfo>
        </InfoBox>
      </PostCon>
    </PostWrap>
  );
};

const PostWrap = tw.div`
  w-full
  h-screen
  bg-slate-300
`;

const PostCon = tw.div`
  w-c
  h-screen
  mx-auto
  mt-28
`;

const PostTitle = tw.div`
 text-2xl
`;

const InfoBox = tw.div`
  bg-slate-600
  w-full
`;

const BookInfo = tw.div`
  w-3/5
  bg-red-300
`;

export default Post;
