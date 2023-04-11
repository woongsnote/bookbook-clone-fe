import styled from "styled-components";

const BookImg = ({ imageUrl }: any) => {
  return (
    <BookImgWrap>
      <img src={imageUrl} alt="bookCover" className="object-none" />
    </BookImgWrap>
  );
};

const BookImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 40%;
  /* background-color: rgb(226, 215, 230); */
`;

export default BookImg;
