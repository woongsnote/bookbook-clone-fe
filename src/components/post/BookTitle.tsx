type BookTitleProps = {
  title: string;
};
const BookTitle = ({ title }: BookTitleProps) => {
  return <h2 className="font-bold text-lg mb-2 ml-2">{title}</h2>;
};

export default BookTitle;
