import tw from "tailwind-styled-components";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <TwLayout>
      <Header />
      {children}
    </TwLayout>
  );
};

const TwLayout = tw.div`
w-full
h-full
`;

export default Layout;
