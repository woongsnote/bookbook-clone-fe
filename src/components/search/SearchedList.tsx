import SearchedBook from "./SearchedBook";

type SearchedListProps = {
  searchList: any[];
};
const SearchedList = ({ searchList }: SearchedListProps) => {
  return (
    <>
      {searchList &&
        searchList.map((book: any) => {
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
  );
};

export default SearchedList;
