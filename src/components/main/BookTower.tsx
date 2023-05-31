import { Review, Reviews } from "../../types/types";
import EmptyList from "../common/EmptyList";
import BookTile from "./BookTile";

const BookTower = ({ reviews }: Reviews) => {
  if (reviews === null) return <EmptyList />;
  return (
    <div className="flex flex-col-reverse min-h-[500px]">
      {reviews.map((review: Review) => {
        return (
          <BookTile
            key={review.id}
            id={review.id!!}
            title={review.title}
            page={review.page}
          />
        );
      })}
    </div>
  );
};

export default BookTower;
