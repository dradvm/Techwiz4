
import clsx from "clsx";
import style from "./TopPreviewSection.module.scss";
import bigImage from "@images/big-shopping-img.webp"
import { Container, Row , Col} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";

function TopPreviewSection() {
  return (
    <Container className={clsx(style["top-preview-section"], "pb-5 bg-white")} fluid>
      <Container>
      <Row>
          <Col className={clsx("d-flex", "", "justify-content-center", "flex-column")}>
            <div>
              <h1 className={clsx(style["big-title"])}>
              <div><span className={clsx("text-primary-color")}>Green</span> Living</div>
              <div>Explore <span className={clsx("text-primary-color")}>Now!</span></div>
            </h1>
            <h6 className={clsx("mt-4, mb-5")} style={{textAlign: "justify"}}>
            Elevate your living space with our meticulously chosen indoor plants, a harmonious fusion of nature and design, perfect for plant enthusiasts seeking to infuse vitality and elegance into their surroundings.
            </h6>
            <Link to = "/shop" ><MyButton to = "/shop" size="lg" msg = "Shop Now"/></Link>
            </div>
          </Col>
          <Col >
            <div className={clsx("d-flex", "align-items-center", "justify-content-center")}>
              <img src = {bigImage} alt="img" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TopPreviewSection
