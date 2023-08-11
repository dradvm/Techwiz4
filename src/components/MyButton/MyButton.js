import clsx from "clsx";
import style from "./MyButton.module.scss";

function MyButton({size, msg, className}) {
  return (
    <button className={clsx(style["my-button"], style[size], className)}>
      {msg}
    </button>
  );
}

export default MyButton
