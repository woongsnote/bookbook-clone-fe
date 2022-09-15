import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { __editReview } from "../redux/modules/postSlice";
import { __getReview } from "../redux/modules/postSlice";

// 각각 요소 컴포넌트
import BookImg from "../components/post/BookImg";
import Star from "../components/post/Star";
import BookIntro from "../components/post/BookIntro";
import PublisherPage from "../components/post/MaxPage";
import Layout from "../components/common/Layout";

import { useLocation, useParams } from "react-router-dom";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(__getReview(id));
  }, []);

  // 불러오기!
  const review = useSelector((state) => state.postSlice.review);
  console.log("🚀 ~ Edit ~ review", review);
  const location = useLocation();

  // ANCHOR 이니셜 스테이트
  const [newReadStart, setNewReadStart] = useState(review.readStart);
  const [newReadEnd, setNewReadEnd] = useState(review.readEnd);
  const [newStar, setNewStar] = useState(review.star);
  const [newComment, setNewComment] = useState(review.comment);
  const [newPage, setNewPage] = useInput(review.page);

  const newReview = {
    title: review.title,
    readStart: newReadStart,
    readEnd: newReadEnd,
    star: newStar,
    comment: newComment,
    page: newPage,
  };

  const onClick = () => {
    dispatch(__editReview(newReview));
    navigate(`/main`);
  };

  return (
    <Layout>
      <PostWrap>
        <PostCon>
          <InfoBox className="flex">
            <BookImg imageUrl={review.imageUrl} />

            <BookInfo>
              <PostTitle>{review.title}</PostTitle>

              <h2>독서 기간</h2>
              <DateInput>
                <input
                  type="date"
                  id="readStart"
                  value={newReadStart}
                  onChange={(e) => {
                    setNewReadStart(e.target.value);
                  }}
                ></input>
                <input
                  type="date"
                  id="readEnd"
                  value={newReadEnd}
                  onChange={(e) => {
                    setNewReadEnd(e.target.value);
                  }}
                ></input>
              </DateInput>

              <div className="flex flex-row">
                <Star star={newStar} onChange={setNewStar} />
                <PublisherPage page={newPage} onChange={setNewPage} />
              </div>
            </BookInfo>
          </InfoBox>

          <BookIntro setComment={setNewComment} />
          <Button
            className="button transition delay-100 duration-300 ease-in-out"
            type="button"
            onClick={onClick}
          >
            수정
          </Button>
        </PostCon>
      </PostWrap>
    </Layout>
  );
};

const PostWrap = tw.div`
  w-full
  pt-28
`;

const PostCon = tw.div`
  w-c
  mx-auto
  
  `;

const PostTitle = tw.h2`
  text-Bblack
  text-2xl
  font-bold
  w-auto
  mb-3
 text-ellipsis
  `;

const DateInput = tw.div`
  border-1
`;

const InfoBox = tw.div`
  w-full
  `;

const BookInfo = tw.div`
    w-3/5
    h-1/2
    px-10
`;

const Button = tw.button`
  w-full
  h-10
  mt-20
  bg-Bblue
  text-Bwhite
  rounded-full
  hover:bg-BDeepblue
`;

export default Edit;
