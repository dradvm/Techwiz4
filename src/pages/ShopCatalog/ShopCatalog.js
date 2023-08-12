import clsx from "clsx";
import style from "./ShopCatalog.module.scss";
// import bigImg from "@images/big-shopping-img.png"
import { Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Item from "../../components/Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import productFilter from './../../functions/Filter.js';
import { tagList } from "./../../functions/Filter.js";
import { useContext, useState } from "react";

import slider1 from "@images/slider-1.webp"
import slider2 from "@images/slider-2.webp"
import slider3 from "@images/slider-3.webp"
import slider4 from "@images/slider-4.webp"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { responsiveContext } from "../../App";
function ShopCatalog() {
  const [filterArr, setFilterArr] = useState([]);
  const [sort, setSort] = useState(0);
  const { isDesktop } = useContext(responsiveContext)
  let block = false;
  function addToFilter(e) {
    let cat = tagList[e.target.getAttribute('catindex')];
    if (filterArr.includes(cat)) {
      return;
    }
    setFilterArr((prev) => [...prev, cat]);
    setSort(0);
  }
  function removeFromFilter(e) {
    if (block) {
      return;
    }
    setFilterArr((prev) => prev.filter((item, index) => index != e.target.getAttribute('catindex')));
    setSort(0);
    block = true;
  }
  var productArr;
  if (sort === 0) {
    productArr = productFilter(filterArr).sort((a, b) => a.price - b.price);
  }
  else if (sort === 1) {
    productArr = productFilter(filterArr).sort((a, b) => b.price - a.price);
  }
  return (
    <Container className="d-flex flex-column align-items-center mb-5 pb-5 mt-3" fluid>
      {/* <div className="d-flex justify-content-center"><img src={bigImg} alt="big-img" className="w-100" /></div> */}
      <Container>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            "delay": 5000,
          }}
          allowTouchMove={false}
          className="mySwiper"
          style={{ height: "80vh" }}
        >
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider1} alt="slider-img" className="w-100 h-100" loading="lazy" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{ fontSize: isDesktop ? "5rem" : "2rem" }}>Explore Our Collection</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider2} alt="slider-img" className="w-100 h-100" loading="lazy" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{ fontSize: isDesktop ? "5rem" : "2rem" }}>Indoor Greenery Delights</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider3} alt="slider-img" className="w-100 h-100" loading="lazy" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{ fontSize: isDesktop ? "5rem" : "2rem" }}>Outdoor Beauties</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider4} alt="slider-img" className="w-100 h-100" loading="lazy" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{ fontSize: isDesktop ? "5rem" : "2rem" }}>Garden Care Essentials</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Container>
        <div className="mt-5 w-100 d-flex  justify-content-lg-between justify-content-start flex-lg-row flex-column align-items-lg-center">
          <div className="d-flex align-items-center">
            <Dropdown className={clsx(style["custom-drop-down"])}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Sort by price
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => { setSort(0) }}>Ascending</Dropdown.Item>
                <Dropdown.Item onClick={() => { setSort(1) }}>Descending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="ms-3 d-flex align-items-center">
              <Dropdown className={clsx(style["custom-drop-down"])}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {tagList.map((item, index) =>
                    <Dropdown.Item key={index} catindex={index} onClick={(e) => addToFilter(e)}>{item}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <div className={clsx(style["filter"], "ms-3", "d-lg-flex d-none flex-wrap", "align-items-center")} style={{maxWidth: "550px"}}>
                {filterArr.map((item, index) =>
                  <div className={clsx(style["filter__item"], "mb-2")} key={index} catindex={index} onClick={(e) => removeFromFilter(e)}>
                    <span catindex={index} onClick={(e) => removeFromFilter(e)}>{item}</span>
                    <FontAwesomeIcon icon={faDeleteLeft} className={clsx(style["icon"])} catindex={index} onClick={(e) => removeFromFilter(e)} />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className={clsx(style["custom-drop-down"], "mt-lg-0 mt-3")}><button disabled>{productArr.length + " Product(s)"}</button></div>
          <div className={clsx(style["filter"], "d-lg-none d-flex flex-wrap", "align-items-center", "mt-3")}>
                {filterArr.map((item, index) =>
                  <div className={clsx(style["filter__item"], "ms-0 me-2 mb-2")} key={index} catindex={index} onClick={(e) => removeFromFilter(e)}>
                    <span catindex={index} onClick={(e) => removeFromFilter(e)}>{item}</span>
                    <FontAwesomeIcon icon={faDeleteLeft} className={clsx(style["icon"])} catindex={index} onClick={(e) => removeFromFilter(e)} />
                  </div>
                )}
              </div>
        </div>
        <div className="row mt-4 gy-4 gx-4">
          {productArr.map((item, index) =>
            <div className="col-lg-3 col-12" style={{ height: "400px" }} key={index}><Item product={item}></Item></div>
          )}
        </div>
      </Container>
    </Container>
  );
}

export default ShopCatalog
