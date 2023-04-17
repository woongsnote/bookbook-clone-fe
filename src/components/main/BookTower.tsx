import BookTile from "./BookTile";

const BookTower = ({ reviews }: { reviews: any[] | null }) => {
  return (
    <div className="flex flex-col-reverse min-h-[500px]">
      {reviews &&
        reviews.map((review: any) => {
          return review.id % 2 === 0 ? (
            <BookTile
              key={review.id}
              id={review.id}
              title={review.title}
              height={review.page}
              isLeft={true}
            />
          ) : (
            <BookTile
              key={review.id}
              id={review.id}
              title={review.title}
              height={review.page}
              isLeft={false}
            />
          );
        })}
    </div>
  );
};

export default BookTower;
