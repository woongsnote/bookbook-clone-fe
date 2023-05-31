import { Review, Reviews } from "../../types/types";
import EmptyList from "../common/EmptyList";
import BookCard from "./BookCard";

const BookList = ({ reviews }: Reviews) => {
  if (reviews === null) return <EmptyList />;
  return (
    <div className="grid grid-cols-4 gap-5 place-items-center">
      {reviews.map((review: Review) => {
        return (
          <BookCard
            key={review.id}
            id={review.id!!}
            title={review.title}
            imageUrl={review.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default BookList;
