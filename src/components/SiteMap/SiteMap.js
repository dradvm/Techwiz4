
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Container , Col, Row} from "react-bootstrap"
import siteMap from "@images/site-map.jpg";
function SiteMap() {
  return (
    <Container fluid className="bg-white border py-5">
      <Container>
        <h2 className="text-secondary-color fw-bold">Site Map</h2>
        <div><img src={siteMap} alt="Site-map img" className="w-100"/></div>
      </Container>
    </Container>
  );
}

export default SiteMap
