"use client";
import { sliderProps } from "@/utilities/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const Video = () => {
  const brands = [
    "assets/img/home-4/brand/01.png",
    "assets/img/home-4/brand/02.png",
    "assets/img/home-4/brand/03.png",
    "assets/img/home-4/brand/04.png",
    "assets/img/home-4/brand/05.png",
    "assets/img/home-4/brand/06.png",
    "assets/img/home-4/brand/01.png",
  ];
  return (
    <div className="video-section-4 section-padding pt-0 fix">
      <div className="shape">
        <img src="assets/img/home-4/brand/shape.png" alt="img" />
      </div>
      <div className="container">
        <div
          className="video-wrapper-4 bg-cover"
          style={{ backgroundImage: "url(assets/img/home-4/video-bg.jpg)" }}
        >
          <a
            href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
            className="video-btn video-popup"
          >
            <i className="fa-duotone fa-play" />
          </a>
        </div>
      </div>
      <div className="container custom-container-6">
        <div className="brand-wrapper-4">
          <h6>Relied upon by top-performing teams worldwide</h6>
          <Swiper {...sliderProps.brandSlider} className="swiper brand-slider">
            {brands.map((brand, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="brand-image text-center">
                  <img src={brand} alt="img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
