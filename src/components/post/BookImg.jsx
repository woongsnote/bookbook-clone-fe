// import tw from 'tailwind-styled-components';
import { useRef, useState } from 'react';
import harry from '../../image/harry.jpg';
import styled from 'styled-components';

const BookImg = () => {
  const fileInput = useRef(null);
  const [image, setImage] = useState('');
  const changeHandler = e => {
    setImage(e.target.files[0]);
  };

  return (
    <BookImgWrap>
      <label id='bookcover' src={harry} alt='bookimg' />
      <input id='bookcover' type='file' accept='.jpg,.png,.jpeg' ref={fileInput} onChange={changeHandler} />
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
