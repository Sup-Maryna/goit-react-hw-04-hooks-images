import { useEffect } from "react";
import css from "./Modal.module.css";

function Modal({ onClose, image }) {
  const esc = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  });
  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
export default Modal;
