"use client";
import { sliderProps } from "@/utilities/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "./Counter";

export const Destination1 = () => {
  const destinations = [
    {
      image: "assets/img/home-2/destination/01.jpg",
      title: "London",
      subtitle: "United kingdom",
      colClass: "col-xl-5 col-md-6 col-lg-4",
      delay: ".3s",
    },
    {
      image: "assets/img/home-2/destination/02.jpg",
      title: "Indonesia",
      subtitle: "Waterfalls",
      colClass: "col-xl-3 col-md-6 col-lg-4",
      delay: ".5s",
    },
    {
      image: "assets/img/home-2/destination/03.jpg",
      title: "Pagoda",
      subtitle: "Japan",
      colClass: "col-xl-4 col-md-6 col-lg-4",
      delay: ".7s",
    },
    {
      image: "assets/img/home-2/destination/04.jpg",
      title: "Toscana, Italia",
      subtitle: "Leaning Tower",
      colClass: "col-xl-4 col-md-6 col-lg-4",
      delay: ".3s",
    },
    {
      image: "assets/img/home-2/destination/05.jpg",
      title: "Rome, Italy",
      subtitle: "Mausoleum",
      colClass: "col-xl-5 col-md-6 col-lg-4",
      delay: ".5s",
    },
    {
      image: "assets/img/home-2/destination/06.jpg",
      title: "Istanbul, Turkey",
      subtitle: "Bosporus Strait",
      colClass: "col-xl-3 col-md-6 col-lg-4",
      delay: ".7s",
    },
  ];
  return (
    <section className="popular-destination-section-2 section-padding fix">
      <div className="container custom-container">
        <div className="section-title text-center">
          <h2 className="text-anim">Explore Popular Destinations</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            One site{" "}
            <span className="count">
              <Counter end={30500} />
            </span>
            <b>+</b> most popular experience you’ll remember
          </p>
        </div>
        <div className="row g-2">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`${destination.colClass} wow fadeInUp`}
              data-wow-delay={destination.delay}
            >
              <div className="destination-item-2">
                <div className="destination-image">
                  <img src={destination.image} alt="img" />
                  <div className="destination-content">
                    <h3>
                      <Link href="/destination-details">
                        {destination.title}
                      </Link>
                    </h3>
                    <p>{destination.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Destination2 = () => {
  const destinations = [
    {
      image: "assets/img/home-3/destination/01.jpg",
      tours: 20,
      title: "United kingdom",
      subtitle: "London",
    },
    {
      image: "assets/img/home-3/destination/02.jpg",
      tours: 18,
      title: "Australia",
      subtitle: "Mausoleum",
    },
    {
      image: "assets/img/home-3/destination/03.jpg",
      tours: 20,
      title: "Japan City",
      subtitle: "Pagoda",
    },
    {
      image: "assets/img/home-3/destination/04.jpg",
      tours: 10,
      title: "Canada",
      subtitle: "Stonewall",
    },
    {
      image: "assets/img/home-3/destination/05.jpg",
      tours: 20,
      title: "Paris, France",
      subtitle: "Eiffel Tower",
    },
    {
      image: "assets/img/home-3/destination/06.jpg",
      tours: 28,
      title: "Germany",
      subtitle: "Castle",
    },
  ];
  return (
    <section className="destination-section-3 section-padding fix bg-color-4">
      <div className="left-shape">
        <img src="assets/img/home-3/destination/shape-1.png" alt="img" />
      </div>
      <div className="right-shape">
        <img src="assets/img/home-3/destination/shape-2.png" alt="img" />
      </div>
      <div className="bottom-shape">
        <img src="assets/img/home-3/destination/shape-3.png" alt="img" />
      </div>
      <div className="container-fluid">
        <div className="section-title text-center">
          <h2 className="text-anim">Trending Travel Destinations</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Crafting journeys, creating memories plan smarter, travel better
          </p>
        </div>
        <Swiper {...sliderProps.destiSlider} className="swiper desti-slider">
          <div className="swiper-wrapper">
            {destinations.map((destination, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="destination-radius-item-3">
                  <div className="destination-image">
                    <img src={destination.image} alt="img" />
                    <span>{destination.tours} Tours</span>
                  </div>
                  <div className="destination-content">
                    <h5>
                      <Link href="/destination-details">
                        {destination.title}
                      </Link>
                    </h5>
                    <p>{destination.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export const Destination3 = () => {
  const destinations = [
    {
      img: "assets/img/home-4/destination/07.jpg",
      title: "Luxury Suite Resorts",
      rating: "4.8(reviews 3.8k)",
      price: "$2450",
      area: "2760m",
      location: "Hills",
    },
    {
      img: "assets/img/home-4/destination/08.jpg",
      title: "Secrets Resort Playa",
      rating: "4.8(reviews 3.8k)",
      price: "$2300",
      area: "1640m",
      location: "Hills",
    },
    {
      img: "assets/img/home-4/destination/09.jpg",
      title: "Punta Cana resort",
      rating: "4.8(reviews 3.8k)",
      price: "$2450",
      area: "2760m",
      location: "Hills",
    },
    {
      img: "assets/img/home-4/destination/10.jpg",
      title: "Luxury Suite Resorts",
      rating: "4.8(reviews 3.8k)",
      price: "$2450",
      area: "2760m",
      location: "Hills",
    },
  ];
  return (
    <section className="destination-escap-section section-padding fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="text-anim">Escape, Relax &amp; Indulge</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Step into a world of comfort, elegance, and relaxation with the
              best <br /> resort experience designed just for you.
            </p>
          </div>
          <div className="array-buttons wow fadeInUp" data-wow-delay=".5s">
            <button className="array-prev">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button className="array-next">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        {...sliderProps.destinationSlider4}
        className="swiper destination-slider-4"
      >
        {destinations.map((dest, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="destination-escap-item">
              <div className="destination-escap-image">
                <img src={dest.img} alt="img" />
              </div>
              <div className="destination-escap-content">
                <div className="content-item">
                  <h4>
                    <Link href="/destination-details">{dest.title}</Link>
                  </h4>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-sharp fa-solid fa-star-half-stroke" />
                    <span>{dest.rating}</span>
                  </div>
                </div>
                <p>
                  Indulge in the pinnacle of sophistication with our luxury
                  suite resort here elegance and comfort come together in
                  perfect harmony.
                </p>
                <div className="bottom-item">
                  <h6>
                    {dest.price} <span>/per night</span>
                  </h6>
                  <h6>
                    {dest.area}
                    <span>/Apartment</span>
                  </h6>
                  <h6>
                    {dest.location}
                    <span>/Beverly</span>
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-dot-4">
        <div className="dot2" />
      </div>
    </section>
  );
};

export const Destination4 = () => {
  const destinations = [
    {
      img: "assets/img/home-4/destination/01.jpg",
      col: "col-xl-3",
      delay: ".3s",
    },
    {
      img: "assets/img/home-4/destination/02.jpg",
      col: "col-xl-6",
      delay: ".5s",
    },
    {
      img: "assets/img/home-4/destination/03.jpg",
      col: "col-xl-3",
      delay: ".7s",
    },
    {
      img: "assets/img/home-4/destination/04.jpg",
      col: "col-xl-6",
      delay: ".3s",
    },
    {
      img: "assets/img/home-4/destination/05.jpg",
      col: "col-xl-3",
      delay: ".5s",
    },
    {
      img: "assets/img/home-4/destination/06.jpg",
      col: "col-xl-3",
      delay: ".7s",
    },
  ];
  return (
    <section className="destination-section-4 fix">
      <div className="container-fluid">
        <div className="row g-2">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`${dest.col} col-lg-6 col-md-6 wow fadeInUp`}
              data-wow-delay={dest.delay}
            >
              <div className="destination-item-4">
                <div className="destination-image">
                  <img src={dest.img} alt="img" />
                  <div className="destination-content">
                    <h3>
                      <Link href="/destination-details">
                        Luxury Suite Resorts
                      </Link>
                    </h3>
                    <p>Bol, Croatia</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
