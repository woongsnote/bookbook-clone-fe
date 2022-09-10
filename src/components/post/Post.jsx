import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Header from '../common/Header';
import styled from 'styled-components';
import DatePick from './DatePick';


const Post = () => {
  const navigate = useNavigate;
  const [title, setTitle] = useState('');

  return (
    <PostWrap>
      <Header />

      {/* NOTE 컨텐츠 */}
      <PostCon>
        <PostTitle>{title}</PostTitle>

        <InfoBox className='flex mt-16 h-screen bg-gray-900'>
          <BookImg className='w-2/5 h-2/5 bg-slate-200' />
          <BookInfo>
            <BookReading>
              <DatePick />
            </BookReading>
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
`;

const BookImg = tw.div` 
`;

const BookInfo = tw.div`
  
`;

const BookReading = tw.div``;

export default Post;
