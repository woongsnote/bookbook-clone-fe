type BookTitleProps = {
  title: string;
};
const BookTitle = ({ title }: BookTitleProps) => {
  return <h2 className="">{title}</h2>;
};

export default BookTitle;
