import clsx from "clsx";
import style from "./ShoppingCartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../App";
function ShoppingCartItem(props) {
  let imgSrc = require('./../../images/plants/' + props.product[1].imgSources[0]);
  const importedCart = useContext(cartContext);
  function removeFromCart()
  {
    importedCart.setCart((prev) => prev.filter((item) => JSON.stringify(item) != JSON.stringify(props.product)));
  }
  return (
    <div className={clsx("d-flex px-4 py-2", style["shopping-cart-item"])}>
      <Link to = "/" className={clsx(style["img"], "text-decoration-none text-black")}><img src = {imgSrc} alt = "thumbnail" className="w-100 h-100"/></Link>
      <div className="ms-3 d-flex align-items-center justify-content-between w-100">
        <Link to = "/" className="d-flex flex-column align-items-start text-decoration-none text-black">
          <div>{"x" + props.product[0] + " " + props.product[1].name}</div>
          <div>{"$" + props.product[1].price * props.product[0]}</div>
        </Link>
        <FontAwesomeIcon icon = {faTrash} style={{cursor: "pointer"}} className="p-2" onClick={removeFromCart}/>
      </div>
    </div>
  );
}

export default ShoppingCartItem
