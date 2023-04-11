import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { __editReview } from "../redux/modules/postSlice";
import { __getReview } from "../redux/modules/postSlice";

// 각각 요소 컴포넌트
import BookImg from "../components/post/BookImg";
import Star from "../components/post/Star";
import BookIntro from "../components/post/BookIntro";
import MaxPage from "../components/post/MaxPage";
import Layout from "../components/common/Layout";

import { useLocation, useParams } from "react-router-dom";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    // dispatch(__getReview(id));
  }, []);

  // 불러오기!
  const review = useSelector((state: any) => state.postSlice.post);
  console.log("🚀 ~ Edit ~ review", review);
  const location = useLocation();

  // ANCHOR 이니셜 스테이트
  const [newReadStart, setNewReadStart] = useState(review.readStart);
  const [newReadEnd, setNewReadEnd] = useState(review.readEnd);
  const [newStar, setNewStar] = useState(review.star);
  const [newComment, setNewComment] = useState(review.comment);
  // const [newPage, setNewPage] = useInput(review.page);

  // const newReview = {
  //   title: review.title,
  //   readStart: newReadStart,
  //   readEnd: newReadEnd,
  //   star: newStar,
  //   comment: newComment,
  //   page: newPage,
  // };

  const onClick = () => {
    // dispatch(__editReview(newReview));
    navigate(`/main`);
  };

  return (
    <Layout>
      <div>
        <div>
          <div className="flex">
            <BookImg imageUrl={review.imageUrl} />

            <div>
              <span>{review.title}</span>

              <h2>독서 기간</h2>
              <div>
                <input
                  type="date"
                  id="readStart"
                  value={newReadStart}
                  onChange={(e) => {
                    setNewReadStart(e.target.value);
                  }}></input>
                <input
                  type="date"
                  id="readEnd"
                  value={newReadEnd}
                  onChange={(e) => {
                    setNewReadEnd(e.target.value);
                  }}></input>
              </div>

              <div className="flex flex-row">
                <Star star={newStar} onChange={setNewStar} />
                {/* <MaxPage page={newPage} onChange={setNewPage} /> */}
              </div>
            </div>
          </div>

          <BookIntro setComment={setNewComment} />
          <button
            className="button transition delay-100 duration-300 ease-in-out"
            type="button"
            onClick={onClick}>
            수정
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
