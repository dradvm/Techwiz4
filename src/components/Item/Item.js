import clsx from "clsx";
import style from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import test from "@images/test.jpg"
function Item() {
  return (
    
    <div className={clsx("w-100 h-100 bg-black position-relative border", style["item"])}>
      <img src = {test} alt="Feature-img" className="w-100 h-100"/>
      <div className="p-2 position-absolute bottom-0 w-100">
        <div className={clsx("mb-2 p-2 bg-secondary-color text-white fw-bold text-center", style["details"])}>VIEW DETAILS</div>
        <div className={clsx("px-3 py-2 bg-white w-100 border d-flex justify-content-between align-items-center", style["group"])}>
          <div>
            <div className="">Elephant Ears</div>
            <div className="fs-5 fw-bold">$25</div>
          </div>
          <FontAwesomeIcon icon={faShoppingCart} className={clsx(style["icon"])}/>
        </div>
      </div>
    </div>
  );
}

export default Item
