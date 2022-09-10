import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const Publisher = () => {
  return (
    <BookIntroBox>
      <Publisher>
        <BookIntroTitle>출판사</BookIntroTitle>
        <input type='text' name='publisher' />
      </Publisher>
      <Page>
        <PageTitle>페이지</PageTitle>
        <input type='text' name='publisher' />
      </Page>
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

const Page = tw.div``;

const BookIntroTitle = tw.div`
  text-white
  text-xl
`;
const PageTitle = tw.div`
  text-white
  text-xl
`;

export default Publisher;
