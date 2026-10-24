import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const TourNoSidebar = () => {
  const tours = [
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-13.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Relinking Beach in Nusa panada island",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-14.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Tourists Visits the Aqueduct in Segovia",
      location: "Nepal",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-15.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Red Camper Van Among Tall Pine Trees",
      location: "Thailand",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-16.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Camel safaris desert dunes near roads",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-17.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Tourists Visits the Aqueduct in Segovia",
      location: "Spain",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-18.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Train on Nine Arches Bridge in Sri Lanka",
      location: "Sri Lanka",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-19.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Relinking Beach in Nusa panada island",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-20.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Man Sitting on Rocks next to Creek",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-21.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Aerial Photography of Cinque Terre in Italy",
      location: "Italy",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
    {
      img: "assets/img/inner-page/tour-sidebar/sideber-22.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49",
      title: "Man And Woman Standing On Deck",
      location: "Maldives",
      duration: "1 - 3 days",
      persons: "1 - 8 persons",
    },
  ];

  const socialLinks = [
    "fa-brands fa-facebook",
    "fa-brands fa-twitter",
    "fa-brands fa-linkedin-in",
  ];

  return (
    <RoavioLayout>
      {/* Breadcrumb Section Start */}
      <div
        className="breadcrumb-wrapper-2 style-tour-page bg-cover"
        style={{
          backgroundImage: "url(assets/img/inner-page/breadcrumb/bg-4.jpg)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Tour filter no sidebar
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2">Tour filter no sidebar</li>
            </ul>
            <div className="from-box wow fadeInUp" data-wow-delay=".3s">
              <h3>Find adventure that suits your needs</h3>
              <div className="box-item-2">
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Where to go</option>
                      <option>Travel destinations</option>
                      <option>Local places</option>
                      <option>Adventure</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Where to go</option>
                      <option>Travel destinations</option>
                      <option>Local places</option>
                      <option>Adventure</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Travel type</option>
                      <option>Travel destinations</option>
                      <option>Local places</option>
                      <option>Adventure</option>
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
      {/* Tour sidebar Section Start */}
      <section className="tour-no-sidebar-section section-padding">
        <div className="container custom-container-6">
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
          <div className="tour-no-sidebar-wrapper">
            <div className="tour-no-ideber-top">
              <div className="side-left">
                <h6>15 Tours found</h6>
              </div>
              <div className="side-right">
                <h6>Sort By</h6>
                <div className="form-clt">
                  <div className="nice-select" tabIndex={0}>
                    <span className="current"> Bali, Indonesia </span>
                    <ul className="list">
                      <li data-value={1} className="option selected focus">
                        Bali, Indonesia
                      </li>
                      <li data-value={1} className="option">
                        Ella, Sri Lanka
                      </li>
                      <li data-value={1} className="option">
                        Soria, Castilla
                      </li>
                      <li data-value={1} className="option">
                        Giza, Egypt
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {tours.map((tour, i) => (
                <div key={i} className="col-lg-6 col-md-6">
                  <div className="tour-no-sideber-item">
                    <div className="sideber-image">
                      <img src={tour.img} alt="img" />
                      <span>{tour.discount}</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart" />
                      </div>
                    </div>
                    <div className="sideber-content">
                      <div className="rating-item">
                        <div className="star">
                          {[...Array(5)].map((_, j) => (
                            <i key={j} className="fa-solid fa-star" />
                          ))}
                          <span>({tour.rating})</span>
                        </div>
                        <h5>
                          <span>From</span>
                          {tour.price}
                        </h5>
                      </div>
                      <h4>
                        <Link href="/tour-details">{tour.title}</Link>
                      </h4>
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
                      <div className="share-item">
                        <div className="small-button">
                          <Link
                            href="/destination-details"
                            className="theme-btn"
                          >
                            Book Now
                          </Link>
                        </div>
                        <div className="social-profile">
                          <ul>
                            {socialLinks.map((icon, j) => (
                              <li key={j}>
                                <a href="#">
                                  <i className={icon} />
                                </a>
                              </li>
                            ))}
                          </ul>
                          <span className="plus-btn">
                            <i className="fa-regular fa-share-nodes" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Contact1 />
    </RoavioLayout>
  );
};

export default TourNoSidebar;
