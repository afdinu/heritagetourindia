import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const Destination2 = () => {
  const destinations = [
    {
      img: "assets/img/inner-page/destination/10.jpg",
      tours: "20 Tours",
      title: "United kingdom",
      location: "London",
      delay: ".2s",
    },
    {
      img: "assets/img/inner-page/destination/11.jpg",
      tours: "18 Tours",
      title: "Australia",
      location: "Mausoleum",
      delay: ".4s",
    },
    {
      img: "assets/img/inner-page/destination/12.jpg",
      tours: "20 Tours",
      title: "Japan City",
      location: "Pagoda",
      delay: ".6s",
    },
    {
      img: "assets/img/inner-page/destination/13.jpg",
      tours: "10 Tours",
      title: "Canada",
      location: "Stonewall",
      delay: ".8s",
    },
    {
      img: "assets/img/inner-page/destination/14.jpg",
      tours: "20 Tours",
      title: "Paris, France",
      location: "Eiffel Tower, Paris",
      delay: ".2s",
    },
    {
      img: "assets/img/inner-page/destination/15.jpg",
      tours: "28 Tours",
      title: "Germany",
      location: "Scenic Of Castle",
      delay: ".4s",
    },
    {
      img: "assets/img/inner-page/destination/16.jpg",
      tours: "32 Tours",
      title: "Egypt",
      location: "Camel Resting",
      delay: ".6s",
    },
    {
      img: "assets/img/inner-page/destination/17.jpg",
      tours: "16 Tours",
      title: "Frankfurt, Germany",
      location: "Tower Framed",
      delay: ".8s",
    },
  ];
  const benefits = [
    {
      type: "item",
      icon: "flaticon-traveling",
      title: "Expert Travel Guide",
      description:
        "Travel professionals who help destinations, accommodations, and activities tailored.",
    },
    {
      type: "image",
      img: "assets/img/home-2/tour/tour-1.jpg",
    },
    {
      type: "item",
      icon: "flaticon-promotion",
      title: "Deals & Discounts",
      description:
        "Access special rates and offers not available to general public, ensuring the best value",
    },
    {
      type: "image",
      img: "assets/img/home-2/tour/tour-2.jpg",
    },
    {
      type: "item",
      icon: "flaticon-roadmap",
      title: "Custom Tour Plan",
      description:
        "Enjoy trips designed around your preferences, whether you want a relaxing beach holiday",
    },
    {
      type: "image",
      img: "assets/img/home-2/tour/tour-3.jpg",
    },
    {
      type: "item",
      icon: "flaticon-tourist",
      title: "Local Guides Authentic",
      description:
        "Immerse yourself local culture with trusted guides who provide insider tips and hidden",
    },
    {
      type: "image",
      img: "assets/img/home-2/tour/tour-6.jpg",
    },
    {
      type: "image",
      img: "assets/img/home-2/tour/tour-4.jpg",
      col: "col-xl-4",
    },
    {
      type: "item",
      icon: "flaticon-mouse",
      title: "Hassle-Free Booking",
      description:
        "Save time and effort with a single platform to book flights, hotels, activities, transportation",
    },
    {
      type: "image",
      img: "assets/img/home-2/tour/tour-5.jpg",
    },
  ];
  const tours = [
    {
      img: "assets/img/home-1/tour/tour-8.jpg",
      discount: "10% Off",
      price: "$49.00",
      title: "Relinking Beach in Nusa panada island, Bali, Indonesia",
      location: "Bali, Indonesia",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".2s",
    },
    {
      img: "assets/img/home-1/tour/tour-9.jpg",
      price: "$49.00",
      title: "Scenic Kayaking Setup Along \n Duero River, Soria",
      location: "Soria, Castilla",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".4s",
    },
    {
      img: "assets/img/home-1/tour/tour-10.jpg",
      discount: "13% Off",
      price: "$49.00",
      title: "Camel safaris along desert dunes near roads and small villages",
      location: "Giza, Egypt",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".6s",
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
      {/* Popular-Destination Section-4 Start */}
      <section className="popular-destination-section-4 section-padding fix">
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
          <div className="row">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={dest.delay}
              >
                <div className="destination-radius-item">
                  <div className="destination-image">
                    <img src={dest.img} alt="img" />
                    <span>{dest.tours}</span>
                  </div>
                  <div className="destination-content">
                    <h5>
                      <Link href="/destination-details">{dest.title}</Link>
                    </h5>
                    <p>{dest.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tour-benefit Section-2 Start */}
      <section className="tour-benefit-section-2 section-padding fix bg-color">
        <div className="container custom-container-4">
          <div className="section-title text-center">
            <h2 className="text-anim">How to Benefit Our Tours</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Make the most of your travel experience with our carefully
              <br />
              curated tours designed to offer convenience
            </p>
          </div>
          <div className="tour-benefit-wrapper-2 style-2">
            <span className="right-border" />
            <div className="row g-4 justify-content-center">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={`${benefit.col || "col-xl-2"} col-md-6 col-lg-4`}
                >
                  {benefit.type === "item" ? (
                    <div className="tour-benefit-item-2">
                      <div className="icon">
                        <i className={benefit.icon} />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/tour-details">{benefit.title}</Link>
                        </h5>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="tour-benefit-image">
                      <img src={benefit.img} alt="img" />
                    </div>
                  )}
                </div>
              ))}
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
              <b>+</b> most popular experience you’ll remember
            </p>
          </div>
          <div className="row">
            {tours.map((tour, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
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
                            {j < tour.title.split("\n").length - 1 && <br />}
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
        </div>
      </section>
      <Contact1 />
    </RoavioLayout>
  );
};

export default Destination2;
