const BookItem = ({ title, height }) => {
  const bookHeight = `${height / 16}`;
  console.log(bookHeight);

  return (
    <div className="border String.raw(h-[`${bookHeight}rem`])">
      BookTitle{title}
    </div>
  );
};

export default BookItem;
