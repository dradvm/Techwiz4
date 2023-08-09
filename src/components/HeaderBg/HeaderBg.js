import style from "./HeaderBg.module.scss";
import clsx from "clsx";
import { Container } from "react-bootstrap";

function HeaderBg() {
  return (
    <Container className = {clsx(style["headerBg"])} fluid>

    </Container>
  );
}

export default HeaderBg
