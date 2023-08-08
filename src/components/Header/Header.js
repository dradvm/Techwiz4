import clsx from "clsx";
import style from "./Header.module.scss";

function Header() {
  return (
    <h1 className={clsx(style["header"])}>
      Header
    </h1>
  );
}

export default Header
