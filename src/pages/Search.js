import tw from "tailwind-styled-components";

import Layout from "../components/common/Layout";
import SearchBook from "../components/search/SearchBook";

const Search = () => {
  //검색한 결과 배열에 저장해서 배열을 보여주기

  return (
    <Layout>
      <SearchContainer>
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
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
