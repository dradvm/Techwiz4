import clsx from "clsx";
import style from "./ShopCatalog.module.scss";
import bigImg from "@images/big-shopping-img.jpg"
import { Container} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Item from "../../components/Item/Item";
function ShopCatalog() {


  return (
    <Container className="d-flex flex-column align-items-center my-5 py-5">
      <div className="d-flex justify-content-center"><img src={bigImg} alt="big-img" className="w-50" /></div>
      <div className="mt-5 w-100 d-flex justify-content-between"> 
        <div className="d-flex">
        <Dropdown className={clsx(style["custom-drop-down"])}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort by price: {}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className={clsx(style["custom-drop-down"], "ms-3")}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Filter: {}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className={clsx(style["custom-drop-down"])}><button disabled>19 Product</button></div>
      </div>
      <div className="row w-100 mt-4 gy-4">
        <div className="col-3" style={{ height: "400px" }}><Item></Item></div>
        <div className="col-3" style={{ height: "400px" }}><Item></Item></div>
        <div className="col-3" style={{ height: "400px" }}><Item></Item></div>
        <div className="col-3" style={{ height: "400px" }}><Item></Item></div>
        <div className="col-3" style={{ height: "400px" }}><Item></Item></div>
        <div className="col-3" style={{ height: "400px" }}><Item></Item></div>
        <div className="col-3" style={{ height: "400px" }}><Item></Item></div>
      </div>
    </Container>
  );
}

export default ShopCatalog