import clsx from "clsx";
import style from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import test from "@images/test.jpg"

import { useContext } from "react";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";
function Item(props) {
  const importedCart = useContext(cartContext);
  function addToCart()
  {
    let product = props.product;
    let exist = false;
    let indexe = 0;
    importedCart.cart.forEach((item, index) =>
    {
      if (exist)
      {
        return;
      }
      if (JSON.stringify(item[1]) == JSON.stringify(product))
      {
        indexe= index;
        exist = true;
      }
    });
    if (!exist)
    {
      importedCart.setCart((prev) => [...prev, [1, product]]);
    }
    else
    {
      importedCart.setCart((prev) =>
      {
        prev[indexe][0]++;
        return prev;
      });
      importedCart.setForceUpdate(prev => prev + 1);
    }
  }
  return (
    <div className={clsx("w-100 h-100 bg-black position-relative border", style["item"])}>
      <img src = {test} alt="Feature-img" className="w-100 h-100"/>
      <div className="p-2 position-absolute bottom-0 w-100">
        {/* Truyền data qua state của Link */}
        <Link to = {clsx("/shop/", props.product.name)} state={props.product.name} className={clsx("text-decoration-none")}><div className={clsx("mb-2 p-2 bg-secondary-color text-white fw-bold text-center ", style["details"])}>VIEW DETAILS</div></Link>
        <div className={clsx("px-3 py-2 bg-white w-100 border d-flex justify-content-between align-items-center", style["group"])}>
          <div>
            <div className="">{props.product.name}</div>
            <div className="fs-5 fw-bold">{'$' + props.product.price}</div>
          </div>
          <FontAwesomeIcon icon={faShoppingCart} className={clsx(style["icon"])} onClick={addToCart}/>
        </div>
      </div>
    </div>
  );
}

export default Item
