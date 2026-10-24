"use client";
import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";
import { sliderProps } from "@/utilities/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Gallery = () => {
  const gallerySlider1 = [
    "assets/img/inner-page/gallery/01.jpg",
    "assets/img/inner-page/gallery/02.jpg",
    "assets/img/inner-page/gallery/03.jpg",
    "assets/img/inner-page/gallery/04.jpg",
    "assets/img/inner-page/gallery/05.jpg",
  ];

  const gallerySlider2 = [
    "assets/img/inner-page/gallery/06.jpg",
    "assets/img/inner-page/gallery/07.jpg",
    "assets/img/inner-page/gallery/08.jpg",
    "assets/img/inner-page/gallery/09.jpg",
  ];
  return (
    <RoavioLayout>
      {/* Breadcrumb-Wrapper Section Start */}
      <div
        className="breadcrumb-wrapper-3 fix bg-cover"
        style={{
          backgroundImage: "url(assets/img/inner-page/breadcrumb/bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Gallery
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2 style-3">Gallery</li>
            </ul>
          </div>
        </div>
      </div>
      {/* gallery Section Start */}
      <section className="gallery-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Explore Our Photo Gallery</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Crafting journeys, creating memories plan smarter, travel better
            </p>
          </div>
        </div>
        <Swiper
          {...sliderProps.gallerySlider}
          className="swiper gallery-slider"
        >
          {gallerySlider1.map((img, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="gallery-image">
                <img src={img} alt="img" />
                <div className="gallery-content">
                  <h4>
                    <Link href="/tour-details">Brown Concrete Building</Link>
                  </h4>
                  <p>Tour &amp; Travel</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          {...sliderProps.gallerySlider2}
          className="swiper gallery-slider-2"
        >
          {gallerySlider2.map((img, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="gallery-image">
                <img src={img} alt="img" />
                <div className="gallery-content">
                  <h4>
                    <Link href="/tour-details">Brown Concrete Building</Link>
                  </h4>
                  <p>Tour &amp; Travel</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Contact1 />
    </RoavioLayout>
  );
};

export default Gallery;
