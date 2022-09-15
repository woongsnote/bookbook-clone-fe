import tw from "tailwind-styled-components";
import BookItem from "./BookItem";

const BookTower = ({ reviews }) => {
  return (
    <BookTowerContainer>
      {reviews.map((review) => {
        return review.id % 2 === 0 ? (
          <BookItem
            key={review.id}
            id={review.id}
            title={review.title}
            height={review.bookPage}
            isLeft={true}
          />
        ) : (
          <BookItem
            key={review.id}
            id={review.id}
            title={review.title}
            height={review.bookPage}
            isLeft={false}
          />
        );
      })}
    </BookTowerContainer>
  );
};

const BookTowerContainer = tw.div`
  flex flex-col-reverse min-h-[500px]
`;

export default BookTower;
