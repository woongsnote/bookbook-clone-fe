import BookCard from "./BookCard";

const BookList = ({ reviews }: any) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {reviews.map((review: any) => {
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

