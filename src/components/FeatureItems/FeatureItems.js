import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import Item from '../Item/Item';
import { productList } from '../../functions/Filter'; //Mảng test, thay bằng list thật sau
import MyButton from '../MyButton/MyButton';
function FeatureItems() {
  let featuredProducts = productList.filter((item, index) => (index < 10));
  return (
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="text-secondary-color fw-b">Our Feature</h2>
          <MyButton msg = {<span className="fs-4">Buy Now</span>} />
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
          {featuredProducts.map((item, index) =>
            <SwiperSlide style={{height: "400px"}} key={index}>
            <Item product={item}></Item>
            </SwiperSlide>
          )}
        </Swiper>
    </Container>
  );
}
export default FeatureItems
