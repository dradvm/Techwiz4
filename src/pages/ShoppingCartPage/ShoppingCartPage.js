import clsx from "clsx";
import style from "./ShoppingCartPage.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import img from "@images/test.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ShoppingCartPage() {
  return (
    <Container className="mt-5">
      <Stack className="bg-white rounded border">
        <div className="border-bottom">
          <Row className="d-flex align-items-center py-3">
            <Col xs={1} className="text-center">
              <Form.Check
                  inline
                  name="shopping-cart-checkbox-all"
                  type="checkbox"
                  id="shopping-cart-checkbox-all"
                />
            </Col>
            <Col xs={6}>Product</Col>
            <Col xs={1} className="text-center">Unit Price</Col>
            <Col xs={2} className="text-center">Quantity</Col>
            <Col xs={1} className="text-center">Total Price</Col>
            <Col xs={1} className="text-center">Actions</Col>
          </Row>
        </div>
        {/* Loop r chỉnh cái name với id theo cái j cũng được mẫu shopping-cart-checkbox... */}
        <Stack>
          <Row className="d-flex align-items-center py-3">
            <Col xs={1} className="text-center">
              <Form.Check
                  inline
                  name="shopping-cart-checkbox-1"
                  type="checkbox"
                  id="shopping-cart-checkbox-1"
                />
            </Col>
            <Col xs={6}>
              <div className="d-flex align-items-center">
                <div className="me-5" style={{width: "100px"}}>
                 <img src={img} alt="smail-img" className="w-100" />
                </div>
                <div className="fw-bold fs-5">
                  Mot Cai ten cung goi la dai
                </div>
              </div>
            </Col>
            <Col xs={1} className="text-center">
              $45
            </Col>
            <Col xs={2} className="text-center">4</Col>
            <Col xs={1} className="text-center">$200</Col>
            <Col xs={1} className="text-center"><FontAwesomeIcon icon={faTrash}/></Col>
          </Row>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ShoppingCartPage
