import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type CardProps = {
  id: number;
  title: string;
  imageUrl: string;
  rating?: number;
};

const BookCard = ({ id, title, imageUrl, rating }: CardProps) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div
      onClick={goDetail}
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
      <img className="w-full" src={imageUrl} alt="책 표지" />
      <span className="px-6 py-3 font-bold text-md">{title}</span>
      <span className="px-6 py-3 font-bold text-md">
        <FaStar /> {rating}
      </span>
    </div>
  );
};

export default BookCard;
