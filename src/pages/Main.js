import Header from "../components/common/Header";
import Layout from "../components/layout/Layout";
import tw from "tailwind-styled-components";
import BookList from "../components/main/BookList";
import SearchForm from "../components/main/SearchForm";

const Main = () => {
  return (
    <>
      <Header />
      <Layout>
        <HomeContainer>
          <HomeHeadContainer>
            <HomeTitle>나의 독후감</HomeTitle>
            <ShowToggleBox>
              <button> 쌓아보기</button>|<button> 리스트보기</button>
            </ShowToggleBox>
          </HomeHeadContainer>
          <SearchForm />

          <BookList />
        </HomeContainer>
      </Layout>
    </>
  );
};

export default Main;

const HomeContainer = tw.div`
mx-auto 
max-w-3xl 
border 
p-12
`;

const HomeHeadContainer = tw.div`
flex
`;

const HomeTitle = tw.h2`
w-1/2
lg:w-2/3
`;

const ShowToggleBox = tw.div`
w-1/2
lg:w-1/3
flex justify-between
`;
