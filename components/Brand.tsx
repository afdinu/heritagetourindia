"use client";

import { sliderProps } from "@/utilities/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const Brand1 = () => {
  const brandLogos = [
    "assets/img/home-1/brand/01.png",
    "assets/img/home-1/brand/02.png",
    "assets/img/home-1/brand/03.png",
    "assets/img/home-1/brand/04.png",
    "assets/img/home-1/brand/05.png",
    "assets/img/home-1/brand/06.png",
    "assets/img/home-1/brand/07.png",
  ];
  return (
    <section className="brand-section section-padding fix">
      <div className="container custom-container-2">
        <div className="brand-wrapper">
          <h6>Relied upon by top-performing teams worldwide</h6>
          <Swiper {...sliderProps.brandSlider} className="swiper brand-slider">
            <div className="swiper-wrapper">
              {brandLogos.map((logo, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="brand-image text-center">
                    <img src={logo} alt="img" />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
