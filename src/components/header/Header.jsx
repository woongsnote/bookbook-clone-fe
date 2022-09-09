import tw from "tailwind-styled-components";
const Header = () => {
  return (
    <HeadContainer>
      <div>네비게이션 버튼</div>
      <HeadTitle>북적북적</HeadTitle>
      <HeadUser>췌키라웃님</HeadUser>
    </HeadContainer>
  );
};

export default Header;

const HeadContainer = tw.div`
flex
justify-space-between
text-center
`;

const HeadTitle = tw.h2`font-bold`;

const HeadUser = tw.div``;
