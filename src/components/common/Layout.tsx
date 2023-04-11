import Header from "./Header";
import Wrapper from "./Wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
