import { Book } from "../../types/types";
import EmptyList from "../common/EmptyList";
import SearchedBook from "./SearchedBook";

type SearchedListProps = {
  searchList: Book[];
};
const SearchedList = ({ searchList }: SearchedListProps) => {
  if (searchList === null) return <EmptyList />;

  return (
    <section>
      {searchList.map((book: Book) => {
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
    </section>
  );
};

export default SearchedList;
