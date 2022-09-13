import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
//import Header from "../components/common/Header";

// 각각 요소 컴포넌트
import BookImg from '../components/post/BookImg';
import ReadingPeriod from '../components/post/ReadingPeriod';
import Star from '../components/post/Star';
import BookIntro from '../components/post/BookIntro';
import PublisherPage from '../components/post/PublisherPage';
import Layout from '../components/common/Layout';
import { useDispatch } from 'react-redux';
import { __addReview } from '../redux/modules/postSlice';

const Post = () => {
  const dispatch = useDispatch();

  // ANCHOR 이니셜 스테이트
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [readStart, setReadStart] = useState('2000 - 01 - 01');
  const [star, setStar] = useState(0);
  const [intro, setIntro] = useState('');
  const [readEnd, setReadEnd] = useState('2999 - 12 - 31');
  const [publisher, setPublisher] = useState('');
  const [page, setPage] = useState(0);

  const onClick = () => {
    dispatch(__addReview({ title: setTitle, readStart: setReadStart, readEnd: setReadEnd, star: setStar }));
  };

  return (
    <Layout>
      <PostWrap>
        <PostCon>
          <InfoBox className='flex'>
            <BookImg />
            <BookInfo>
              <PostTitle placeholder='제목을 입력하세요' onChange={setTitle} />
              <ReadingPeriod onChange={(setReadStart, setReadEnd)} />
              <Star onChange={setStar} />
              <BookIntro onChange={setIntro} />
              <PublisherPage onChange={{ publisher, page }} />
            </BookInfo>
          </InfoBox>
          <Button className='button transition delay-100 duration-300 ease-in-out' type='button' onClick={onClick}>
            등록
          </Button>
        </PostCon>
      </PostWrap>
    </Layout>
  );
};

const PostWrap = tw.div`
  w-full
  pt-28
`;

const PostCon = tw.div`
  w-c
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
