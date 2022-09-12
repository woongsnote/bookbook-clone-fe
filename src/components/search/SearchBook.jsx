import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const SearchBook = ({ title, author }) => {
  return (
    <>
      <Link to="/detail">
        <BookContainer>
          <BookImage
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1512&q=80"
            alt="BookCover"
          />
          <BookContent>
            <BookTitle>{title}</BookTitle>
            <BookAuthor>{author}</BookAuthor>
            <BookIntro>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </BookIntro>
          </BookContent>
        </BookContainer>
      </Link>
    </>
  );
};

const BookContainer = tw.div`
flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100  my-2
`;

const BookImage = tw.img`
    object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg
`;

const BookContent = tw.div`
flex flex-col justify-between p-4 leading-normal
    `;

const BookTitle = tw.h5`
mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white
`;

const BookAuthor = tw.h5`
mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white
`;

const BookIntro = tw.p`
mb-3 font-normal text-gray-700 dark:text-gray-400
`;

export default SearchBook;
