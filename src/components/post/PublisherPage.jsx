import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const PublisherPage = () => {
  return (
    <BookIntroBox>
      <div>
        <BookIntroTitle>출판사</BookIntroTitle>
        <input type='text' name='publisher' />
      </div>
      <APage>
        <PageTitle>페이지</PageTitle>
        <input type='text' name='publisher' />
      </APage>
    </BookIntroBox>
  );
};

const BookIntroBox = styled.div`
  margin-top: 10%;
  & input {
    border: 1px solid black;
    border-radius: 15px;
    background-color: red;
    box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
  }
`;

const APage = tw.div``;

const BookIntroTitle = tw.div`
  text-black
  text-xl
  font-bold
`;
const PageTitle = tw.div`
  text-black
  text-xl
  font-bold
`;

export default PublisherPage;
