import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";

const SearchForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/search", { state: { title } });
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className="mb-4">
      <div className="relative">
        <SearchIcon />
        <SearchInput title={title} onChangeHandler={onChangeHandler} />
      </div>
    </form>
  );
};

export default SearchForm;
