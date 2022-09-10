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
        <input type='text' name='apage' />
      </APage>
    </BookIntroBox>
  );
};

const BookIntroBox = styled.div`
  margin-top: 10%;
  & input {
    min-width: 80%;
    min-height: 9.375rem;
  }
`;

const APage = tw.div``;

const BookIntroTitle = tw.div`
  text-white
  text-xl
`;
const PageTitle = tw.div`
  text-white
  text-xl
`;

export default PublisherPage;
