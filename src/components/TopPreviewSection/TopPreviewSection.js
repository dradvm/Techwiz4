
import clsx from "clsx";
import style from "./TopPreviewSection.module.scss";
import bigImage from "@images/big-shopping-img.webp"
import { Container, Row, Col } from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";

function TopPreviewSection() {
  return (
    <Container className={clsx(style["top-preview-section"], "pb-5 bg-white")} fluid>
      <Container className="pt-lg-3 pt-5">
        <Row>
          <Col lg={6} xs={{ size: 12, order: "last" }} className={clsx("d-flex", "flex-lg-wrap-reverse", "justify-content-center ", "flex-column")}>
            <div className="d-flex flex-column align-items-lg-start align-items-center">
              <h1 className={clsx("d-lg-block d-none", style["big-title"])}>
                <div><span className={clsx("text-primary-color")}>Green</span> Living</div>
                <div>Explore <span className={clsx("text-primary-color")}>Now!</span></div>
              </h1>
              <h1 className={clsx("d-lg-none text-center mb-4")} style={{fontSize: "3rem"}}>
                <div><span className={clsx("text-primary-color")}>Green</span> Living</div>
                <div>Explore <span className={clsx("text-primary-color")}>Now!</span></div>
              </h1>
              <h6 className={clsx("mt-4, mb-5", "d-lg-block d-none")} style={{ textAlign: "justify" }}>
                Elevate your living space with our meticulously chosen indoor plants, a harmonious fusion of nature and design, perfect for plant enthusiasts seeking to infuse vitality and elegance into their surroundings.
              </h6>
              <Link to="/shop" className="d-flex mb-lg-0 mb-5 text-decoration-none text-white"><MyButton to="/shop" size="lg" msg="Shop Now" /></Link>
            </div>
          </Col>
          <Col lg={6} xs={{ size: 12, order: "first" }} >
            <div className={clsx("d-flex", "align-items-center", "justify-content-center")}>
              <img src={bigImage} alt="img" className="w-100" loading="lazy"/>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TopPreviewSection
