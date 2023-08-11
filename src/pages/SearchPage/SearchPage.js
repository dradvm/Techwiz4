import clsx from "clsx";
import style from "./SearchPage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { productList } from '../../functions/Filter'; //Mảng test, thay bằng list thật sau
import cannotFindImg from "@images/cannot-find.png"
import Item from "../../components/Item/Item";
function SearchPage() {
  let featuredProducts = productList.filter((item, index) => (index < 10));

  return (
    // <Container className="my-5 py-5 d-flex justify-content-center">
    //   <div className="d-flex flex-column align-items-center">
    //     <div className="w-50">
    //       <img src={cannotFindImg} alt="cannot-find-image" className="w-100" />
    //     </div>
    //     <h5 className="text-center mt-5">No results found</h5>
    //     <h5 className="text-center my-2 text-body-secondary">Try different or more general keywords</h5>
    //   </div>
    // </Container>
    <Container className="mb-5 py-5">
      <h1 className="text-primary-color">Search Results</h1>
      <Row className="gy-5 mt-3">
        {featuredProducts.map((item, index) =>
        
            <Col xs={3} style={{height: "400px"}}>
              
              <Item product={item}></Item>
            </Col>

            )}
      </Row>
    </Container>
  );
}

export default SearchPage
