import tw from "tailwind-styled-components/";
const BookItem = ({ title, height }) => {
  const bookHeight = `${height / 16}`;
  // console.log(bookHeight);

  return <BookContainer className="border">BookTitle{title}</BookContainer>;
};

export default BookItem;

const BookContainer = tw.div`
  border
`;
