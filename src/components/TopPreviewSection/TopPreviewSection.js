
import clsx from "clsx";
import style from "./TopPreviewSection.module.scss";
import bigImage from "@images/big-image.png"
import { Container, Row , Col} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";

function TopPreviewSection() {
  return (
    <Container className={clsx(style["top-preview-section"], "mt-4")} fluid>
      <div className="container">
        <Row>
          <Col className={clsx("d-flex", "", "justify-content-center", "flex-column")}>
            <div>
              <h1 className={clsx(style["big-title"])}>
              <div><span className={clsx(style["green"])}>Green</span> Living</div>
              <div>Explore <span className={clsx(style["green"])}>Now!</span></div>
            </h1>
            <h6 className={clsx("mt-4")} style={{textAlign: "justify"}}>
            Elevate your living space with our meticulously chosen indoor plants, a harmonious fusion of nature and design, perfect for plant enthusiasts seeking to infuse vitality and elegance into their surroundings.
            </h6>
            <MyButton/>
            </div>
          </Col>
          <Col >
            <div className={clsx("d-flex", "align-items-center", "justify-content-center",)}>
              <img src = {bigImage} alt="img" style={{width: '80%'}} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default TopPreviewSection
