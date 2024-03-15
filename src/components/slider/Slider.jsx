import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Slider() {
  const [imgs, setImgs] = useState(["", "", "", "", "", "", "", ""]);
  return (
    <div className="slides">
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 6.5,
          }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {imgs.map((item) => {
            return (
              <SwiperSlide>
                <div className="slider-card">
                  <img src="/imgs/view1.png" alt="" />
                </div>
              </SwiperSlide>
            );
          })}

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
