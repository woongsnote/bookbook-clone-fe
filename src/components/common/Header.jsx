import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <>
      <HeaderBox>
        this is header
        {/* <HedaerMenu /> */}
      </HeaderBox>
    </>
  );
};

const HeaderBox = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
  bg-indigo-600
  
`;

export default Header;
