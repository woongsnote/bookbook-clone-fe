import { useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getReview } from "../redux/modules/postSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // dispatch(__getReview(id));
  }, [dispatch, id]);

  const review = useSelector((state:any) => state.postSlice.post);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/main");
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <Layout>
      <div>
        <div>
          <div>
            <span>{review.title}</span>
          </div>

          <div>
            <div>
              <img src={review.imageUrl} alt="BookCover" />
            </div>

            <div>
              <div>
                <p>독서 기간</p>

                <p>시작일: {review.readStart}</p>
                <p>종료일: {review.readEnd}</p>
              </div>

              <div>
                <p>별점:⭐{review.star} </p>
              </div>

              <div>
                <p>책 소개</p>
                <p>{review.comment}</p>
              </div>

              <div>
                <p>총 페이지: {review.page} 페이지</p>
              </div>
            </div>
          </div>

          <div>
            <button type="button" onClick={goBack}>
              취소
            </button>
            <button type="button" onClick={goEdit}>
              수정
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Detail;
