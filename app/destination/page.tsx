import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const Destination = () => {
  const destinations = [
    {
      img: "assets/img/inner-page/destination/01.jpg",
      col: "col-xl-3",
      title: "London",
      location: "United kingdom",
    },
    {
      img: "assets/img/inner-page/destination/02.jpg",
      col: "col-xl-6",
      title: "Australia",
      location: "Mausoleum",
    },
    {
      img: "assets/img/inner-page/destination/03.jpg",
      col: "col-xl-3",
      title: "Pagoda",
      location: "Japan",
    },
    {
      img: "assets/img/inner-page/destination/04.jpg",
      col: "col-xl-6",
      title: "Rome, Italy",
      location: "Mausoleum",
    },
    {
      img: "assets/img/inner-page/destination/05.jpg",
      col: "col-xl-3",
      title: "Istanbul, Turkey",
      location: "Bosporus Strait",
    },
    {
      img: "assets/img/inner-page/destination/06.jpg",
      col: "col-xl-3",
      title: "Indonesia",
      location: "Waterfalls",
    },
    {
      img: "assets/img/inner-page/destination/07.jpg",
      col: "col-xl-3",
      title: "Santorini, Greece",
      location: "Canopy Tent",
    },
    {
      img: "assets/img/inner-page/destination/08.jpg",
      col: "col-xl-3",
      title: "Scotland",
      location: "Gray Cathedral",
    },
    {
      img: "assets/img/inner-page/destination/09.jpg",
      col: "col-xl-6",
      title: "Bern, BE, Switzerland",
      location: "Silver Vehicle",
    },
  ];
  const tours = [
    {
      img: "assets/img/home-1/tour/tour-8.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49.00",
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      description:
        "Bali, Indonesia, often called the Island the Gods, is a paradise known for its....",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      delay: ".2s",
    },
    {
      img: "assets/img/home-1/tour/tour-16.jpg",
      rating: "4.8",
      price: "$49.00",
      title: "Red Camper Van Among Tall Pine Trees Outdoors",
      description:
        "Escape into nature with the charm of a red camper van nestled among......",
      location: "Netherlands",
      duration: "1 - 3 days",
      delay: ".4s",
    },
    {
      img: "assets/img/home-1/tour/tour-17.jpg",
      rating: "4.8",
      price: "$49.00",
      title: "Scenic Kayaking Setup Along Duero River, Soria",
      description:
        "Soria, located in the region of Castilla y León, Spain, is a charming city......",
      location: "Soria, Castilla",
      duration: "1 - 3 days",
      delay: ".6s",
    },
    {
      img: "assets/img/home-1/tour/tour-18.jpg",
      rating: "4.8",
      price: "$49.00",
      title: "Tourists Visits the Aqueduct in Segovia Spain",
      description:
        "Bali, Indonesia, often called the Island the Gods, is a paradise known for its....",
      location: "Nepal",
      duration: "1 - 3 days",
      delay: ".8s",
    },
    {
      img: "assets/img/home-1/tour/tour-19.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49.00",
      title: "Camel safaris desert dunes near roads and small villages",
      description:
        "Embark on a magical camel safari across golden desert dunes, where.....",
      location: "Giza, Egypt",
      duration: "1 - 3 days",
      delay: ".2s",
    },
    {
      img: "assets/img/home-1/tour/tour-20.jpg",
      rating: "4.8",
      price: "$49.00",
      title: "Tourists Visits the Aqueduct in Segovia Spain",
      description:
        "Bali, Indonesia, often called the Island the Gods, is a paradise known for its....",
      location: "Segovia, Spain",
      duration: "1 - 3 days",
      delay: ".4s",
    },
    {
      img: "assets/img/home-1/tour/tour-21.jpg",
      discount: "10% Off",
      rating: "4.8",
      price: "$49.00",
      title: "Train on Nine Arches Bridge in Sri Lanka",
      description:
        "The iconic Nine Arches Bridge in Ella, Sri Lanka, is a breathtaking sight.....",
      location: "Sri Lanka",
      duration: "1 - 3 days",
      delay: ".6s",
    },
    {
      img: "assets/img/home-1/tour/tour-22.jpg",
      rating: "4.8",
      price: "$49.00",
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      description:
        "Bali, Indonesia, often called the Island the Gods, is a paradise known for its....",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      delay: ".8s",
    },
  ];
  return (
    <RoavioLayout>
      <div
        className="breadcrumb-wrapper-4 fix bg-cover"
        style={{
          backgroundImage: "url(assets/img/inner-page/breadcrumb/bg-3.jpg)",
        }}
      >
        <div className="container">
          <div className="breadcrumb-top-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Destinations
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href="/"> Home </Link>
                </li>
                <li className="style-2 style-3">Destinations</li>
              </ul>
            </div>
            <div className="content style-2">
              <div className="text">
                <h2>
                  <span className="count">
                    <Counter end={500} />
                  </span>
                  +
                </h2>
                <p>Explore 500+ Destinations</p>
              </div>
              <div className="text">
                <h2>
                  <span className="count">
                    <Counter end={10} />
                  </span>
                  +
                </h2>
                <p>Professional Team Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Section-4 Start */}
      <section className="destination-section-4 section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Explore Popular Destinations</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              One site{" "}
              <span className="count">
                <Counter end={30500} />
              </span>
              <b>+</b> most popular experience you'll remember
            </p>
          </div>
          <div className="destination-one-wrapper">
            <div className="row g-3">
              {destinations.map((dest, i) => (
                <div key={i} className={`${dest.col} col-lg-4 col-md-6`}>
                  <div className="destination-image-item">
                    <div className="destination-image">
                      <img src={dest.img} alt="img" />
                      <div className="destination-content">
                        <h3>
                          <Link href="/destination-details">{dest.title}</Link>
                        </h3>
                        <p>{dest.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section-2 Start */}
      <section
        className="feature-section-2 bg-cover"
        style={{ backgroundImage: "url(assets/img/home-2/feature-bg.jpg)" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="feature-bg-content">
                <h2 className="text-anim">
                  Wildlife
                  <img src="assets/img/home-2/client-image.png" alt="img" />
                  Safaris
                </h2>
                <h2 className="text wow fadeInUp" data-wow-delay=".5s">
                  Camping
                </h2>
                <div
                  className="feature-bottom-content wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <p>
                    Experience the thrill of nature never before with our
                    exclusive wildlife safaris.
                  </p>
                  <h3>$2000</h3>
                  <Link
                    href="/destination-details"
                    className="theme-btn"
                    data-animation="fadeInUp"
                    data-delay="1.3s"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tour-place Section Start */}
      <section className="tour-place-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Uncover Unique Tours Places</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              One site{" "}
              <span className="count">
                <Counter end={30500} />
              </span>
              <b>+</b> most popular experience you'll remember
            </p>
          </div>
          <div className="row">
            {tours.map((tour, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={tour.delay}
              >
                <div className="tour-place-item">
                  <div className="tour-place-image">
                    <img src={tour.img} alt="img" />
                    {tour.discount && <span>{tour.discount}</span>}
                    <div className="icon">
                      <i className="fa-regular fa-heart" />
                    </div>
                  </div>
                  <div className="tour-place-content style-2">
                    <div className="rating-item">
                      <div className="star">
                        <span>({tour.rating})</span>
                        <i className="fa-solid fa-star" />
                      </div>
                      <h5>
                        <span>Price</span>
                        {tour.price}
                      </h5>
                    </div>
                    <h3>
                      <Link href="/tour-details">{tour.title}</Link>
                    </h3>
                    <p>{tour.description}</p>
                    <ul className="tour-list">
                      <li>
                        <i className="fa-regular fa-location-dot" />
                        {tour.location}
                      </li>
                      <li>
                        <i className="fa-regular fa-clock" />
                        {tour.duration}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <Contact1 />
    </RoavioLayout>
  );
};

export default Destination;
