
import { Col, Container, Row, Stack, Button, } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import img from "@images/test.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function ShoppingCartPageItem() {
  return (
    <div className="border-bottom">
      <Row className="d-flex align-items-center py-2">
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
            <div className="me-5" style={{ width: "100px" }}>
              <img src={img} alt="smail-img" className="w-100" />
            </div>
            <div className="fw-semibold fs-5">
              Mot Cai ten cung goi la dai
            </div>
          </div>
        </Col>
        <Col xs={1} className="text-center">
          $45
        </Col>
        <Col xs={2} className="text-center">
          <InputGroup className="mx-5" style={{ width: "120px" }}>
            <Button variant="success" id="button-addon1">
              -
            </Button>
            <Form.Control
              aria-label="Quantity"
              aria-describedby="quantity"
              disabled={true}
              className="text-center"
            />
            <Button variant="success" id="button-addon1">
              +
            </Button>
          </InputGroup>
        </Col>
        <Col xs={1} className="text-center">$200</Col>
        <Col xs={1} className="text-center"><FontAwesomeIcon icon={faTrash} /></Col>
      </Row>
    </div>
  );
}

export default ShoppingCartPageItem
