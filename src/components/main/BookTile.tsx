import { useNavigate } from "react-router-dom";

const BookTile = ({
  id,
  title,
  height,
  isLeft,
}: {
  id: number;
  title: string;
  isLeft: boolean;
  height: string;
}) => {
  const bookHeight = Number(height) / 80;

  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`, { state: { title } });
  };

  return isLeft ? (
    <div
      className="flex content-center text-center items-center self-center justify-center cursor-pointer bg-rose-200"
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        maxWidth: "85%",
        minHeight: "1.2rem",
        width: "30rem",
        marginLeft: "2rem",
      }}>
      <h2 className="p-4">{title}</h2>
    </div>
  ) : (
    <div
      className="flex content-center text-center items-center self-center justify-center cursor-pointer bg-rose-200"
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        maxWidth: "85%",
        minHeight: "1.2rem",
        width: "30rem",
        marginRight: "2rem",
      }}>
      <h2 className="p-4">{title}</h2>
    </div>
  );
};

export default BookTile;
