
import clsx from "clsx";
import { Container , Col, Row} from "react-bootstrap";
import img1 from "@images/img-about-1.png"
import img2 from "@images/img-about-2.png"
import img3 from "@images/img-about-3.png"
import leaf from "@images/img-about-leaf.png"
function About() {
  return (
    <Container className="bg-body-tertiary py-5 position-relative overflow-hidden" fluid>
    <div className={clsx("position-absolute", "bottom-0", "w-25")} style={{right: "-10%"}}>
      <img src={leaf} alt="leaf-img" className="w-100" />
    </div>
      <Container className="py-5 position-relative px-4" style={{zIndex: "5"}}>
        <div>
        <h4 className="text-primary-color">Our Services</h4>
        <h2 className="text-secondary-color fw-bold">What We Offer</h2>
        <Row className = "mt-5">
          <Col className={clsx("d-flex", "flex-column")}>
            <img src={img1} alt = "img-about-1" className="w-25" />
            <h5 className={clsx("mt-3", "text-primary-color")}>Indoor Plants</h5>
            <p className="w-75">Bring nature inside with our exquisite indoor plant collection. Elevate your spaces and experience the calming beauty of greenery.</p>
          </Col>
          <Col className={clsx("d-flex", "flex-column")}>
            <img src={img2} alt = "img-about-2" className="w-25" />
            <h5 className={clsx("mt-3", "text-primary-color")}>Indoor Plants</h5>
            <p className="w-75">Discover outdoor plant wonders that transform your landscapes. Cultivate vibrant gardens and enjoy nature's bounty.</p>
          </Col>
          <Col className={clsx("d-flex", "flex-column")}>
            <img src={img3} alt = "img-about-3" className="w-25" />
            <h5 className={clsx("mt-3", "text-primary-color")}>Indoor Plants</h5>
            <p className="w-75">Nurture your garden with our premium care essentials. From tools to tips, we're here to help your garden thrive and flourish.</p>
          </Col>
        </Row>
        </div>
      </Container>
    </Container>
  );
}

export default About
