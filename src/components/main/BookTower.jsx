import BookItem from "./BookItem";

const BookTower = ({ books }) => {
  return (
    <div className="flex flex-col-reverse min-h-[500px]">
      <BookItem title="1" height="160" />
      <BookItem title="2" height="216" />
      <BookItem title="3" height="364" />
      <BookItem title="4" height="448" />

      {books.map((book) => {
        return (
          <BookItem key={book.id} title={book.title} height={book.height} />
        );
      })}
    </div>
  );
};

export default BookTower;
