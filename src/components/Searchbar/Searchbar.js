import { Fragment, useState } from "react";
import css from "./Searchbar.module.css";
import { BsSearch } from "react-icons/bs";

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <Fragment>
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button
            type="submit"
            className={css.SearchFormButton}
            onClick={handleClick}
          >
            <span className="button-label">
              <BsSearch />
            </span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>
    </Fragment>
  );
}

export default Searchbar;
