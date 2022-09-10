import { useState } from "react";
import tw from "tailwind-styled-components";

import { TiStarFullOutline } from "react-icons/ti";
import styled from "styled-components";

const Star = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const stars = [0, 1, 2, 3, 4];

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < stars.length; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  let score = clicked.filter(Boolean).length;

  return (
    <StarBox>
      <StarTitle>⭐별점⭐</StarTitle>
      <RatingBox>
        {stars.map((el) => (
          <TiStarFullOutline
            key={el}
            onClick={() => handleStarClick(el)}
            className={clicked[el] && "black"}
            size="35"
          />
        ))}
      </RatingBox>
    </StarBox>
  );
};

const StarBox = tw.div`
  mt-10
`;

const StarTitle = tw.div`
  text-white
  text-xl
`;
const RatingBox = styled.div`
  display: flex;
  margin: 0 auto;

  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }
  :hover svg {
    color: #fadb2a;
  }
  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .black {
    color: #fadb2a;
  }
`;
export default Star;
