import BookCard from "./BookCard";

const BookList = ({ reviews }: { reviews: any[] | null }) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {reviews &&
        reviews.map((review: any) => {
          return (
            <BookCard
              key={review.id}
              title={review.title}
              id={review.id}
              imageUrl={review.imageUrl}
            />
          );
        })}
    </section>
  );
};

export default BookList;
