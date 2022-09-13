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

  const formSubmit = e => {
    const image = e.target.files[0]
    const formData = new FormData();
    formData.append('file', image)
  }

  return (
    <BookImgWrap>
      <label id='bookcover' src={harry} alt='bookimg' />
      <input id='bookcover' type='file' accept='image/*' ref={fileInput} onChange={formSubmit} />
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
