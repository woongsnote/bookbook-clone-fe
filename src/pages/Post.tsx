import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookImage from "../components/post/BookImage";
import Star from "../components/post/Star";
import BookIntro from "../components/post/BookIntro";
import MaxPage from "../components/post/MaxPage";
import Layout from "../components/common/Layout";
import { useLocation } from "react-router-dom";
import BookTitle from "../components/post/BookTitle";
import { Review } from "../types/types";
import ReadingPeriod from "../components/post/ReadingPeriod";
import PageContainer from "../components/common/PageContainer";

const Post = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let title = "";
  title = location.state?.title;

  let imageUrl = "";
  imageUrl = location.state?.imageUrl;

  const [readStart, setReadStart] = useState<Date | string>(new Date());
  const [readEnd, setReadEnd] = useState<Date | string>(new Date());
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");
  const [page, setPage] = useState(0);

  //TODO null 있으면 이동 하지 말것!
  const addReview = () => {
    const startDate = readStart.toString();
    const endDate = readEnd.toString();
    const review: Review = {
      title,
      readStart: startDate,
      readEnd: endDate,
      star,
      comment,
      page,
      imageUrl,
    };
    console.log(review);

    // dispatch(
    //   __addReview({ imageUrl, title, readStart, readEnd, star, comment, page })
    // );
    navigate("/");
  };

  return (
    <Layout>
      <PageContainer>
        <div className="flex">
          <BookImage imageUrl={imageUrl} />
          <div className="w-full">
            <BookTitle title={title} />
            <ReadingPeriod
              readStart={readStart}
              readEnd={readEnd}
              setReadStart={setReadStart}
              setReadEnd={setReadEnd}
            />
            <div className="flex flex-row w-full">
              <Star star={star} setStar={setStar} />
              <MaxPage page={page} setPage={setPage} />
            </div>
          </div>
        </div>
        <BookIntro comment={comment} setComment={setComment} />
        <button onClick={addReview} className="w-full">
          등록
        </button>
      </PageContainer>
    </Layout>
  );
};

export default Post;
