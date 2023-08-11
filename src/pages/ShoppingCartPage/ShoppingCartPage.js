import clsx from "clsx";
import style from "./ShoppingCartPage.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import img from "@images/test.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartPageItem from "../ShoppingCartPageItem/ShoppingCartPageItem";

function ShoppingCartPage() {
  return (
    <Container className="mt-5" style={{minHeight:"600px"}}>
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
        </Stack>
      </Stack>
    </Container>
  );
}

export default ShoppingCartPage
