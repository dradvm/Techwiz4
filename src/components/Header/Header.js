import style from "./Header.module.scss";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderBg from "../HeaderBg/HeaderBg";

function Header() {
  return (
    <>
      <HeaderBg/>
      <Container>
        <Row className={clsx("align-items-center", "mt-5")}>
          <Col xs={8}>Logo</Col>
          <Col className={clsx("align-items-center")} >
            <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>
              <Link to = "/" className={clsx(style["nav-bar__item"], "text-decoration-none", style["nav-bar__item--home"])}>Home</Link>
              <Link to = "/" className={clsx(style["nav-bar__item"], "text-decoration-none")}>About</Link>
              <Link to = "/contact" className={clsx(style["nav-bar__item"], "text-decoration-none")}>Contact Us</Link>
              <Link to = "/" className={clsx(style["nav-bar__item"], "text-decoration-none")}>Feedback</Link>
              <Link to = "/" className={clsx(style["nav-bar__item"], "text-decoration-none", "position-relative")}>
                <FontAwesomeIcon icon={faBagShopping} size="xl" />
                <div className={clsx(style["badge"], "position-absolute", "rounded-circle", "d-flex", "justify-content-center", "align-items-center")}>1</div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header
