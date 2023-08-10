import clsx from "clsx";
import style from "./ShopCatalog.module.scss";
// import bigImg from "@images/big-shopping-img.png"
import { Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Item from "../../components/Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import productFilter from './../../functions/Filter.js';

import slider1 from "@images/slider-1.jpg"
import slider2 from "@images/slider-2.jpg"
import slider3 from "@images/slider-3.jpg"
import slider4 from "@images/slider-4.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
function ShopCatalog() {
  var productArr = productFilter([]); //Để tạm chưa có tag nên không có filter
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
          style={{ height: "600px" }}
        >
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider1}  alt="slider-img" className="w-100" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{fontSize:"5rem"}}>Explore Our Collection</h1>
            </div>
            </SwiperSlide>
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider2}  alt="slider-img" className="w-100" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{fontSize:"5rem"}}>Indoor Greenery Delights</h1>
            </div>
            </SwiperSlide>
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider3}  alt="slider-img" className="w-100" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{fontSize:"5rem"}}>Outdoor Beauties</h1>
            </div>
            </SwiperSlide>
          <SwiperSlide className="" >
            <div className="position-relative w-100 h-100">
              <img src={slider4}  alt="slider-img" className="w-100" />
              <div className={clsx(style["over-lay"])}>
              </div>
              <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center text-uppercase z-3 w-75" style={{fontSize:"5rem"}}>Garden Care Essentials</h1>
            </div>
            </SwiperSlide>
        </Swiper>
      </Container>
      <Container>

        <div className="mt-5 w-100 d-flex justify-content-between">
          <div className="d-flex">
            <Dropdown className={clsx(style["custom-drop-down"])}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Sort by price: { }
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="ms-3 d-flex align-items-center">
              <Dropdown className={clsx(style["custom-drop-down"])}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Filter: { }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className={clsx(style["filter"], "ms-3", "d-flex", "align-items-center")}>
                <div className={clsx(style["filter__item"])}><span>ABC</span> <FontAwesomeIcon icon={faDeleteLeft} className={clsx(style["icon"])} /></div>
                <div className={clsx(style["filter__item"])}><span>ABC</span> <FontAwesomeIcon icon={faDeleteLeft} className={clsx(style["icon"])} /></div>
                <div className={clsx(style["filter__item"])}><span>ABC</span> <FontAwesomeIcon icon={faDeleteLeft} className={clsx(style["icon"])} /></div>
              </div>
            </div>
          </div>
          <div className={clsx(style["custom-drop-down"])}><button disabled>19 Product</button></div>
        </div>
        <div className="row mt-4 gy-4">
          {productArr.map((item) =>
            <div className="col-3" style={{ height: "400px" }} key={item[0]}><Item product={item[1]}></Item></div>
          )}
        </div>
      </Container>
    </Container>
  );
}

export default ShopCatalog
