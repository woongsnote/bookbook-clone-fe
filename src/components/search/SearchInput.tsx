const SearchInput = ({ title, onChangeHandler }: any) => {
  return (
    <input
      type="search"
      id="search"
      className="block my-4 p-4 pl-10 w-full text-sm rounded-full outline-none transition duration-100 bg-gray-50 border border-gray-300 focus:ring ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-100"
      placeholder="어떤 책을 읽으셨나요?"
      required
      value={title}
      onChange={onChangeHandler}
    />
  );
};

export default SearchInput;
