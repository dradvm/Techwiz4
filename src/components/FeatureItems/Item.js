
import test from "@images/test.jpg"
import style from "./FeatureItems.module.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
function Item() {
  return (
    <div className="w-100 h-100 bg-black position-relative border">
      <img src = {test} alt="Feature-img" className="w-100 h-100"/>
      <div className="p-2 position-absolute bottom-0 w-100">
        <div className="px-3 py-2 bg-white w-100 border d-flex justify-content-between align-items-center">
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
