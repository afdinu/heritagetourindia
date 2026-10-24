"use client";
import { Contact1 } from "@/components/Contact";
import TourSidebar from "@/components/TourSidebar";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const TourList = () => {
  const sortOptions = [
    "Bali, Indonesia",
    "Ella, Sri Lanka",
    "Soria, Castilla",
    "Giza, Egypt",
  ];

  const gridTours = [
    {
      img: "assets/img/home-1/tour/tour-8.jpg",
      discount: "10% Off",
      price: "$49.00",
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-9.jpg",
      price: "$49.00",
      title: "Scenic Kayaking Setup Along \n Duero River, Soria",
      location: "Soria, Castilla",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-10.jpg",
      discount: "13% Off",
      price: "$49.00",
      title: "Camel safaris along desert dunes near roads and small villages",
      location: "Giza, Egypt",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-11.jpg",
      price: "$49.00",
      title: "Tourists Visits the Aqueduct in Segovia Spain",
      location: "Segovia, CL, Spain",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-12.jpg",
      price: "$49.00",
      title: "Train on Nine Arches Bridge in \n Sri Lanka",
      location: "Ella, Sri Lanka",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-13.jpg",
      discount: "8% Off",
      price: "$49.00",
      title: "White buildings with blue \n accents near the Atlantic shore.",
      location: "Galle, Sri Lanka",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-14.jpg",
      price: "$49.00",
      title: "Man Sitting on Rocks next to \n Creek in Mountains",
      location: "Nepal",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-15.jpg",
      discount: "23% Off",
      price: "$49.00",
      title: "Aerial Photography of Cinque \n Terre in Italy",
      location: "Liguria, Italy",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-16.jpg",
      price: "$49.00",
      title: "Aerial Photography of Cinque \n Terre in Italy",
      location: "Liguria, Italy",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
    {
      img: "assets/img/home-1/tour/tour-8.jpg",
      discount: "10% Off",
      price: "$49.00",
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "3 persons",
    },
  ];

  const listTours = [
    {
      img: "assets/img/inner-page/tour-list/tour-01.jpg",
      featured: true,
      title: "White Canopy Tent on White Building Near Ocean",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: "$49.00",
      rating: "4.8 (190k+)",
    },
    {
      img: "assets/img/inner-page/tour-list/tour-02.jpg",
      title: "Man And Woman Standing On Deck, Maldives",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: "$49.00",
      rating: "4.8 (190k+)",
    },
    {
      img: "assets/img/inner-page/tour-list/tour-03.jpg",
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: "$49.00",
      rating: "4.8 (190k+)",
    },
    {
      img: "assets/img/inner-page/tour-list/tour-04.jpg",
      title: "Turquoise Sea off the Coast of Bali, Indonesia",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: "$49.00",
      rating: "4.8 (190k+)",
    },
    {
      img: "assets/img/inner-page/tour-list/tour-05.jpg",
      featured: true,
      title: "Blue Train on Rails in Sri Lanka Idalgashinna, UP, Sri Lanka",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: "$49.00",
      rating: "4.8 (190k+)",
    },
    {
      img: "assets/img/inner-page/tour-list/tour-06.jpg",
      title: "Traditional oriental shrine against forest on mountain",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: "$49.00",
      rating: "4.8 (190k+)",
    },
    {
      img: "assets/img/inner-page/tour-list/tour-07.jpg",
      title: "White buildings in blue accents near the Atlantic shore.",
      location: "Santorini, Greece",
      duration: "1 - 3 days",
      persons: "1 - 5",
      price: "$49.00",
      rating: "4.8 (190k+)",
    },
  ];
  return (
    <RoavioLayout>
      {/* Breadcrumb Section Start */}
      <div
        className="breadcrumb-wrapper-2 fix bg-cover"
        style={{
          backgroundImage: "url(assets/img/inner-page/breadcrumb/bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Tour List
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2">Tour List</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Tour List Section Start */}
      <section className="tour-list-section section-padding">
        <div className="container">
          <div className="tour-list-wrapper">
            <div className="row g-4">
              <div className="col-lg-4 col-12 order-2 order-xl-1">
                <TourSidebar />
              </div>
              <div className="col-lg-8 order-1 order-xl-2">
                <Tab.Container defaultActiveKey={"list"}>
                  <div className="tour-list-wrap">
                    <div className="list-wrap">
                      <Nav as={"ul"} className="nav">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            href="#grid"
                            eventKey="grid"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            <i className="fa-regular fa-grid-2" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            href="#grid"
                            eventKey="list"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            <i className="fas fa-bars" />
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <p>34 Tours found</p>
                    </div>
                    <div className="right-item">
                      <h6>Sort By</h6>
                      <div className="form-clt">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current"> Bali, Indonesia </span>
                          <ul className="list">
                            {sortOptions.map((option, i) => (
                              <li
                                key={i}
                                data-value={1}
                                className={`option ${
                                  i === 0 ? "selected focus" : ""
                                }`}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Tab.Content className="tab-content">
                    <Tab.Pane
                      eventKey="grid"
                      id="grid"
                      className="tab-pane fade"
                    >
                      <div className="row">
                        {gridTours.map((tour, i) => (
                          <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                            <div className="tour-place-item">
                              <div className="tour-place-image">
                                <img src={tour.img} alt="img" />
                                {tour.discount && <span>{tour.discount}</span>}
                                <div className="icon">
                                  <i className="fa-regular fa-heart" />
                                </div>
                              </div>
                              <div className="tour-place-content">
                                <div className="rating-item">
                                  <div className="star">
                                    <span>Rating</span>
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-sharp fa-solid fa-star-half-stroke" />
                                  </div>
                                  <h5>
                                    <span>Tours Price</span>
                                    {tour.price}
                                  </h5>
                                </div>
                                <h3>
                                  <Link href="/tour-details">
                                    {tour.title.split("\n").map((line, j) => (
                                      <span key={j}>
                                        {line}
                                        {j <
                                          tour.title.split("\n").length - 1 && (
                                          <br />
                                        )}
                                      </span>
                                    ))}
                                  </Link>
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
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="list"
                      id="list"
                      className="tab-pane fade show active"
                    >
                      {listTours.map((tour, i) => (
                        <div key={i} className="tour-list-box-items">
                          <div className="tour-image">
                            <img src={tour.img} alt="img" />
                            {tour.featured && <span>Featured</span>}
                            <div className="icon">
                              <i className="fa-regular fa-heart" />
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3>
                              <Link href="/tour-details">{tour.title}</Link>
                            </h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot" />
                                {tour.location}
                              </li>
                              <li>
                                <i className="fa-regular fa-timer" />
                                {tour.duration}
                              </li>
                              <li>
                                <i className="fa-solid fa-users" />
                                {tour.persons}
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>{tour.price}</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span>
                                  <i className="fa-solid fa-star-sharp" />
                                  {tour.rating}
                                </span>
                              </div>
                              <Link href="/tour-details" className="theme-btn">
                                View Tour
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <div className="page-nav-wrap">
                  <ul>
                    <li>
                      <a className="page-numbers active" href="#">
                        <i className="fa-solid fa-chevron-left" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        3
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers style-2" href="#">
                        <i className="fa-solid fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact1 />
    </RoavioLayout>
  );
};

export default TourList;
