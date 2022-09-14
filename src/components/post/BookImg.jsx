// import tw from 'tailwind-styled-components';
import { useRef, useState, useEffect } from 'react';
import harry from '../../image/harry.jpg';
import styled from 'styled-components';
import { __getReview } from '../../redux/modules/postSlice';
import { useDispatch,useSelector } from 'react-redux';

const BookImg = () => {
  const dispatch = useDispatch();
  const bookCover = useSelector((state) => state.books);
  console.log('🚀 ~ BookImg ~ bookCover', bookCover)
  
  useEffect(() => {
    dispatch(__getReview());
  }, []);

  return (
    <BookImgWrap>
      <img src={bookCover} alt='bookcover' />
    </BookImgWrap>
  );
};

const BookImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 45%;
  background-color: rgb(226, 215, 230);
`;

export default BookImg;
