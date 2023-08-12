import clsx from "clsx";
import style from "./Checkout.module.scss";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Container, Row } from "react-bootstrap";
import img from "@images/vertical-img.jpg"
import { useContext, useRef, useState } from "react";
import { checkContext } from "../ShoppingCartPage/ShoppingCartPage";
import { cartContext } from "../../App";
import { useLocation } from "react-router";
function Checkout() {
  let location = useLocation();
  let sum = location.state;
  const [email, setEmail] = useState('');
  const [credit, setCredit] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setcvv] = useState('');
  let emailRef = useRef(null);
  let creditRef = useRef(null);
  let dateRef = useRef(null);
  let cvvRef = useRef(null);
  const importedCheck = useContext(checkContext);
  const importedCart = useContext(cartContext);
  function emailEnter(e)
  {
    if (e.key === 'Enter')
    {
      creditRef.current.focus();
    }
  }
  function creditEnter(e)
  {
    if (e.key === 'Enter')
    {
      dateRef.current.focus();
    }
  }
  function dateEnter(e)
  {
    if (e.key === 'Enter')
    {
      cvvRef.current.focus();
    }
  }
  function cvvEnter(e)
  {
    if (e.key === 'Enter')
    {
      pay();
    }
  }
  function pay()
  {
    let regEx = /^[a-zA-Z]+[0-9a-zA-Z]*@[a-zA-Z0-9]+.[a-zA-Z]+$/;
    if (!regEx.test(email))
    {
      alert('Please retype your email.');
      emailRef.current.focus();
      return;
    }
    regEx = /^[0-9]+$/;
    if (!regEx.test(credit))
    {
      alert('Please retype your credit card number.');
      creditRef.current.focus();
      return;
    }
    if (date.trim().length === 0)
    {
      alert("Please retype your credit card's expire day.");
      dateRef.current.focus();
      return;
    }
    regEx = /^[0-9]{3}$/;
    if (!regEx.test(cvv))
    {
      alert('Please retype your card verification value.');
      cvvRef.current.focus();
      return;
    }
    //let details = importedCart.cart.filter((item, index) => importedCheck.check[index]);
    //let newCart = importedCart.cart.filter((item, index) => !importedCheck.check[index]);
    importedCart.setCart(newCart);
    importedCheck.setCheck(newCart.map(() => true));
    let pay =
    {
      email: email,
      credit: credit,
      expDate: date,
      cvv: cvv,
      value: sum,
      //details: details
    };
    let payDetails = (JSON.parse(localStorage.getItem('payDetails')) || []);
    localStorage.setItem('payDetails', JSON.stringify([...payDetails, pay]));
    setEmail('');
    setCredit('');
    setDate('');
    setcvv('');
  }
  return (
    <Container className={clsx("my-5 p-4 bg-white d-flex align-items-center rounded", style["checkout-page"])} style={{ maxWidth: "900px" }}>
      <div className={clsx("w-100")}>
        <Row>
          <Col xs="7">
            <div className="p-5 d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="mb-3">Payment Details</h5>

                <div className={clsx(style["input-group"], "d-flex flex-column mb-3")}>
                  <input type="email" id="email-address" name="email-address" placeholder="Email Address..." ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => emailEnter(e)}/>
                </div>

                <div className={clsx(style["input-group"], "d-flex flex-column mb-3")}>
                  <input type="text" id="email-address" name="credit-number" placeholder="Credit Card Number..." ref={creditRef} value={credit} onChange={(e) => setCredit(e.target.value)} onKeyDown={(e) => creditEnter(e)}/>
                </div>
                <div className="d-flex justify-content-between">
                  <div className={clsx(style["input-group"], "d-flex flex-column mb-3")} style={{ width: "40%" }} >
                    <input type="date" id="email-address" name="date" placeholder="Expiry Date" ref={dateRef} value={date} onChange={(e) => setDate(e.target.value)} onKeyDown={(e) => dateEnter(e)}/>
                  </div>
                  <div className={clsx(style["input-group"], "d-flex flex-column mb-3")} style={{ width: "40%" }} >
                    <input type="text" id="email-address" name="cvv" placeholder="CVV" ref={cvvRef} value={cvv} onChange={(e) => setcvv(e.target.value)} onKeyDown={(e) => cvvEnter(e)}/>
                  </div>
                </div>
              </div>
              <div>

                <div className="d-flex border-top pt-3 align-items-center justify-content-between mb-5">
                  <div className="fw-semibold text-secondary">Total Amount</div>
                  <div className="fs-5 fw-semibold">{'$' + sum}</div>
                </div>

                <button className={clsx(style["checkout"], "me-5")} onClick={pay}>PAYMENT</button>
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
