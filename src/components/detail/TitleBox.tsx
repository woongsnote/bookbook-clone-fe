import BookTitle from "../post/BookTitle";

const TitleBox = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center my-2">
      <BookTitle title={title}/>
    </div>
  );
};

export default TitleBox;
