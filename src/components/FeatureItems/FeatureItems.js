import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import Item from '../Item/Item';
import { productsList } from '../../functions/Filter'; //Mảng test, thay bằng list thật sau
function FeatureItems() {
  let featuredProducts = productsList.map((item, index) => 
  {
    if (index < 10)
    {
      return item;
    }
  })
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
          {featuredProducts.map((item) =>
            <SwiperSlide style={{height: "400px"}} key={item[0]}>
            <Item product={item[1]}></Item>
            </SwiperSlide>
          )}
        </Swiper>
    </Container>
  );
}

export default FeatureItems
