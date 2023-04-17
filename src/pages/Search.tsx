import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../components/common/Layout";
import SearchForm from "../components/search/SearchForm";
import SearchedBook from "../components/search/SearchedBook";

import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { getBooks } from "../features/book/bookSlice";

const Search = () => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const location = useLocation();
  let title = "";
  /**다이렉트로 search page 접속 시 오류 방지 */
  // title = location.state?.title;
 

  useEffect(() => {
    try {
      dispatch(getBooks(title));
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
            {/* {searchList.map((book: any) => {
              return (
                <SearchedBook
                  key={book.isbn}
                  author={book.authors[0]}
                  title={book.title}
                  content={book.contents}
                  imageUrl={book.thumbnail}
                />
              );
            })} */}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Search;
