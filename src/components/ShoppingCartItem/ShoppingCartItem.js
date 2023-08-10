import clsx from "clsx";
import style from "./ShoppingCartItem.module.scss";
import thumbnail from "@images/thumbnail.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function ShoppingCartItem({children}) {
  return (
    <div className={clsx("d-flex px-4 py-2", style["shopping-cart-item"])}>
      <Link to = "/" className={clsx(style["img"], "text-decoration-none text-black")}><img src = {thumbnail} alt = "thumbnail" className="w-100 h-100"/></Link>
      <div className="ms-3 d-flex align-items-center justify-content-between w-100">
        <Link to = "/" className="d-flex flex-column align-items-start text-decoration-none text-black">
          <div>Elephant ears</div>
          <div>$35</div>
        </Link>
        <FontAwesomeIcon icon = {faTrash} style={{cursor: "pointer"}} className="p-2"/>
      </div>
    </div>
  );
}

export default ShoppingCartItem
