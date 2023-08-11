import clsx from "clsx";
import style from "./ShoppingCartPage.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ShoppingCartPageItem from "../ShoppingCartPageItem/ShoppingCartPageItem";
import { Link } from "react-router-dom";

function ShoppingCartPage() {
  return (
    <Container className="my-5" style={{ minHeight: "600px" }}>
      <Stack>
        <Stack className="bg-white rounded border">
          <div className="border-bottom">
            <Row className="d-flex align-items-center py-3" >
              <Col xs={1} className="text-center">
                <Form.Check
                  inline
                  name="shopping-cart-checkbox-all"
                  type="checkbox"
                  id="shopping-cart-checkbox-all"
                />
              </Col>
              <Col xs={6} className="fw-bold">Product</Col>
              <Col xs={1} className="text-center fw-bold">Unit Price</Col>
              <Col xs={2} className="text-center fw-bold">Quantity</Col>
              <Col xs={1} className="text-center fw-bold">Total Price</Col>
              <Col xs={1} className="text-center fw-bold">Actions</Col>
            </Row>
          </div>
          {/* Loop r chỉnh cái name với id theo cái j cũng được mẫu shopping-cart-checkbox... */}
          <Stack>
            <ShoppingCartPageItem></ShoppingCartPageItem>
            <ShoppingCartPageItem></ShoppingCartPageItem>
            <ShoppingCartPageItem></ShoppingCartPageItem>
            <ShoppingCartPageItem></ShoppingCartPageItem>
            <ShoppingCartPageItem></ShoppingCartPageItem>
            <ShoppingCartPageItem></ShoppingCartPageItem>
          </Stack>
        </Stack>

        <div className="mt-5 border py-4 bg-white rounded">
          <Row className="d-flex align-items-center ">
            <Col xs={1} className="text-center">
                <Form.Check
                  inline
                  name="shopping-cart-checkbox-all"
                  type="checkbox"
                  id="shopping-cart-checkbox-all"
                />

            </Col>
            <Col xs={5}>
              <div className="d-flex">
                <div className={clsx("mx-3 fs-5 fw-semibold", style["hover"])} style={{ cursor: "pointer" }}>Select All ()</div>
                <div className={clsx("mx-3 fs-5 fw-semibold", style["hover"])} style={{ cursor: "pointer" }}>Delete All</div>
              </div>
            </Col>
            <Col xs={6} className="d-flex align-items-center justify-content-end">
              <div className="fs-5 fw-semibold">Total (2 items):</div>
              <div className="fs-4 ms-3 me-5 fw-bold">$500</div>
              <Link to = "/checkout" >
                <button className={clsx(style["checkout"], "me-5")}>Check Out</button>
              </Link>
            </Col>
          </Row>
        </div>
      </Stack>
    </Container>
  );
}

export default ShoppingCartPage
