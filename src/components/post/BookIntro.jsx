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
  }
`;

const BookIntroTitle = tw.div`
  text-white
  text-xl
`;

export default BookIntro;
