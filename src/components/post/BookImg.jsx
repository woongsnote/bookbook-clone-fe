// import tw from 'tailwind-styled-components';
import harry from '../../image/harry.jpg';
import styled from 'styled-components';

const BookImg = () => {
  return (
    <BookImgWrap>
      <img src={harry} alt='bookimg' />
      <input type='file' id='bookcover' />
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
