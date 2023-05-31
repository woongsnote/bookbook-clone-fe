import { useNavigate } from "react-router-dom";

type BookProps = {
  title: string;
  author: string;
  imageUrl: string;
  content: string;
};

const SearchedBook = ({ title, author, imageUrl, content }: BookProps) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/post", { state: { title, imageUrl } });
  };

  return (
    <div
      onClick={goDetail}
      className="flex flex-row rounded-lg bg-white border shadow-lg m-2 hover:cursor-pointer">
      <img src={imageUrl} alt="BookCover" className="object-none m-2" />
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-sm md:text-lg mb-1">{title}</h3>

        <span className="my-1 font-bold">{author}</span>

        <p className="">
          {content.length < 200 ? content : content.slice(0, 152) + "..."}
        </p>
      </div>
    </div>
  );
};

export default SearchedBook;
