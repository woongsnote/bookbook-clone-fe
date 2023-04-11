import { useNavigate } from "react-router-dom";

const SearchedBook = ({ title, author, imageUrl, content }: any) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/post", { state: { title, imageUrl } });
  };

  return (
    <div onClick={goDetail} className="">
      <img src={imageUrl} alt="BookCover" className="" />
      <div>
        <span>{title}</span>

        <span>{author}</span>

        <p>
          {content.length < 100 ? content : content.slice(0, 80) + "..."}
        </p>
      </div>
    </div>
  );
};

export default SearchedBook;
