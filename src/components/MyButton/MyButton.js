import clsx from "clsx";
import style from "./MyButton.module.scss";

function MyButton({size, msg}) {
  return (
    <button className={clsx(style["my-button"], style[size])}>
      {msg}
    </button>
  );
}

export default MyButton
