import clsx from "clsx";
import style from "./GlobalStyles.module.scss";

function GlobalStyles({children}) {
  return (
    <div className={clsx(style["global-styles"])}>
      {children}
    </div>
  );
}

export default GlobalStyles
