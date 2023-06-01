import { useNavigate } from "react-router-dom";

type BookCardProps = {
  id: number;
  title: string;
  imageUrl: string;
};

const BookCard = ({ id, title, imageUrl }: BookCardProps) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div
      onClick={goDetail}
      className="rounded overflow-hidden shadow-lg cursor-pointer w-[120px] flex flex-col">
      <img className="" src={imageUrl} alt="책 표지" />
      <span className="w-full text-center">
        {title.length < 8 ? title : title.slice(0, 8) + "..."}
      </span>
    </div>
  );
};

export default BookCard;
