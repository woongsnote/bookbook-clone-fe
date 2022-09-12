import tw from "tailwind-styled-components";

import Layout from "../components/common/Layout";

const Search = () => {
  return (
    <Layout>
      <SearchContainer>
        <div>검색한 책 제목:</div>
        <div>검색 결과</div>
      </SearchContainer>
    </Layout>
  );
};

const SearchContainer = tw.div`
mx-auto 
max-w-2xl 
border 
pt-28
h-full
`;

export default Search;
