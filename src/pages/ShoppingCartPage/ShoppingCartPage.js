import clsx from "clsx";
import style from "./ShoppingCartPage.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ShoppingCartPageItem from "../ShoppingCartPageItem/ShoppingCartPageItem";
import { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../App";
const checkContext = createContext();
function ShoppingCartPage() {
  let importedCart = useContext(cartContext);
  const [check, setCheck] = useState(importedCart.cart.map(() => true));
  const [checkAll, setCheckAll] = useState(true);
  const navigation = useNavigate();
  function checkAllProduct()
  {
    let state = !checkAll;
    setCheckAll((prev) => !prev);
    setCheck((prev) =>
    {
      prev = prev.map((item) => state);
      return prev;
    })
  }
  let sum = importedCart.cart.reduce((total, curr, index) => 
  {
    if (check[index])
    {
      return total + curr[0] * curr[1].price;
    }
    return total;
  }, 0).toFixed(2);
  function toCheckOut()
  {
    if (sum > 0)
    {
      navigation('/checkout');
    }
  }
  return (
    <Container className="my-5" style={{ minHeight: "600px" }}>
      <Stack>
        <Stack className="bg-white rounded border">
          <div className="border-bottom">
            <Row className="d-flex align-items-lg-center py-3" >
              <Col lg={1} xs={3} className="text-center">
                <Form.Check
                  inline
                  name="shopping-cart-checkbox-all"
                  type="checkbox"
                  id="shopping-cart-checkbox-all"
                  checked={checkAll}
                  onClick={checkAllProduct}
                />
              </Col>
              <Col lg={6} xs={9} className="fw-bold">Product(s)</Col>
              <Col lg={1} xs={0} className="text-center fw-bold d-lg-block d-none">Unit Price</Col>
              <Col lg={2} xs={0} className="text-center fw-bold d-lg-block d-none">Quantity</Col>
              <Col lg={1} xs={0} className="text-center fw-bold d-lg-block d-none">Total Price</Col>
              <Col lg={1} xs={0} className="text-center fw-bold d-lg-block d-none">Actions</Col>
            </Row>
          </div>
          {/* Loop r chỉnh cái name với id theo cái j cũng được mẫu shopping-cart-checkbox... */}
          <Stack>
            <checkContext.Provider value={{check, setCheck, checkAll, setCheckAll}}>
              {importedCart.cart.map((item, index) => <ShoppingCartPageItem key={index} product={item}></ShoppingCartPageItem>)}
            </checkContext.Provider>
          </Stack>
        </Stack>

        <div className="mt-5 border py-4 bg-white rounded">
          <Row className="d-flex align-items-center ">
            <Col xs={12} className="d-flex align-items-center justify-content-end">
              <div className="fs-5 fw-semibold">Total:</div>
              <div className="fs-4 ms-3 me-5 fw-bold">{'$' + sum}</div>
              <Link onClick={toCheckOut} state={sum}>
                <button className={clsx(style["checkout"], "me-5", "px-2 py-2")}>Check Out</button>
              </Link>
            </Col>
          </Row>
        </div>
      </Stack>
    </Container>
  );
}
export {checkContext};
export default ShoppingCartPage;
