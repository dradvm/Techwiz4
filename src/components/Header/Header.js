import style from "./Header.module.scss";
import { faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderBg from "../HeaderBg/HeaderBg";
import logo from "@images/logo.png"
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import MyButton from "../MyButton/MyButton";
function Header() {
  return (
    <>
      <HeaderBg/>
      <Container className="mt-1">
        <Row className={clsx("align-items-center", "border-bottom", "bottom-black")}>
          <Col ><div style={{width: "200px", cursor: "pointer"}} className="overflow-hidden"><img src={logo} alt= "logo-website" className="w-100 h-100"/></div></Col>
          <Col className={clsx("align-items-center")} >
            <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>
              <Link to = "/" className={clsx(style["nav-bar__item"], "text-decoration-none", style["nav-bar__item--home"])}>Home</Link>
              <Link to = "/shop" className={clsx(style["nav-bar__item"], "text-decoration-none")}>Shopping</Link>
              <Link to = "/contact" className={clsx(style["nav-bar__item"], "text-decoration-none")}>Contact Us</Link>
              <Link to = "/" className={clsx(style["nav-bar__item"], "text-decoration-none")}>Feedback</Link>
              
            </div>
          </Col>
          <Col className={clsx("align-items-center", "d-flex", "justify-content-end")} >
            <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>
              
              <Link to = "/" className={clsx(style["nav-bar__item"],style["icon"], "mx-3", "text-decoration-none", "position-relative")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </Link>
              <Link to = "/" className={clsx(style["nav-bar__item"],style["icon"], style["shopping-cart-icon"], "mx-3", "text-decoration-none", "position-relative", "z-3")}>
                <FontAwesomeIcon icon={faBagShopping} size="lg" className="p-2"/>
                <div className={clsx(style["badge"], "position-absolute", "rounded-circle", "d-flex", "justify-content-center", "align-items-center")}>1</div>
                <div className={clsx(style["shopping-cart"])}>
                  <div className="px-4 py-2 border-bottom fw-light text-start">Your Cart</div>
                  <div className={clsx(style["shopping-cart__body"])}>
                    <ShoppingCartItem></ShoppingCartItem>
                    <ShoppingCartItem></ShoppingCartItem>
                    <ShoppingCartItem></ShoppingCartItem>
                  </div>
                  
                  <div className="border-top d-flex w-100 justify-content-end">
                    <div className="m-2">
                      <MyButton msg="View My Shopping Cart" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header
