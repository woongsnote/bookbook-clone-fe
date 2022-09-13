import tw from "tailwind-styled-components";

import Layout from "../components/common/Layout";

import harry from "../image/harry.jpg";

const Detail = ({ title, readPeriod, rating, intro }) => {
  //더미 데이터
  let testTitle = "해리포터와 마법사의 돌";
  let readingPeriod = "2022-09-08 ~ 2022-09-12";
  let publisher = "test";
  let maxPages = 240;

  return (
    <Layout>
      <DetailContainer>
        <InfoBox>
          <BookImage>
            <img src={harry} alt="BookCover" />
          </BookImage>

          <BookInfo>
            <h2>{testTitle}</h2>
            <p>독서 기간</p>
            <p>{readingPeriod}</p>
            <p>별점 4</p>
            <p>책 소개.. 블라블라브라</p>
            <p>출판사: {publisher}</p>
            <p>총 분량: {maxPages} 페이지</p>
          </BookInfo>
        </InfoBox>
      </DetailContainer>
      <DetailButtons>
        <CancelButton>취소</CancelButton>
        <ModifyButton>수정</ModifyButton>
      </DetailButtons>
    </Layout>
  );
};

const DetailContainer = tw.div`
mx-auto 
max-w-2xl 
border 
pt-28
h-full
  `;

const InfoBox = tw.div`
flex
w-full
  `;

const BookImage = tw.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 45%;
  background-color: rgb(226, 215, 230);`;

const BookInfo = tw.div`
    w-3/5
    h-1/2
    px-10
`;

const DetailButtons = tw.div`
flex
items-center
justify-center
m-4
`;

const CancelButton = tw.button`
mx-4
`;

const ModifyButton = tw.button`
mx-4
`;

export default Detail;
