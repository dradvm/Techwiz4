import clsx from "clsx";
import style from "./ShoppingCartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../App";
import { Row } from "react-bootstrap";
import { productList } from "../../functions/Filter";
function ShoppingCartItem(props) {
  let imgSrc = require('./../../images/plants/' + props.product[1].imgSources[0]);
  let navIndex = 0;
  let found = false;
  productList.forEach((item, index) =>
  {
    if (found)
    {
      return;
    }
    if (JSON.stringify(item) === JSON.stringify(props.product[1]))
    {
      navIndex = index;
      found = true;
    }
  });
  const importedCart = useContext(cartContext);
  function removeFromCart()
  {
    importedCart.setCart((prev) => prev.filter((item) => JSON.stringify(item) != JSON.stringify(props.product)));
  }
  return (
    <div className={clsx("d-flex px-4 py-2 align-items-center", style["shopping-cart-item"])}>
      <Link to = {"/shop/" + props.product[1].name} state={navIndex} className={clsx(style["img"], "text-decoration-none text-black")}><img src = {imgSrc} alt = "thumbnail" className="w-100 h-100"/></Link>
      <div className="ms-3 d-flex align-items-center justify-content-between w-100">
        <Link to = {"/shop/" + props.product[1].name} state={navIndex} className="d-flex flex-column text-decoration-none text-black">
        <div className="text-start lh-sm">{props.product[1].name}</div>
          <div className="d-flex align-items-center mt-2">
            <div className="lh-sm">{"$" + (props.product[1].price * props.product[0]).toFixed(2)}</div>
            <div className="lh-sm ms-2">{"x" + props.product[0]}</div>
          </div>
        </Link>
        <FontAwesomeIcon icon = {faTrash} style={{cursor: "pointer"}} className="p-2" onClick={removeFromCart}/>
      </div>
    </div>
  );
}

export default ShoppingCartItem
