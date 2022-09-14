import tw from "tailwind-styled-components";
import BookCard from "./BookCard";

const BookList = ({ reviews }) => {
  return (
    <BookListContainer>
      {reviews.map((review) => {
        return <BookCard key={review.id} title={review.title} id={review.id} />;
      })}
    </BookListContainer>
  );
};

export default BookList;

const BookListContainer = tw.div`
grid grid-cols-4 gap-4
`;
