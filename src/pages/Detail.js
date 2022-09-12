import tw from "tailwind-styled-components";

import Header from "../components/common/Header";
import harry from "../image/harry.jpg";

const Detail = ({ title, readPeriod, rating, intro }) => {
  let testTitle = "해리포터와 마법사의 돌";

  let readingPeriod = "2022-09-08 ~ 2022-09-12";

  let publisher = "test";

  let maxPages = 240;

  return (
    <DetailWrap>
      <Header />

      <DetailCon>
        <InfoBox className="flex mt-16">
          <BookImage>
            <img src={harry} alt="bookimg" />
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
      </DetailCon>
    </DetailWrap>
  );
};

const DetailWrap = tw.div`
  w-full
  h-auto
  `;

const DetailCon = tw.div`
  w-c
  
  mx-auto
  `;

const InfoBox = tw.div`
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

export default Detail;
