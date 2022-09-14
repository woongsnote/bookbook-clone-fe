// import tw from 'tailwind-styled-components';
import { useRef, useState } from 'react';
import harry from '../../image/harry.jpg';
import styled from 'styled-components';

const BookImg = ({ img }) => {

  return (
    <BookImgWrap>
      <img src={img} alt='bookcover' />
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
