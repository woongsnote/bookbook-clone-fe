import styled from "styled-components";
import { useSelector } from "react-redux";

const BookIntro = ({ comment, setComment }: any) => {
  const review = useSelector((state: any) => state.postSlice.post);
  return (
    <BookIntroBox>
      <span className="text-black text-xl font-bold">📖 책 소개 📖</span>
      <textarea
        name="booktintro"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder={review.comment}
      />
    </BookIntroBox>
  );
};

const BookIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  justify-content: center;
  align-self: center;
  & > textarea {
    min-width: 80%;
    min-height: 9.375rem;
    border: 0.5px solid rgba(58, 58, 58, 0.3);
    box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
  }
`;

export default BookIntro;
