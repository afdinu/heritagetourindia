"use client";
import { sliderProps } from "@/utilities/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "./Counter";

export const Hero1 = () => {
  const heroSlides = [
    {
      bgImage: "assets/img/home-1/hero/hero-bg.jpg",
      title: "Turning your travel dreams into reality",
      description:
        "Unleash your inner explorer with us! At ROAVIO, we craft unforgettable adventures tailored",
      buttonText: "Explore Destinations",
      stats: [
        { count: 500, label: "Explore 500+ Destinations" },
        { count: 10, label: "Years of experience" },
      ],
    },
    {
      bgImage: "assets/img/home-1/hero/hero-bg-2.jpg",
      title: "Turning your travel dreams into reality",
      description:
        "Unleash your inner explorer with us! At ROAVIO, we craft unforgettable adventures tailored",
      buttonText: "Explore Destinations",
      stats: [
        { count: 500, label: "Explore 500+ Destinations" },
        { count: 10, label: "Years of experience" },
      ],
    },
    {
      bgImage: "assets/img/home-1/hero/hero-bg-3.jpg",
      title: "Turning your travel dreams into reality",
      description:
        "Unleash your inner explorer with us! At ROAVIO, we craft unforgettable adventures tailored",
      buttonText: "Explore Destinations",
      stats: [
        { count: 500, label: "Explore 500+ Destinations" },
        { count: 10, label: "Years of experience" },
      ],
    },
  ];
  return (
    <section className="hero-section-1 fix">
      <div className="swiper-dot-3">
        <div className="dot" />
      </div>
      <Swiper {...sliderProps.heroSlider} className="swiper hero-slider">
        <div className="swiper-wrapper">
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="hero-1">
                <div
                  className="hero-bg bg-cover"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                ></div>
                <div className="container-fluid">
                  <div className="row g-4 justify-content-between align-items-end">
                    <div className="col-xl-4 col-lg-6">
                      <div className="hero-content">
                        <h1 data-animation="fadeInUp" data-delay="1.3s">
                          {slide.title}
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.3s">
                          {slide.description}
                        </p>
                        <Link
                          href="/destination-details"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-delay="1.3s"
                        >
                          {slide.buttonText}
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="counter-item"
                        data-animation="fadeInUp"
                        data-delay="1.3s"
                      >
                        {slide.stats.map((stat, i) => (
                          <div key={i} className="content">
                            <h2>
                              <span className="count">
                                <Counter end={stat.count} />
                              </span>
                              +
                            </h2>
                            <p>{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};
export const Hero2 = () => {
  const selectOptions = {
    whereToGo: [
      "Where to go",
      "Travel destinations",
      "Local places",
      "Adventure",
    ],
    travelType: [
      "Travel type",
      "Travel destinations",
      "Local places",
      "Adventure",
    ],
  };
  const hero2Slides = [
    { bgImage: "assets/img/home-2/hero/hero-bg.jpg" },
    { bgImage: "assets/img/home-2/hero/hero-bg-2.jpg" },
    { bgImage: "assets/img/home-2/hero/hero-bg-3.jpg" },
  ];

  return (
    <section className="hero-section-2 fix">
      <Swiper {...sliderProps.heroSlider} className="swiper hero-slider">
        <div className="swiper-wrapper">
          {hero2Slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="hero-2">
                <div
                  className="hero-bg bg-cover"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                ></div>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-xl-12">
                      <div className="hero-content">
                        <h3 data-animation="fadeInUp" data-delay="1.3s">
                          We provide more than 800+ travel destination
                        </h3>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          Travel &amp; Adventure
                        </h1>
                        <div
                          className="from-box wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <h3>Find adventure that suits your needs</h3>
                          <div className="box-item-2">
                            <div className="form-clt">
                              <div className="form">
                                <select className="single-select w-100">
                                  {selectOptions.whereToGo.map((option, i) => (
                                    <option key={i}>{option}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="form-clt">
                              <div className="form">
                                <select className="single-select w-100">
                                  {selectOptions.whereToGo.map((option, i) => (
                                    <option key={i}>{option}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="form-clt">
                              <div className="form">
                                <select className="single-select w-100">
                                  {selectOptions.travelType.map((option, i) => (
                                    <option key={i}>{option}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="form-clt">
                              <button className="theme-btn" type="submit">
                                Find Tours
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};
export const Hero3 = () => {
  // Define the slide data
  const hero3Slides = [
    { heroImage: "assets/img/home-3/hero/hero-1.jpg" },
    { heroImage: "assets/img/home-3/hero/hero-2.jpg" },
    { heroImage: "assets/img/home-3/hero/hero-3.jpg" },
    { heroImage: "assets/img/home-3/hero/hero-1.jpg" },
    { heroImage: "assets/img/home-3/hero/hero-2.jpg" },
    { heroImage: "assets/img/home-3/hero/hero-3.jpg" },
  ];

  // Common data shared across all slides
  const commonData = {
    title: "Indonesia",
    description:
      "Jakarta Cathedral, officially named the Cathedral of Our Lady of the Assumption, stands as a breathtaking landmark in the heart of the city.",
    buttonText: "Explore Destinations",
    shapeBg: "assets/img/home-3/hero/shape.png",
    smallImage: "assets/img/home-3/hero/small.jpg",
    clatImage: "assets/img/home-3/hero/clat.png",
    toursCount: 100,
    rating: 4.8,
    stars: 5,
  };
  return (
    <section className="hero-secton hero-3 fix">
      <Swiper {...sliderProps.herosSlider} className="swiper heros-slider">
        <div className="swiper-wrapper">
          {hero3Slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="hero-image">
                <img src={slide.heroImage} alt="img" />
                <div className="hero-content">
                  <h2>{commonData.title}</h2>
                  <p>{commonData.description}</p>
                  <Link href="/destination-details" className="theme-btn color">
                    {commonData.buttonText}
                  </Link>
                </div>
                <div
                  className="hero-box bg-cover"
                  style={{ backgroundImage: `url(${commonData.shapeBg})` }}
                >
                  <div className="top-item">
                    <div className="cont">
                      <h2>
                        <span className="count">
                          <Counter end={commonData.toursCount} />
                        </span>
                        +
                      </h2>
                      <p>Tours Available</p>
                    </div>
                    <div className="small-image">
                      <img src={commonData.smallImage} alt="img" />
                    </div>
                  </div>
                  <div className="bottom-item">
                    <div className="box">
                      <h2>{commonData.rating}</h2>
                    </div>
                    <div className="right-content">
                      <img src={commonData.clatImage} alt="img" />
                      <div className="star">
                        {Array.from({ length: commonData.stars }).map(
                          (_, i) => (
                            <i key={i} className="fa-solid fa-star" />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};
export const Hero4 = () => {
  return (
    <section
      className="hero-section hero-4 bg-cover"
      style={{ backgroundImage: "url(assets/img/home-4/hero-bg.jpg)" }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Luxury Resorts for Unforgettable Getaways
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                At Travelor, we bring you more than just a place to stay — we
                create experiences that inspire.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="hero-image">
              <img
                data-speed=".8"
                src="assets/img/home-4/man.jpg"
                alt="img"
                className="wow img-custom-anim-right"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-11">
            <div className="from-box wow fadeInUp" data-wow-delay=".3s">
              <h5>Find Comfort, Book Easily, Travel Happily</h5>
              <div className="box-item-2">
                <div className="date-input w-100">
                  <input type="date" />
                </div>
                <div className="date-input w-100">
                  <input type="date" />
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Rooms</option>
                      <option>Modern Room</option>
                      <option>Luxury Room</option>
                      <option>Family Room</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Guest</option>
                      <option>Full Name</option>
                      <option>Gender</option>
                      <option>Nationality</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <button className="theme-btn" type="submit">
                    Find Tours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
