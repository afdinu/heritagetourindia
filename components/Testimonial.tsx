"use client";
import { sliderProps } from "@/utilities/sliderProps";
import { Fragment } from "react/jsx-runtime";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Testimonial1 = () => {
  const testimonials = [
    {
      quote:
        "Booking with this agency was the best decision for our Bali trip! from flights to accommodations!",
      clientImage: "assets/img/home-1/testimonial/client.png",
      clientName: "Michael Thompson",
      clientTitle: "World traveler",
      icon: "flaticon-left-quote",
    },
    {
      quote:
        "Booking with this agency was the best decision for our Bali trip! from flights to accommodations!",
      clientImage: "assets/img/home-1/testimonial/client.png",
      clientName: "Michael Thompson",
      clientTitle: "World traveler",
      icon: "flaticon-left-quote",
    },
    {
      quote:
        "Booking with this agency was the best decision for our Bali trip! from flights to accommodations!",
      clientImage: "assets/img/home-1/testimonial/client.png",
      clientName: "Michael Thompson",
      clientTitle: "World traveler",
      icon: "flaticon-left-quote",
    },
    {
      quote:
        "Booking with this agency was the best decision for our Bali trip! from flights to accommodations!",
      clientImage: "assets/img/home-1/testimonial/client.png",
      clientName: "Michael Thompson",
      clientTitle: "World traveler",
      icon: "flaticon-left-quote",
    },
  ];
  const testimonialImages = [
    {
      image: "assets/img/home-1/testimonial/01.jpg",
      colClass: "col-xl-7 col-md-6",
      animation: "img-custom-anim-left",
    },
    {
      image: "assets/img/home-1/testimonial/02.jpg",
      colClass: "col-xl-5 col-md-6",
      animation: "img-custom-anim-right",
    },
    {
      image: "assets/img/home-1/testimonial/03.jpg",
      colClass: "col-xl-5 col-md-6",
      animation: "img-custom-anim-left",
    },
    {
      image: "assets/img/home-1/testimonial/04.jpg",
      colClass: "col-xl-7 col-md-6",
      animation: "img-custom-anim-right",
      videoUrl: "https://www.youtube.com/watch?v=Cn4G2lZ_g2I",
    },
  ];
  return (
    <section
      className="testimonial-section section-padding fix bg-cover"
      style={{ backgroundImage: "url(assets/img/home-1/testimonial/bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-white text-anim">100k+ Customer Say Us</h2>
          <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            Join over 100,000 satisfied travelers who have experienced
          </p>
        </div>
        <div className="testimonial-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="testimonial-content">
                <Swiper
                  {...sliderProps.testimonialSlider}
                  className="swiper testimonial-slider"
                >
                  <div className="swiper-wrapper">
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="content">
                          <div className="icon">
                            <i className={testimonial.icon} />
                          </div>
                          <p>"{testimonial.quote}"</p>
                          <div className="client-image">
                            <img src={testimonial.clientImage} alt="img" />
                          </div>
                          <h4>{testimonial.clientName}</h4>
                          <span>{testimonial.clientTitle}</span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
                <div className="swiper-dot">
                  <div className="dot2" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-right-item">
                <div className="row g-2">
                  {testimonialImages.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.colClass} wow ${item.animation}`}
                    >
                      <div className="testimonial-image">
                        <img src={item.image} alt="img" />
                        {item.videoUrl && (
                          <a
                            href={item.videoUrl}
                            className="video-btn video-popup"
                          >
                            <i className="fa-duotone fa-play" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial2 = () => {
  const testimonials = [
    {
      clientImage: "assets/img/home-2/testimonial/client-1.png",
      quote:
        "Booking with this agency was the best decision for our Bali trip! flights to accommodations!",
      clientName: "Michael Thompson",
      clientRole: "Co-Traveler",
      icon: "flaticon-left-quote",
    },
    {
      clientImage: "assets/img/home-2/testimonial/client-2.png",
      quote:
        "I've traveled many agencies, but this team stands out attention to detail and 24/7 support!",
      clientName: "David Miller",
      clientRole: "Co-Traveler",
      icon: "flaticon-left-quote",
    },
    {
      clientImage: "assets/img/home-2/testimonial/client-3.png",
      quote:
        "I've traveled many agencies, but this team stands out attention to detail and 24/7 support!",
      clientName: "David Miller",
      clientRole: "Co-Traveler",
      icon: "flaticon-left-quote",
    },
    {
      clientImage: "assets/img/home-2/testimonial/client-3.png",
      quote:
        "I've traveled many agencies, but this team stands out attention to detail and 24/7 support!",
      clientName: "David Miller",
      clientRole: "Co-Traveler",
      icon: "flaticon-left-quote",
    },
  ];
  return (
    <section className="testimonial-section-2 section-padding fix pt-0">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">100k+ Customer Say Us</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Join over 100,000 satisfied travelers who have experienced
          </p>
        </div>
      </div>
      <Swiper
        {...sliderProps.testimonialSlider2}
        className="swiper testimonial-slider-2"
      >
        <div className="swiper-wrapper">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="testimonial-info-items">
                <div className="client-image">
                  <img src={testimonial.clientImage} alt="img" />
                </div>
                <div className="info-content">
                  <div className="icon">
                    <i className={testimonial.icon} />
                  </div>
                  <h3>"{testimonial.quote}"</h3>
                  <h6>
                    {testimonial.clientName},{" "}
                    <span>{testimonial.clientRole}</span>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper-dot-style">
        <div className="dot2" />
      </div>
    </section>
  );
};

export const Testimonial3 = () => {
  const testimonials = [
    { img: "assets/img/home-3/testimonial/01.jpg", bg: false },
    { img: "assets/img/home-3/testimonial/02.jpg", bg: true },
    { img: "assets/img/home-3/testimonial/03.jpg", bg: false },
  ];

  const testimonials2 = [
    { img: "assets/img/home-3/testimonial/01.jpg", bg: false },
    { img: "assets/img/home-3/testimonial/04.jpg", bg: true },
    { img: "assets/img/home-3/testimonial/05.jpg", bg: false },
  ];
  const testimonialContent = (
    <Fragment>
      <div className="icon">
        <i className="flaticon-left-quote" />
      </div>
      <p>
        "The trip exceeded all expectations! Every detail was perfectly planned
        an our local guide made travel adventure experience truly
        unforgettable."
      </p>
      <h5>Michael Thompson</h5>
      <span>Co-Traveler</span>
    </Fragment>
  );
  return (
    <section className="testimonial-section-3 section-padding fix">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">100k+ Customer Say Us</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Join over 100,000 satisfied travelers who have experienced
          </p>
        </div>
      </div>
      <div className="testimonial-box-wrapper style-1">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          speed={6000}
          allowTouchMove={false}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          modules={[Autoplay, FreeMode]}
          className="swiper testimonial-box-slider"
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide brand-slide-element">
              <div className={`testimonial-card-item-3 ${item.bg ? "bg" : ""}`}>
                <div className="thumb">
                  <img src={item.img} alt="img" />
                </div>
                <div className="content">{testimonialContent}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="testimonial-box-wrapper style-2">
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          speed={6000}
          allowTouchMove={false}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          dir="rtl"
          modules={[Autoplay, FreeMode]}
          className="swiper testimonial-box-slider-2"
        >
          {[...testimonials2, ...testimonials2].map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide brand-slide-element">
              <div className={`testimonial-card-item-3 ${item.bg ? "bg" : ""}`}>
                <div className="content">{testimonialContent}</div>
                <div className="thumb">
                  <img src={item.img} alt="img" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
