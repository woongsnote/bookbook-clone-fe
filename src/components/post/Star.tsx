import { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import styled from "styled-components";

const Star = ({ star, setStar }: any) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const stars = [0, 1, 2, 3, 4];

  const handleStarClick = (index: any) => {
    let clickStates = [...clicked];
    let trueStars = 0;

    for (let i = 0; i < stars.length; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    trueStars = clickStates.filter((star) => star === true).length;
    setStar(trueStars);
  };
  let score = clicked.filter(Boolean).length;

  return (
    <div className="mt-10">
      <span className="text-black text-xl font-bold">⭐별점⭐</span>
      <RatingBox>
        {stars.map((el) => (
          <TiStarFullOutline
            key={el}
            onClick={() => handleStarClick(el)}
            // className={clicked[el] && "black"}
            size="35"
          />
        ))}
      </RatingBox>
    </div>
  );
};

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
