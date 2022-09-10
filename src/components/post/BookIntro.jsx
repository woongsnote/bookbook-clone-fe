import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const BookIntro = () => {
  return (
    <BookIntroBox>
      <BookIntroTitle>📖책 소개📖</BookIntroTitle>
      <textarea name='booktintro' placeholder='책 소개를 입력해주세요' />
    </BookIntroBox>
  );
};

const BookIntroBox = styled.div`
  margin-top: 10%;
  & > textarea {
    min-width: 80%;
    min-height: 9.375rem;
    box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24)
  }
`;

const BookIntroTitle = tw.div`
  text-black
  text-xl
  font-bold
`;

export default BookIntro;
