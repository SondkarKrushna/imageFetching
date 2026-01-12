import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-8">
      <form
        onSubmit={submitHandler}
        className="bg-(--c1) flex flex-col md:flex-row gap-4 md:gap-5 p-6 md:p-10 rounded-lg shadow-md"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full border-2 px-4 md:px-6 py-3 text-lg md:text-xl rounded outline-none"
          type="text"
          placeholder="Search Here..."
        />

        <button
          className="active:scale-95 cursor-pointer border-2 px-4 md:px-6 py-3 text-lg md:text-xl rounded bg-(--c4) text-(--c1)"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
