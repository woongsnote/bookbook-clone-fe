import tw from "tailwind-styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const BookCard = () => {
  const navigate = useNavigate();
  const goDetail = () => {
    // navigate("/detail");
    navigate("/post");
  };
  return (
    <CardContainer onClick={goDetail}>
      <CardImage
        className="w-full"
        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80"
        alt="Sunset in the mountains"
      />
      <CardContent>
        <CardTitle>The Coldest Sunset</CardTitle>
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
