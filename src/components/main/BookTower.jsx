import BookItem from "./BookItem";

const BookTower = () => {
  return (
    <div className="flex flex-col-reverse">
      <BookItem title="1" height="32" />
      <BookItem title="2" height="16" />
      <BookItem title="3" height="64" />
      <BookItem title="4" height="48" />
      <BookItem title="5" height="56" />
      <BookItem title="6" height="100" />
    </div>
  );
};

export default BookTower;
