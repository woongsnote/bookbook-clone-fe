import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

import Layout from "../components/common/Layout";
import SearchBook from "../components/search/SearchBook";

const Search = () => {
  const location = useLocation();
  const title = location.state.title;
  const [searchList, setSearchList] = useState([]);
  console.log(title);

  useEffect(() => {
    //검색 함수 호출해서 받아온 제목으로 검색
    //검색된 결과 저장
    // getBooks()
  }, []);

  // const getBooks = async () => {

  //   const { data } = await bookSearch();

  //   setSearchList()
  // };

  //검색한 결과 배열에 저장해서 배열을 보여주기

  return (
    <Layout>
      <SearchContainer>
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        <SearchBook title={"How Innovation Works"} author={"MATT RIDLEY"} />
        {searchList.map((book) => {
          return (
            <SearchBook key={book.id} title={book.title} height={book.height} />
          );
        })}
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
