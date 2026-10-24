"use client";
import { sliderProps } from "@/utilities/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export const Adventure1 = () => {
  return (
    <section className="adventure-section section-padding fix">
      <div className="container">
        <div className="adventure-wrapper">
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="row g-4">
                <div className="col-xl-6 col-lg-6">
                  <div className="section-title mb-0">
                    <h2 className="text-anim">
                      Special Offers Sort Time Adventures
                    </h2>
                  </div>
                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                    Don’t miss out our exclusive special deals, designed make
                    your dream vacation more affordable than ever.
                  </p>
                  <div className="adventure-image wow img-custom-anim-left">
                    <img src="assets/img/home-1/adventure/01.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="adventure-image wow img-custom-anim-top">
                    <img src="assets/img/home-1/adventure/02.jpg" alt="img" />
                  </div>
                  <div className="adventure-box wow img-custom-anim-bottom">
                    <h3>
                      <Link href="/tour-details">
                        18+ years of experience in travel services
                      </Link>
                    </h3>
                    <div className="info-item">
                      <img
                        src="assets/img/home-1/adventure/client.png"
                        alt="img"
                      />
                      <div className="content">
                        <h5>Mickel z Ponkoz</h5>
                        <span>Travel guide</span>
                      </div>
                    </div>
                    <div className="shape">
                      <img
                        src="assets/img/home-1/adventure/shape.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="adventure-thumb wow img-custom-anim-right">
                <img src="assets/img/home-1/adventure/03.jpg" alt="img" />
                <div className="adventure-content">
                  <h6>23% Discount</h6>
                  <h3>
                    <Link href="/tour-details">Hotel &amp; Resort</Link>
                  </h3>
                  <div className="booking-item">
                    <div className="content">
                      <h4>$1500</h4>
                      <span>per night 4 star rating</span>
                    </div>
                    <Link href="/tour-details" className="theme-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Adventure2 = () => {
  const adventures = [
    {
      image: "assets/img/home-2/adventure/01.jpg",
      title: "Snorkeling & Scuba Diving",
    },
    {
      image: "assets/img/home-2/adventure/02.jpg",
      title: "Desert Safari & Camel Rides",
    },
    {
      image: "assets/img/home-2/adventure/03.jpg",
      title: "Hiking & Nature Trails",
    },
    {
      image: "assets/img/home-2/adventure/04.jpg",
      title: "Cultural Heritage Tours",
    },
  ];
  return (
    <div className="adventure-section-2 section-padding fix header-bg">
      <div className="container-fluid">
        <div className="section-title text-center">
          <h2 className="text-white text-anim">Trending Travel Activities</h2>
          <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            Crafting journeys, creating memories plan smarter, travel better
          </p>
        </div>
        <Swiper
          {...sliderProps.AdventurelSlider}
          className="swiper adventure-slider"
        >
          <div className="swiper-wrapper">
            {adventures.map((adventure, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="activities-item-2">
                  <div className="activities-image">
                    <img src={adventure.image} alt="img" />
                  </div>
                  <div className="activities-content">
                    <h4>
                      <Link href="/tour-details">{adventure.title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <div className="swiper-dot-4">
          <div className="dot3" />
        </div>
      </div>
    </div>
  );
};
