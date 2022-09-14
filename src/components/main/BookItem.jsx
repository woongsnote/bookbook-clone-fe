import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const BookItem = ({ id, title, height, isLeft }) => {
  // console.log(height);
  const bookHeight = parseInt(height / 80);
  console.log(bookHeight);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };

  return isLeft ? (
    <BookContainer
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        minHeight: "1rem",
        width: "30rem",
        marginLeft: "2rem",
      }}
    >
      <p>{title}</p>
    </BookContainer>
  ) : (
    <BookContainer
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        minHeight: "1rem",
        width: "30rem",
        marginRight: "2rem",
      }}
    >
      <h2>{title}</h2>
    </BookContainer>
  );
};

export default BookItem;

const BookContainer = tw.div`
  flex
  content-center
  text-center
  items-center
  self-center
  justify-center
  cursor-pointer
  bg-rose-200
`;
