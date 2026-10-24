"use client";
import { sliderProps } from "@/utilities/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "./Counter";

export const TourPlace1 = () => {
  const tourPlaces = [
    {
      image: "assets/img/home-1/tour/tour-8.jpg",
      discount: "10% Off",
      rating: 5,
      price: 49.0,
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".2s",
    },
    {
      image: "assets/img/home-1/tour/tour-9.jpg",
      rating: 4.5,
      price: 49.0,
      title: "Scenic Kayaking Setup Along Duero River, Soria",
      location: "Soria, Castilla",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".4s",
    },
    {
      image: "assets/img/home-1/tour/tour-10.jpg",
      discount: "13% Off",
      rating: 4.5,
      price: 49.0,
      title: "Camel safaris along desert dunes near roads and small villages",
      location: "Giza, Egypt",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".6s",
    },
    {
      image: "assets/img/home-1/tour/tour-11.jpg",
      rating: 4.5,
      price: 49.0,
      title: "Tourists Visits the Aqueduct in Segovia Spain",
      location: "Segovia, CL, Spain",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".8s",
    },
    {
      image: "assets/img/home-1/tour/tour-12.jpg",
      rating: 4.5,
      price: 49.0,
      title: "Train on Nine Arches Bridge in Sri Lanka",
      location: "Ella, Sri Lanka",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".2s",
    },
    {
      image: "assets/img/home-1/tour/tour-13.jpg",
      discount: "8% Off",
      rating: 4.5,
      price: 49.0,
      title: "White buildings with blue accents near the Atlantic shore.",
      location: "Galle, Sri Lanka",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".4s",
    },
    {
      image: "assets/img/home-1/tour/tour-14.jpg",
      rating: 4.5,
      price: 49.0,
      title: "Man Sitting on Rocks next to Creek in Mountains",
      location: "Nepal",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".6s",
    },
    {
      image: "assets/img/home-1/tour/tour-15.jpg",
      discount: "23% Off",
      rating: 4.5,
      price: 49.0,
      title: "Aerial Photography of Cinque Terre in Italy",
      location: "Liguria, Italy",
      duration: "1 - 3 days",
      persons: 3,
      delay: ".8s",
    },
  ];
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <i key={`full-${i}`} className="fa-solid fa-star" />
        ))}
        {hasHalfStar && <i className="fa-sharp fa-solid fa-star-half-stroke" />}
      </>
    );
  };
  return (
    <section className="tour-place-section section-padding fix">
      <div className="container custom-container-2">
        <div className="section-title text-center">
          <h2 className="text-anim">Uncover Unique Tours Places</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            One site{" "}
            <span className="count">
              <Counter end={30500} />
            </span>
            <b>+</b> most popular experience you’ll remember
          </p>
        </div>
        <div className="row">
          {tourPlaces.map((tour, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={tour.delay}
            >
              <div className="tour-place-item">
                <div className="tour-place-image">
                  <img src={tour.image} alt="img" />
                  {tour.discount && <span>{tour.discount}</span>}
                  <div className="icon">
                    <i className="fa-regular fa-heart" />
                  </div>
                </div>
                <div className="tour-place-content">
                  <div className="rating-item">
                    <div className="star">
                      <span>Rating</span>
                      {renderStars(tour.rating)}
                    </div>
                    <h5>
                      <span>Tours Price</span>${tour.price.toFixed(2)}
                    </h5>
                  </div>
                  <h3>
                    <Link href="/tour-details">{tour.title}</Link>
                  </h3>
                  <ul className="tour-list">
                    <li>
                      <i className="fa-regular fa-location-dot" />
                      {tour.location}
                    </li>
                    <li>
                      <i className="fa-regular fa-clock" />
                      {tour.duration}
                    </li>
                    <li>
                      <i className="fa-regular fa-users" />
                      {tour.persons} persons
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TourPlace2 = () => {
  const tourPlaces = [
    {
      image: "assets/img/home-2/tour/tour-7.jpg",
      badge: "Featured",
      title: "White Canopy Tent on White Building Near Ocean",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".2s",
    },
    {
      image: "assets/img/home-2/tour/tour-8.jpg",
      badge: "Featured",
      title: "Man And Woman Standing On Deck",
      location: "Maldives",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".4s",
    },
    {
      image: "assets/img/home-2/tour/tour-9.jpg",
      badge: "Featured",
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".6s",
    },
    {
      image: "assets/img/home-2/tour/tour-10.jpg",
      badge: "Featured",
      title: "Turquoise Sea off the Coast of Bali, Indonesia",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".8s",
    },
    {
      image: "assets/img/home-2/tour/tour-11.jpg",
      badge: "Featured",
      title: "Blue Train on Rails in Sri Lanka Idalgashinna, UP, Sri Lanka",
      location: "Sri Lanka",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".2s",
    },
    {
      image: "assets/img/home-2/tour/tour-12.jpg",
      badge: "Featured",
      title: "Traditional oriental shrine against forest on mountain",
      location: "Kyoto, Japan",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".4s",
    },
    {
      image: "assets/img/home-2/tour/tour-13.jpg",
      badge: "Featured",
      title: "White buildings in blue accents near the Atlantic shore.",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".6s",
    },
    {
      image: "assets/img/home-2/tour/tour-14.jpg",
      badge: "Featured",
      title: "Scenic Kayaking Setup Along Duero River, Soria",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: 49.0,
      rating: 4.8,
      reviews: "190k+",
      delay: ".8s",
    },
  ];
  return (
    <section className="tour-place-section-2 section-padding fix">
      <div className="container custom-container-2">
        <div className="section-title text-center">
          <h2 className="text-anim">Uncover Unique Tours Places</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            One site{" "}
            <span className="count">
              <Counter end={30500} />
            </span>
            <b>+</b> most popular experience you’ll remember
          </p>
        </div>
        <div className="row">
          {tourPlaces.map((tour, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={tour.delay}
            >
              <div className="tour-place-item-2">
                <div className="tour-place-image">
                  <img src={tour.image} alt="img" />
                  <div className="icon">
                    <i className="fa-regular fa-heart" />
                  </div>
                  <span>{tour.badge}</span>
                </div>
                <div className="tour-place-content">
                  <h3>
                    <Link href="/tour-details">{tour.title}</Link>
                  </h3>
                  <ul className="tour-list">
                    <li>
                      <i className="fa-regular fa-location-dot" />
                      {tour.location}
                    </li>
                    <li>
                      <i className="fa-regular fa-clock" />
                      {tour.duration}
                    </li>
                    <li>
                      <i className="fa-regular fa-users" />
                      {tour.persons}
                    </li>
                  </ul>
                  <div className="tour-place-bottom">
                    <div className="price">
                      <p>Start Price</p>
                      <h5>${tour.price.toFixed(2)}</h5>
                    </div>
                    <div className="rating">
                      <span>Rating</span>
                      <h6>
                        <i className="fa-solid fa-star" />
                        {tour.rating} ({tour.reviews})
                      </h6>
                    </div>
                    <Link href="/tour-details" className="theme-btn">
                      View Tour
                    </Link>
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

export const TourPlace3 = () => {
  const commonTours = [
    {
      image: "assets/img/home-3/tour/01.jpg",
      badge: "Featured",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "White Canopy Tent on White Building Near Ocean",
      price: 49.0,
      duration: "3 - Days",
    },
    {
      image: "assets/img/home-3/tour/02.jpg",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "White Canopy Tent on White Building Near Ocean",
      price: 49.0,
      duration: "3 - Days",
    },
    {
      image: "assets/img/home-3/tour/03.jpg",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "Sirmione's castle, on lake garda",
      titleClass: "bottom",
      price: 49.0,
      duration: "3 - Days",
    },
    {
      image: "assets/img/home-3/tour/04.jpg",
      badge: "Featured",
      badgeStyle: "style-bg",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "Hi Angle View of Architecture on Rock Formations",
      price: 49.0,
      duration: "3 - Days",
    },
    {
      image: "assets/img/home-3/tour/05.jpg",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "Asian building located on mountain in gloomy weather",
      price: 49.0,
      duration: "3 - Days",
    },
    {
      image: "assets/img/home-3/tour/06.jpg",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "Castle on Top of Rugged Hill Surrounded by Green Trees",
      price: 49.0,
      duration: "3 - Days",
    },
    {
      image: "assets/img/home-3/tour/07.jpg",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "Sirmione's castle, on lake garda",
      titleClass: "bottom",
      price: 49.0,
      duration: "3 - Days",
    },
    {
      image: "assets/img/home-3/tour/08.jpg",
      badge: "Featured",
      badgeStyle: "style-bg",
      location: "Santorini, Greece",
      rating: 4.8,
      reviews: "190k+",
      title: "Hi Angle View of Architecture on Rock Formations",
      price: 49.0,
      duration: "3 - Days",
    },
  ];
  const tourTabs = [
    {
      id: "technical",
      icon: "assets/img/home-3/icon/01.svg",
      title: "Family Tours",
      tabIndex: -1,
      tours: commonTours,
    },
    {
      id: "work",
      icon: "assets/img/home-3/icon/02.svg",
      title: "Couple Tours",
      tours: commonTours,
    },
    {
      id: "ambition",
      icon: "assets/img/home-3/icon/03.svg",
      title: "Group Tours",
      tabIndex: -1,
      tours: commonTours,
    },
    {
      id: "skill",
      icon: "assets/img/home-3/icon/04.svg",
      title: "Adventure Tours",
      tabIndex: -1,
      tours: commonTours,
    },
    {
      id: "design",
      icon: "assets/img/home-3/icon/04.svg",
      title: "Safari & Wildlife",
      tabIndex: -1,
      tours: commonTours,
    },
  ];
  return (
    <section className="tour-places-section-3 section-padding pt-0 fix">
      <div className="array-buttons">
        <button className="array-prev">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button className="array-next">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
      <div className="container custom-container-7">
        <div className="section-title text-center">
          <h2 className="text-anim">Uncover Unique Tours Places</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            One site{" "}
            <span className="count color-4">
              <Counter end={30500} />
            </span>
            + most popular experience you’ll remember
          </p>
        </div>
        <Tab.Container defaultActiveKey="technical">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <Swiper {...sliderProps.topSlider} className="swiper top-slider">
                <div className="swiper-wrapper">
                  {tourTabs.map((tab, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <Nav as={"ul"} className="nav" role="tablist">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            href={`#${tab.id}`}
                            eventKey={tab.id}
                            data-bs-toggle="tab"
                            className={`nav-link`}
                            role="tab"
                            tabIndex={tab.tabIndex}
                          >
                            <img src={tab.icon} alt="img" />
                            {tab.title}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
          <Tab.Content className="tab-content">
            {tourTabs.map((tab, tabIndex) => (
              <Tab.Pane
                key={tabIndex}
                eventKey={tab.id}
                className={`tab-pane fade`}
                role="tabpanel"
              >
                <div className="row">
                  {tab.tours.map((tour, tourIndex) => (
                    <div key={tourIndex} className="col-xl-3 col-lg-6 col-md-6">
                      <div className="tour-places-items-3">
                        <div className="tour-places-image">
                          <img src={tour.image} alt="img" />
                          {tour.badge && (
                            <span className={tour.badgeStyle}>
                              {tour.badge}
                            </span>
                          )}
                          <div className="icon">
                            <i className="fa-regular fa-heart" />
                          </div>
                        </div>
                        <div className="tour-place-content">
                          <ul className="tour-list">
                            <li>
                              <i className="fa-regular fa-location-dot" />
                              {tour.location}
                            </li>
                            <li className="style-2">
                              <i className="fa-solid fa-star" />
                              {tour.rating} ({tour.reviews})
                            </li>
                          </ul>
                          <h4 className={tour.titleClass}>
                            <Link href="/tour-details">{tour.title}</Link>
                          </h4>
                          <div className="tour-place-bottom">
                            <div className="price">
                              <p>Start Price</p>
                              <h5>${tour.price.toFixed(2)}</h5>
                            </div>
                            <div className="price">
                              <p>Durations</p>
                              <h5>{tour.duration}</h5>
                            </div>
                            <Link href="/tour-details" className="theme-btn">
                              View Tour
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
