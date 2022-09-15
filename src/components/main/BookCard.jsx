import tw from "tailwind-styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const BookCard = ({ id, title, imageUrl, rating }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <CardContainer onClick={goDetail}>
      <CardImage className="w-full" src={imageUrl} alt="책 표지" />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {/* rating 만큼 별 표시 */}
        <CardRating>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </CardRating>
      </CardContent>
    </CardContainer>
    // FaRegStar
  );
};

export default BookCard;

const CardContainer = tw.div`
    max-w-sm
    rounded 
    overflow-hidden
    shadow-lg
    cursor-pointer
`;

const CardImage = tw.img`
    w-full
`;

const CardContent = tw.div`
    px-6 
    py-4
`;

const CardTitle = tw.div`
    font-bold text-xl mb-2
`;

const CardRating = tw.div`
  flex
   items-center
    justify-between
`;
