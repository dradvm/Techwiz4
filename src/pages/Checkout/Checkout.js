import clsx from "clsx";
import style from "./Checkout.module.scss";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Container, Row } from "react-bootstrap";
import img from "@images/vertical-img.jpg"

function Checkout() {
  return (
    <Container className={clsx("my-5 p-4 bg-white d-flex align-items-center rounded", style["checkout-page"])} style={{ maxWidth: "900px" }}>
      <div className={clsx("w-100")}>
        <Row>
          <Col xs="7">
            <div className="p-5 d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="mb-3">Payment Details</h5>

                <div className={clsx(style["input-group"], "d-flex flex-column mb-3")}>
                  <input type="email" id="email-address" name="email-address" placeholder="Email Address..." />
                </div>

                <div className={clsx(style["input-group"], "d-flex flex-column mb-3")}>
                  <input type="email" id="email-address" name="email-address" placeholder="Credit Card Number..." />
                </div>
                <div className="d-flex justify-content-between">
                  <div className={clsx(style["input-group"], "d-flex flex-column mb-3")} style={{ width: "40%" }} >
                    <input type="email" id="email-address" name="email-address" placeholder="Expiry Date" />
                  </div>
                  <div className={clsx(style["input-group"], "d-flex flex-column mb-3")} style={{ width: "40%" }} >
                    <input type="email" id="email-address" name="email-address" placeholder="CVV" />
                  </div>
                </div>
              </div>
              <div>

                <div className="d-flex border-top pt-3 align-items-center justify-content-between mb-5">
                  <div className="fw-semibold text-secondary">Total Amount</div>
                  <div className="fs-5 fw-semibold">500$</div>
                </div>

                <button className={clsx(style["checkout"], "me-5")}>PAYMENT</button>
              </div>
            </div>
          </Col>
          <Col xs="5">
            <img src={img} alt="vertical-img" className="w-100 rounded" />
          </Col>
        </Row>
      </div>
    </Container>

  );
}

export default Checkout
