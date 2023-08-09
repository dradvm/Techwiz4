import clsx from "clsx";
import style from "./Checkout.module.scss";

function Checkout() {
  return (
    <h1 className={clsx(style["checkout"])}>
      Checkout
    </h1>
  );
}

export default Checkout
