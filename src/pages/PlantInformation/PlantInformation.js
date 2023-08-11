import clsx from "clsx";
import style from "./PlantInformation.module.scss";
import { Accordion, Col, Container, Row, Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import img from "@images/test.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faSeedling, faStar, faTags } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import MyButton from "../../components/MyButton/MyButton";
function PlantInformation() {
  const location = useLocation();
  const data = location.state
  // Lấy ra data từ Item
  return (
    <Container>
      <Stack>
        <span> {data}</span>
        <Row className="gx-2">
          <Col xs={2}>
            <Stack>
              <div className={clsx("d-flex align-items-center justify-content-center mb-4")}>
                <img className="w-75 border" src={img} alt="small-img" style={{ height: "200px" }} />
              </div>
              <div className={clsx("d-flex align-items-center justify-content-center mb-4")}>
                <img className="w-75 border" src={img} alt="small-img" style={{ height: "200px" }} />
              </div>
              <div className={clsx("d-flex align-items-center justify-content-center mb-4")}>
                <img className="w-75 border" src={img} alt="small-img" style={{ height: "200px" }} />
              </div>
            </Stack>
          </Col>
          <Col xs={5}>
            <div className="d-flex align-items-center justify-content-center">
              <img className="w-100 border" src={img} alt="small-img" />
            </div>
          </Col>
          <Col xs={5}>
            <Stack className="ms-3 my-3" gap={2}>
              <h3>Mot Cai Ten That La Dai Thon</h3>
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    5.0
                    <div className="ms-2">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
                <div className="mx-3">|</div>
                <div className="d-flex align-items-center">
                  <div className="">
                    19 Ratings
                  </div>
                </div>
                <div className="mx-3">|</div>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    1820 Sales
                  </div>
                </div>
              </div>
              <div className="py-3 px-4 bg-primary-color text-light mt-4 d-flex justify-content-between">
                <h3 className="mb-0">$36</h3>
                <h3 className="mb-0">In Stock</h3>
              </div>
              <div className="d-flex align-items-center my-3 mt-4">
                <InputGroup className="mx-4" style={{width: "120px"}}>
                  <Button variant="outline-secondary" id="button-addon1">
                    -
                  </Button>
                  <Form.Control
                    aria-label="Quantity"
                    aria-describedby="quantity"
                    disabled={true}
                    value={0}
                    className="text-center"
                  />
                  <Button variant="outline-secondary" id="button-addon1">
                    +
                  </Button>
                </InputGroup>
                <div>
                  <MyButton size="lg" msg="ADD TO CART"/>
                </div>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPenToSquare} className="me-3" size="xl"></FontAwesomeIcon>
                    Discriptions
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faTags} className="me-3" size="xl"></FontAwesomeIcon>
                    Tags
                  </Accordion.Header>
                  <Accordion.Body className="d-flex align-items-center flex-wrap">
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faSeedling} className="me-3" size="xl"></FontAwesomeIcon>
                    Categories
                  </Accordion.Header>
                  <Accordion.Body className="d-flex align-items-center flex-wrap">
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                    <div className={clsx(style["tag-item"])}>tag 1</div>
                  </Accordion.Body>
                </Accordion.Item><Accordion.Item eventKey="3">
                  <Accordion.Header className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faSeedling} className="me-3" size="xl"></FontAwesomeIcon>
                    Plant Details
                  </Accordion.Header>
                  <Accordion.Body className="">
                    <Stack className="ms-4">
                      <div className="d-flex mb-2 align-items-center">
                        <h6 className="me-3 mb-0">ABCDE: </h6>
                        <div>HADADASD</div>
                      </div>
                      <div className="d-flex mb-2 align-items-center">
                        <h6 className="me-3 mb-0">ABCDE: </h6>
                        <div>HADADASD</div>
                      </div>
                      <div className="d-flex mb-2 align-items-center">
                        <h6 className="me-3 mb-0">ABCDE: </h6>
                        <div>HADADASD</div>
                      </div>
                      <div className="d-flex mb-2 align-items-center">
                        <h6 className="me-3 mb-0">ABCDE: </h6>
                        <div>HADADASD</div>
                      </div>
                      <div className="d-flex mb-2 align-items-center">
                        <h6 className="me-3 mb-0">ABCDE: </h6>
                        <div>HADADASD</div>
                      </div>
                      <div className="d-flex mb-2 align-items-center">
                        <h6 className="me-3 mb-0">ABCDE: </h6>
                        <div>HADADASD</div>
                      </div>
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
