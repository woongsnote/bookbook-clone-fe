import { useNavigate } from "react-router-dom";

type BookTileProps = {
  id: number;
  title: string;
  page: number;
};

const BookTile = ({ id, title, page }: BookTileProps) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`, { state: { title } });
  };

  const bookHeight = Number(page) / 80;
  const isLeft = id % 2 === 0;

  return isLeft ? (
    <div
      className="flex content-center text-center items-center self-center justify-center cursor-pointer bg-rose-200 p-1"
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        maxWidth: "85%",
        minHeight: "1.2rem",
        width: "30rem",
        marginLeft: "2rem",
      }}>
      <h2>{title}</h2>
    </div>
  ) : (
    <div
      className="flex content-center text-center items-center self-center justify-center cursor-pointer bg-rose-200 p-1"
      onClick={goDetail}
      style={{
        height: `${bookHeight}rem`,
        border: "1px solid gray",
        maxWidth: "85%",
        minHeight: "1.2rem",
        width: "30rem",
        marginRight: "2rem",
      }}>
      <h2>{title}</h2>
    </div>
  );
};

export default BookTile;
