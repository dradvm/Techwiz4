import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import Item from '../Item/Item';
function FeatureItems() {
  return (
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="text-secondary-color">Our Feature</h2>
          <h2>Buy Nơ</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop = {true}
          slidesPerView={4}
          spaceBetween={30}
          allowTouchMove = {false}
          autoplay = {{
            "delay": 5000
          }}
          className="mySwiper mt-5"
        >
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
          <SwiperSlide style={{height: "400px"}}>
            <Item></Item>
          </SwiperSlide>
        </Swiper>
    </Container>
  );
}

export default FeatureItems
