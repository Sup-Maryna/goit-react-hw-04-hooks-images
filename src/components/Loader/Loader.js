import React from "react";
import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <Oval
      className={css.loader}
      heigth={50}
      width={50}
      color="#00BFFF"
      arialLabel="loading"
      wrapperClass="loader"
    />
  );
}
export default Loader;
