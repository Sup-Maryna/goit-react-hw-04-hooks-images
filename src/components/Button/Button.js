import css from "./Button.module.css";

function Button({ onLoadMoreClick }) {
  return (
    <button type="button" className={css.Button} onClick={onLoadMoreClick}>
      Load more
    </button>
  );
}

export default Button;
