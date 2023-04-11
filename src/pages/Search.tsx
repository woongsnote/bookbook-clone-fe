import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../components/common/Layout";
import SearchForm from "../components/search/SearchForm";
import SearchedBook from "../components/search/SearchedBook";
import { useDispatch, useSelector } from "react-redux";
import { __getBooks } from "../redux/modules/bookSlice";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let title = "";
  /**다이렉트로 search page 접속 시 오류 방지 */
  title = location.state?.title;

  const { books: searchList } = useSelector((state: any) => state.bookSlice);

  useEffect(() => {
    try {
      // dispatch(__getBooks(title));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, title]);

  return (
    <Layout>
      <div className="mx-auto max-w-2xl border pt-28 h-full">
        <SearchForm />
        {title === undefined ? (
          <div>책을 검색해주세요</div>
        ) : (
          <>
            {searchList.map((book: any) => {
              return (
                <SearchedBook
                  key={book.isbn}
                  author={book.authors[0]}
                  title={book.title}
                  content={book.contents}
                  imageUrl={book.thumbnail}
                />
              );
            })}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Search;
