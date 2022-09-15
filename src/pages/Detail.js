import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import Layout from "../components/common/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getReview } from "../redux/modules/postSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getReview(id));
  }, [dispatch, id]);

  const review = useSelector((state) => state.postSlice.post);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/main");
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <Layout>
      <DetailContainer>
        <DetailCard>
          <TitleBox>
            <BookTitle>{review.title}</BookTitle>
          </TitleBox>

          <InfoBox>
            <BookImage>
              <BookCover src={review.imageUrl} alt="BookCover" />
            </BookImage>

            <BookInfo>
              <ReadingPeriod>
                <p>독서 기간</p>

                <p>시작일: {review.readStart}</p>
                <p>종료일: {review.readEnd}</p>
              </ReadingPeriod>

              <StarBox>
                <p>별점:⭐{review.star} </p>
              </StarBox>

              <ReviewBox>
                <p>책 소개</p>
                <p>{review.comment}</p>
              </ReviewBox>

              <PageBox>
                <p>총 페이지: {review.page} 페이지</p>
              </PageBox>
            </BookInfo>
          </InfoBox>
          <DetailButtons>
            <DetailButton type="button" onClick={goBack}>
              취소
            </DetailButton>
            <DetailButton type="button" onClick={goEdit}>
              수정
            </DetailButton>
          </DetailButtons>
        </DetailCard>
      </DetailContainer>
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

const DetailCard = tw.div`
mt-8 shadow-xl p-8 rounded-xl
`;

const TitleBox = tw.div`
flex items-center justify-center my-2
`;

const BookTitle = tw.h2`
font-bold text-xl my-4
`;

const InfoBox = tw.div`
flex
w-full
flex-col
items-center
sm:flex-row
  `;

const BookImage = tw.div`
w-2/5
h-1/2
flex
items-center
justify-center
`;

const BookCover = tw.img`
max-w-xs h-auto
self-center
`;

const BookInfo = tw.div`
    w-3/5
    h-1/2
`;

const ReadingPeriod = tw.div`
flex
flex-col
gap-4
my-4
rounded
border-b
`;

const StarBox = tw.div`
my-2
`;

const ReviewBox = tw.div`
my-4
`;

const PageBox = tw.div`
my-2
`;

const DetailButtons = tw.div`
flex
items-center
justify-center
m-4
mt-10
`;

const DetailButton = tw.button`
mx-4
hover:bg-Bblue
hover:text-white
px-4
py-2
w-24
rounded-full
`;

export default Detail;
