import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { getReviewDetail } from "../features/review/reviewSlice";
import Layout from "../components/common/Layout";
import PageContainer from "../components/common/PageContainer";
import DetailButton from "../components/detail/DetailButton";
import DetailButtonContainer from "../components/detail/DetailButtonContainer";
import DetailCardContainer from "../components/detail/DetailCardContainer";
import TitleBox from "../components/detail/TitleBox";
import InfoBox from "../components/detail/InfoBox";

const Detail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const reviewDetail = useAppSelector((state) => state.reviews.review);
  console.log(reviewDetail);
  useEffect(() => {
    dispatch(getReviewDetail(+id!!));
  }, [dispatch, id]);

  const goBack = () => {
    navigate("/");
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  if (reviewDetail === undefined) return null;
  return (
    <Layout>
      <PageContainer>
        <DetailCardContainer>
          <TitleBox title={reviewDetail.title} />
          <InfoBox
            imageUrl={reviewDetail.imageUrl}
            pages={reviewDetail.page}
            readStart={reviewDetail.readStart}
            readEnd={reviewDetail.readEnd}
            star={reviewDetail.star}
            comment={reviewDetail.comment}
          />
          <DetailButtonContainer>
            <DetailButton title={"취소"} onClickHandler={goBack} />
            <DetailButton title={"수정"} onClickHandler={goEdit} />
          </DetailButtonContainer>
        </DetailCardContainer>
      </PageContainer>
    </Layout>
  );
};

export default Detail;
