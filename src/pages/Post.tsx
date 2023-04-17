import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
// import { __getReviewDetail, __addReview } from "../redux/modules/postSlice";

// 각각 요소 컴포넌트
import BookImg from "../components/post/BookImg";
import Star from "../components/post/Star";
import BookIntro from "../components/post/BookIntro";
import MaxPage from "../components/post/MaxPage";
import Layout from "../components/common/Layout";

import { useLocation } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // dispatch(__getReview()); // 그냥 책제목 가져와야하는데 이것도 카카오에서 불러오나여? ㅎㅎ
  }, []);

  const location = useLocation();

  let title = "";
  title = location.state?.title;

  let imageUrl = "";
  imageUrl = location.state?.imageUrl;

  // ANCHOR 이니셜 스테이트
  // const [title, setTitle] = useState("");
  const [readStart, setReadStart] = useState(new Date());
  const [readEnd, setReadEnd] = useState(new Date());
  const [star, setStar] = useState();
  const [comment, setComment] = useState("");
  const [page, setPage] = useState(0);
  // const bookcover = useSelector((state)=> state.post)

  const onClick = () => {
    const post = { title, readStart, readEnd, star, comment, page, imageUrl };
    console.log(post);

    // dispatch(
    //   __addReview({ imageUrl, title, readStart, readEnd, star, comment, page })
    // );
    navigate("/main");
  };

  return (
    <Layout>
      <div className="w-full pt-28">
        <div className="w-c mx-auto">
          <div className="flex">
            <BookImg imageUrl={imageUrl} />

            <div>
              <span>{title}</span>

              <h2>독서 기간</h2>
              <div>
                <input
                  type="date"
                  id="readStart"
                  min="2000-01-01"
                  max="2999-12-31"
                  value={readStart.toString()}
                  onChange={(e:any) => {
                    setReadStart(e.target.value);
                  }}></input>
                <input
                  type="date"
                  id="readEnd"
                  min="1999-01-01"
                  max="2999-12-31"
                  value={readEnd.toString()}
                  onChange={(e:any) => {
                    setReadEnd(e.target.value);
                  }}></input>
              </div>

              <div className="flex flex-row">
                <Star star={star} setStar={setStar} />
                <MaxPage page={page} setPage={setPage} />
              </div>
            </div>
          </div>

          <BookIntro comment={comment} setComment={setComment} />
          <button
            className="button transition delay-100 duration-300 ease-in-out"
            type="button"
            onClick={onClick}>
            등록
          </button>
        </div>
      </div>
    </Layout>
  );
};


export default Post;
