import clsx from "clsx";
import style from "./MyButton.module.scss";

function MyButton() {
  return (
    <button className={clsx(style["my-button"])}>
      Shop Now
    </button>
  );
}

export default MyButton
