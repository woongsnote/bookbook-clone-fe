import tw from "tailwind-styled-components";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MaxPage = ({ page, setPage }) => {
  const review = useSelector((state) => state.postSlice.post);

  const onChangePage = (e) => {
    console.log("🚀 ~ onChangePage ~ setPage", page);
    setPage(e.target.value);
  };

  return (
    <BookIntroBox>
      <PageTitle> 📖페이지</PageTitle>
      <input
        type="number"
        name="publisher"
        onChange={onChangePage}
        placeholder={review.page}
      />
    </BookIntroBox>
  );
};

const BookIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  margin-top: 10%;
  & input {
    width: 150px;
    border: 0.5px solid rgba(58, 58, 58, 0.3);
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
  }
`;

const PageTitle = tw.div`
  text-black
  text-xl
  font-bold
`;

export default MaxPage;
