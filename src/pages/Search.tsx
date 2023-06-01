import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { getBooks } from "../features/book/bookSlice";
import Layout from "../components/common/Layout";
import SearchForm from "../components/search/SearchForm";
import SearchedList from "../components/search/SearchedList";
import PageContainer from "../components/common/PageContainer";
import { NoTitle } from "../components/search/NoTitle";

const Search = () => {
  const { books } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const location = useLocation();
  let title = "";
  /**다이렉트로 search page 접속 시 오류 방지 */
  title = location.state?.title;

  let searchList = books;

  useEffect(() => {
    try {
      dispatch(getBooks(title));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, title]);

  return (
    <Layout>
      <PageContainer>
        <SearchForm />
        {title === undefined ? (
          <NoTitle />
        ) : (
          <SearchedList searchList={searchList} />
        )}
      </PageContainer>
    </Layout>
  );
};

export default Search;
