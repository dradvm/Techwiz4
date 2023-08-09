import style from "./Header.module.scss";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Container className={clsx("position-absolute", "top-0", "start-0", "end-0")}>
      <Row className={clsx("align-items-center", "mt-5")}>
        <Col xs={8}>Logo</Col>
        <Col className={clsx("align-items-center")} >
          <div className={clsx(style["nav-bar"], "d-flex", "justify-content-between", "align-items-center")}>
            <div className={clsx(style["nav-bar__item"], style["nav-bar__item--home"])}>Home</div>
            <div className={clsx(style["nav-bar__item"])}>About</div>
            <div className={clsx(style["nav-bar__item"])}>Contact Us</div>
            <div className={clsx(style["nav-bar__item"])}>Feedback</div>
            <div className={clsx(style["nav-bar__item"], "position-relative")}>
              <FontAwesomeIcon icon={faBagShopping} size="xl" />
              <div className={clsx(style["badge"], "position-absolute", "rounded-circle", "d-flex", "justify-content-center", "align-items-center")}>1</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header
