import tw from "tailwind-styled-components";
const Layout = ({ children }) => {
  return <TwLayout>{children}</TwLayout>;
};

const TwLayout = tw.div`
bg-white
py-6
sm:py-8
lg:py-12`;

export default Layout;
