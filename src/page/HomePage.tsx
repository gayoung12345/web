import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/main/slide1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/main/slide2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/main/slide3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div style={{ backgroundColor: "black", height: "500px" }}>
        <Container
          style={{ backgroundColor: "yellow", height: "100%" }}
        ></Container>
      </div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor7.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomePage;
