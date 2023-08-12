
import { Col, Container, Row, Stack, Button, } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../App";
import { checkContext } from "../ShoppingCartPage/ShoppingCartPage";
import { useNavigate } from "react-router-dom";
import { productList } from "../../functions/Filter";
import MediaQuery from "react-responsive";
function ShoppingCartPageItem(props) {
  let importedCart = useContext(cartContext);
  let importedCheck = useContext(checkContext);
  let product = props.product;
  let index = importedCart.cart.indexOf(props.product);
  let img = require('./../../images/plants/' + product[1].imgSources[0]);
  let navigation = useNavigate();
  function checkHandle()
  {
    importedCheck.setCheck((prev) => 
    {
      prev[index] = !prev[index];
      let all = true;
      prev.forEach((item) => {
        if (!all) {
          return;
        }
        if (!item) {
          all = false;
        }
        if (all) {
          importedCheck.setCheckAll(true);
        }
        else {
          importedCheck.setCheckAll(false);
        }
      });
      return prev;
    });
    importedCart.setForceUpdate((prev) => prev + 1);
  }
  function minusQuantity() {
    if (product[0] > 1) {
      importedCart.setCart((prev) => {
        prev[index][0]--;
        return prev;
      })
      importedCart.setForceUpdate((prev) => prev + 1);
      return;
    }
    if (product[0] === 1) {
      importedCart.setCart((prev) => {
        prev = prev.filter((item) => JSON.stringify(item) != JSON.stringify(product));
        return prev;
      })
    }
  }
  function plusQuantity() {
    importedCart.setCart((prev) => {
      prev[index][0]++;
      return prev;
    })
    importedCart.setForceUpdate((prev) => prev + 1);
    return;
  }
  function removeFromCart() {
    importedCart.setCart((prev) => {
      prev = prev.filter((item) => JSON.stringify(item) != JSON.stringify(product));
      return prev;
    })
  }
  function toDetail()
  {
    let navIndex = 0;
    let found = false;
    productList.forEach((item, index) =>
    {
      if (found)
      {
        return;
      }
      if (JSON.stringify(item) === JSON.stringify(product[1]))
      {
        navIndex = index;
        found = true;
      }
    })
    navigation("/shop/" + product[1].name, {state: navIndex});
  }
  return (
    <div className="border-bottom">
      <MediaQuery minWidth={992}>
        <Row className="d-flex align-items-center py-2">
          <Col xs={1} className="text-center">
            <Form.Check
              inline
              name={product[1].name}
              type="checkbox"
              id={importedCart.cart.indexOf(product)}
              checked={importedCheck.check[index]}
              onClick={checkHandle}
            />
          </Col>
          <Col xs={6} onClick={toDetail}>
            <div className="d-flex align-items-center">
              <div className="me-5" style={{ width: "100px" }}>
                <img src={img} alt="smail-img" className="w-100" />
              </div>
              <div className="fw-semibold fs-5">
                {product[1].name}
              </div>
            </div>
          </Col>
          <Col xs={1} className="text-center">
            {'$' + product[1].price}
          </Col>
          <Col xs={2} className="text-center">
            <InputGroup className="mx-5" style={{ width: "120px" }}>
              <Button variant="success" id="button-addon1" onClick={minusQuantity}>
                -
              </Button>
              <Form.Control
                aria-label="Quantity"
                aria-describedby="quantity"
                disabled={true}
                className="text-center"
                value={product[0]}
              />
              <Button variant="success" id="button-addon1" onClick={plusQuantity}>
                +
              </Button>
            </InputGroup>
          </Col>
          <Col xs={1} className="text-center">{'$' + (product[0] * product[1].price).toFixed(2)}</Col>
          <Col xs={1} className="text-center" onClick={removeFromCart}><FontAwesomeIcon icon={faTrash} /></Col>
        </Row>
      </MediaQuery>


      <MediaQuery maxWidth={992}>
        <Row className="d-flex align-items-center py-2 px-lg-0 px-3">
          <Col xs={1} className="text-center">
            <Form.Check
              inline
              name={product[1].name}
              type="checkbox"
              id={importedCart.cart.indexOf(product)}
              checked={importedCheck.check[index]}
              onClick={checkHandle}
            />
          </Col>
          <Col xs={10}>
            <div className="d-flex justify-content-lg-between">
              <div className="" style={{ width: "50px" }}>
                <img src={img} alt="smail-img" className="w-100 h-100" />
              </div>
              <div className="d-flex align-items-center mx-3">
                <InputGroup className="" style={{ width: "100px" }}>
                  <Button variant="success" id="button-addon1" onClick={minusQuantity}>
                    -
                  </Button>
                  <Form.Control
                    aria-label="Quantity"
                    aria-describedby="quantity"
                    disabled={true}
                    className="text-center"
                    value={product[0]}
                  />
                  <Button variant="success" id="button-addon1" onClick={plusQuantity}>
                    +
                  </Button>
                </InputGroup>
                <div className="d-flex flex-column align-items-center justify-content-between mx-3">
                  <div>{'$' + product[1].price}</div>
                  <div>{'$' + (product[0] * product[1].price).toFixed(2)}</div>
                </div>
                
              </div>
            </div>
          </Col>
          {/* <Col xs={6}>
            <div className="d-flex align-items-center">
              <div className="me-5" style={{ width: "100px" }}>
                <img src={img} alt="smail-img" className="w-100" />
              </div>
              <div className="fw-semibold fs-5">
                {product[1].name}
              </div>
            </div>
          </Col>
          <Col xs={1} className="text-center">
            {'$' + product[1].price}
          </Col>
          <Col xs={2} className="text-center">
            <InputGroup className="mx-5" style={{ width: "120px" }}>
              <Button variant="success" id="button-addon1" onClick={minusQuantity}>
                -
              </Button>
              <Form.Control
                aria-label="Quantity"
                aria-describedby="quantity"
                disabled={true}
                className="text-center"
                value={product[0]}
              />
              <Button variant="success" id="button-addon1" onClick={plusQuantity}>
                +
              </Button>
            </InputGroup>
          </Col>
          <Col xs={1} className="text-center">{'$' + (product[0] * product[1].price).toFixed(2)}</Col> */}
          <Col xs={1} className="text-center me-lg-0" onClick={removeFromCart}><FontAwesomeIcon icon={faTrash} /></Col>
        </Row>
      </MediaQuery>
    </div>
  );
}

export default ShoppingCartPageItem
