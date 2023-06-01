import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReviewDetail } from "../features/review/reviewSlice";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import Layout from "../components/common/Layout";
import PageContainer from "../components/common/PageContainer";
import BookImage from "../components/post/BookImage";
import Star from "../components/post/Star";
import BookIntro from "../components/post/BookIntro";
import MaxPage from "../components/post/MaxPage";
import BookTitle from "../components/post/BookTitle";
import ReadingPeriod from "../components/post/ReadingPeriod";
import { Review } from "../types/types";

const Edit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getReviewDetail(+id!!));
  }, [dispatch, id]);
  const review = useAppSelector((state) => state.reviews.review)!!;

  const [newReadStart, setNewReadStart] = useState<Date | string>(
    review.readStart
  );
  const [newReadEnd, setNewReadEnd] = useState<Date | string>(review.readEnd);
  const [newStar, setNewStar] = useState<number>(review.star);
  const [newComment, setNewComment] = useState<string>(review.comment);
  const [newPage, setNewPage] = useState(review.page);

  const editReview = () => {
    const newReview: Review = {
      title: review.title,
      readStart: newReadStart.toString(),
      readEnd: newReadEnd.toString(),
      star: newStar,
      comment: newComment,
      page: newPage,
      imageUrl: review.imageUrl,
    };
    console.log(newReview);

    // dispatch(__editReview(newReview));
    navigate(`/`);
  };

  const goBack = () => {
    navigate("/");
  };

  if (review === undefined) return null;

  return (
    <Layout>
      <PageContainer>
        <div className="flex">
          <BookImage imageUrl={review.imageUrl} />
          <div className="w-full">
            <BookTitle title={review.title} />
            <ReadingPeriod
              readStart={newReadStart}
              readEnd={newReadEnd}
              setReadStart={setNewReadStart}
              setReadEnd={setNewReadEnd}
            />
            <div className="flex flex-row w-full">
              <Star star={review.star} setStar={setNewStar} />
              <MaxPage page={review.page} setPage={setNewPage} />
            </div>
          </div>
        </div>
        <BookIntro comment={review.comment} setComment={setNewComment} />
        <button onClick={editReview}>
          수정
        </button>
        <button onClick={goBack}>
          취소
        </button>
      </PageContainer>
    </Layout>
  );
};

export default Edit;
