import clsx from "clsx";
import style from "./ShopCatalog.module.scss";
import bigImg from "@images/big-shopping-img.jpg"
import { Container} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Item from "../../components/Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import productFilter from './../../functions/Filter.js';
import { categoryList } from "./../../functions/Filter.js";
import { useState } from "react";
function ShopCatalog() {
  const [filterArr, setFilterArr] = useState([]);
  const [sort, setSort] = useState(0);
  let block = false;
  function addToFilter(e)
  {
    let cat = categoryList[e.target.getAttribute('catindex')];
    if (filterArr.includes(cat))
    {
      return;
    }
    setFilterArr((prev) => [...prev, cat]);
  }
  function removeFromFilter(e)
  {
    if (block)
    {
      return;
    }
    setFilterArr((prev) => prev.filter((item, index) => index != e.target.getAttribute('catindex')));
    block = true;
  }
  var productArr;
  if (sort === 0)
  {
    productArr = productFilter(filterArr);
  }
  else if (sort === 1)
  {
    productArr = productFilter(filterArr).sort((a, b) => a.price - b.price);
  }
  else if (sort === -1)
  {
    productArr = productFilter(filterArr).sort((a, b) => b.price - a.price);
  }
  return (
    <Container className="d-flex flex-column align-items-center my-5 py-5">
      <div className="d-flex justify-content-center"><img src={bigImg} alt="big-img" className="w-50" /></div>
      <div className="mt-5 w-100 d-flex justify-content-between"> 
        <div className="d-flex">
        <Dropdown className={clsx(style["custom-drop-down"])}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort by price
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => {setSort(1)}}>Ascending</Dropdown.Item>
            <Dropdown.Item onClick={() => {setSort(-1)}}>Descending</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="ms-3 d-flex align-items-center">
          <Dropdown className={clsx(style["custom-drop-down"])}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categoryList.map((item, index) => 
                <Dropdown.Item key={index} catindex={index} onClick={(e) => addToFilter(e)}>{item}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <div className={clsx(style["filter"], "ms-3", "d-flex","align-items-center")}>
            {filterArr.map((item, index) =>
              <div className={clsx(style["filter__item"])} key={index} catindex={index} onClick={(e) => removeFromFilter(e)}>
                <span catindex={index} onClick={(e) => removeFromFilter(e)}>{item}</span> 
                <FontAwesomeIcon icon={faDeleteLeft} className={clsx(style["icon"])} catindex={index} onClick={(e) => removeFromFilter(e)}/>
              </div>
            )}
          </div>
        </div>
        </div>
        <div className={clsx(style["custom-drop-down"])}><button disabled>{productArr.length + " Product(s)"}</button></div>
      </div>
      <div className="row w-100 mt-4 gy-4">
        {productArr.map((item, index) =>
          <div className="col-3" style={{ height: "400px" }} key={index}><Item product={item}></Item></div>
        )}
      </div>
    </Container>
  );
}

export default ShopCatalog
