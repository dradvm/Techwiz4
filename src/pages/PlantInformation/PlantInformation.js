import clsx from "clsx";
import style from "./PlantInformation.module.scss";
import { Accordion, Col, Container, Row, Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import img from "@images/test.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPenToSquare, faSeedling, faStar, faTags } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import MyButton from "../../components/MyButton/MyButton";
import { productList } from "../../functions/Filter";
import { useContext, useState } from "react";
import { cartContext } from "../../App";
function PlantInformation() {
  const location = useLocation();
  const importedCart = useContext(cartContext);
  const index = location.state;
  let product = productList[index];
  let imgSrcs = product.imgSources.reduce((res, cur) => [...res, require('./../../images/plants/' + cur)], []).filter((item, index) => index < 3);
  const [curImg, setCurImg] = useState(imgSrcs[0]);
  let ratingStars = [];
  for (let i = 0; i < Math.round(product.ratings); i++)
  {
    ratingStars.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>);
  }
  function changeImg(e)
  {
    setCurImg(imgSrcs[e.target.getAttribute('imgindex')]);
  }
  const [quantity, setQuantity] = useState(0);
  function minusQuantity()
  {
    if (quantity > 0)
    {
      setQuantity((prev) => prev - 1);
    }
  }
  function plusQuantity()
  {
    setQuantity((prev) => prev + 1);
  }
  function addToCart()
  {
    if (quantity === 0)
    {
      return;
    }
    let exist = false;
    let indexe = 0;
    importedCart.cart.forEach((item, index) =>
    {
      if (exist)
      {
        return;
      }
      if (JSON.stringify(item[1]) == JSON.stringify(product))
      {
        indexe= index;
        exist = true;
      }
    });
    if (!exist)
    {
      importedCart.setCart((prev) => [...prev, [quantity, product]]);
    }
    else
    {
      importedCart.setCart((prev) =>
      {
        prev[indexe][0] += quantity;
        return prev;
      });
      importedCart.setForceUpdate(prev => prev + 1);
    }
    setQuantity(0);
  }
  let details = Object.entries(product.plantDetails);
  return (
    <Container >
      <Stack >
        <Row className="gx-2">
          <Col xs={2}>
            <Stack>
              {imgSrcs.map((src, index) =>
                <div className={clsx("d-flex align-items-center justify-content-center mb-4")} key={index}>
                  <img className="w-75 border" src={src} alt="small-img" style={{ height: "200px" }} imgindex={index} onClick={(e) => changeImg(e)}/>
                </div>
              )}
            </Stack>
          </Col>
          <Col xs={5}>
            <div className="d-flex align-items-center justify-content-center" style={{height: "600px"}}>
              <img className="w-100 h-100 border" src={curImg} alt="small-img" />
            </div>
          </Col>
          <Col xs={5}>
            <Stack className="ms-3 my-3" gap={2}>
              <h3>{product.name}</h3>
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    {product.ratings}
                    <div className="ms-2">
                      {ratingStars}
                    </div>
                  </div>
                </div>
                <div className="mx-3">|</div>
                <div className="d-flex align-items-center">
                  <div className="">
                    {product.numberOfReviews + ' Ratings'}
                  </div>
                </div>
                <div className="mx-3">|</div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                  {product.sales + ' Sales'}
                  </div>
                </div>
              </div>
              <div className="py-3 px-4 bg-primary-color text-light mt-4 d-flex justify-content-between">
                <h3 className="mb-0">{'$' + product.price}</h3>
                <h3 className="mb-0">{product.status}</h3>
              </div>
              <div className="d-flex align-items-center my-3 mt-4">
                <InputGroup className="mx-5" style={{width: "120px"}}>
                  <Button variant="success" id="button-addon1" onClick={minusQuantity}>
                    -
                  </Button>
                  <Form.Control
                    aria-label="Quantity"
                    aria-describedby="quantity"
                    disabled={true}
                    value={quantity}
                    className="text-center"
                  />
                  <Button variant="success" id="button-addon1" onClick={plusQuantity}>
                    +
                  </Button>
                </InputGroup>
                <div onClick={addToCart}>
                  <MyButton size="lg" msg="ADD TO CART"/>
                </div>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPenToSquare} className="me-3" size="xl"></FontAwesomeIcon>
                    Description
                  </Accordion.Header>
                  <Accordion.Body>
                    {product.description}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faTags} className="me-3" size="xl"></FontAwesomeIcon>
                    Tags
                  </Accordion.Header>
                  <Accordion.Body className="d-flex align-items-center flex-wrap">
                    {product.tags.map((item, index) => <div className={clsx(style["tag-item"])} key={index}>{item}</div>)}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faSeedling} className="me-3" size="xl"></FontAwesomeIcon>
                    Categories
                  </Accordion.Header>
                  <Accordion.Body className="d-flex align-items-center flex-wrap">
                    {product.categories.map((item, index) => <div className={clsx(style["tag-item"])} key={index}>{item}</div>)}
                  </Accordion.Body>
                </Accordion.Item><Accordion.Item eventKey="3">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCircleInfo} className="me-3" size="xl"></FontAwesomeIcon>
                    Plant Details
                  </Accordion.Header>
                  <Accordion.Body className="">
                    <Stack className="ms-4">
                      {details.map((item, index) =>
                        <div className="d-flex mb-2 align-items-center" key={index}>
                          <h6 className="me-3 mb-0">{item[0] + ':'}</h6>
                          <div>{item[1]}</div>
                        </div>
                      )}
                    </Stack>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}

export default PlantInformation
