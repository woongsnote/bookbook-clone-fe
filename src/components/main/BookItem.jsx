import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const BookItem = ({ id, title, height, isLeft }) => {
  const bookHeight = parseInt(height / 80);

  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`, { state: { title } });
  };

  return isLeft ? (
    <BookContainer
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        maxWidth: "85%",
        minHeight: "1.2rem",
        width: "30rem",
        marginLeft: "2rem",
      }}
    >
      <h2 className="p-4">{title}</h2>
    </BookContainer>
  ) : (
    <BookContainer
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        maxWidth: "85%",
        minHeight: "1.2rem",
        width: "30rem",
        marginRight: "2rem",
      }}
    >
      <h2 className="p-4">{title}</h2>
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
