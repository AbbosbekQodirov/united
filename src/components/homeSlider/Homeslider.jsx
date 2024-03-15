import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Homeslider.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

function Slider() {
  const [imgs, setImgs] = useState([
    {
      img: "/imgs/herobg1.png",
      title: "Emerald Castle Residence",
    },
    {
      img: "/imgs/herobg2.png",
      title: "Maison Calme",
    },
    {
      img: "/imgs/herobg1.png",
      title: "Emerald Castle Residence",
    },
    {
      img: "/imgs/herobg2.png",
      title: "Maison Calme",
    },
    {
      img: "/imgs/herobg1.png",
      title: "Emerald Castle Residence",
    },
    {
      img: "/imgs/herobg2.png",
      title: "Maison Calme",
    },
    {
      img: "/imgs/herobg1.png",
      title: "Emerald Castle Residence",
    },
    {
      img: "/imgs/herobg2.png",
      title: "Maison Calme",
    },
  ]);
  return (
    <div className="slides homeslides">
      <div className="container ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 50,
          }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {imgs.map((item) => {
            return (
              <SwiperSlide>
                <div className="hero">
                  <div
                    style={{ backgroundImage: `url(${item.img})` }}
                    className="container"
                  >
                    <div className="hero_info ">
                      <h3>Beautiful view</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Ultricies
                        sodales neque aliquam posuere est congue. Nibh tincidunt
                        rhoncus auctor quis urna fusce sed quis.
                      </p>
                    </div>
                    <div className="hero_info ">
                      <h3>Luxury apartments</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Ultricies
                        sodales neque aliquam posuere est congue. Nibh tincidunt
                        rhoncus auctor quis urna fusce sed quis.
                      </p>
                    </div>
                    <div className="hero_info ">
                      <h3>Fresh air</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Ultricies
                        sodales neque aliquam posuere est congue. Nibh tincidunt
                        rhoncus auctor quis urna fusce sed quis.
                      </p>
                    </div>
                    <div className="hero_info ">
                      <h3>Free parking space</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Ultricies
                        sodales neque
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="hero_title">{item.title}</h2>
                  </div>
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
