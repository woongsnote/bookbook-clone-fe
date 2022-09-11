import tw from "tailwind-styled-components/";
const BookItem = ({ title, height }) => {
  const bookHeight = `${height / 32}`;
  // console.log(bookHeight);

  return (
    <BookContainer
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        minHeight: "2rem",
        width: "20rem",
      }}
    >
      <p>높이 테스트 {title}</p>
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
`;
