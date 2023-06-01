import { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";

type StarProps = {
  star: number;
  setStar: (rating: number) => void;
};
const MAX_RATING = 5;
const INITIAL_RATING = 0;

const Star = ({ star, setStar }: StarProps) => {
  
  const [hoverRating, setHoverRating] = useState(INITIAL_RATING);
  const [selectedRating, setSelectedRating] = useState(star);

  const handleMouseEnter = (rating: number) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(INITIAL_RATING);
  };

  const handleClick = (rating: number) => {
    setSelectedRating(rating);
    setStar(rating);
  };

  return (
    <div className="mt-10">
      <span className="text-black text-xl font-bold">⭐별점⭐</span>

      <div className="flex">
        {[...Array(MAX_RATING)].map((_, index) => {
          const ratingValue = index + 1;
          const isHighlighted = ratingValue <= (hoverRating || selectedRating);
          return (
            <TiStarFullOutline
              key={index}
              size={35}
              className={`cursor-pointer text-2xl ${
                isHighlighted ? "text-BYellow" : "text-gray-500"
              }`}
              onMouseEnter={() => handleMouseEnter(ratingValue)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(ratingValue)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Star;
