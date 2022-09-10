import tw from "tailwind-styled-components";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <BookListContainer>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </BookListContainer>
  );
};

export default BookList;

const BookListContainer = tw.div`
grid grid-cols-4 gap-4
`;
