import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const TourGrid = () => {
  const filters = [
    {
      label: "Filter by price",
      options: ["Filter by price", "0", "5,000", "10,000"],
    },
    {
      label: "Tour Types",
      options: [
        "Tour Types",
        "Travel destinations",
        "Local places",
        "Adventure",
      ],
    },
    {
      label: "Destinations",
      options: ["Destinations", "Singapore", "Thailand", "Maldives"],
    },
    {
      label: "Language",
      options: ["Language", "Bangla", "English", "Hindi"],
    },
    {
      label: "Durations",
      options: ["Durations", "1 Day", "2 Day", "3 Day"],
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
    {
      img: "assets/img/home-1/tour/tour-11.jpg",
      price: "$49.00",
      title: "Tourists Visits the Aqueduct in Segovia Spain",
      location: "Segovia, CL, Spain",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".8s",
    },
    {
      img: "assets/img/home-1/tour/tour-12.jpg",
      price: "$49.00",
      title: "Train on Nine Arches Bridge in \n Sri Lanka",
      location: "Ella, Sri Lanka",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".2s",
    },
    {
      img: "assets/img/home-1/tour/tour-13.jpg",
      discount: "8% Off",
      price: "$49.00",
      title: "White buildings with blue \n accents near the Atlantic shore.",
      location: "Galle, Sri Lanka",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".4s",
    },
    {
      img: "assets/img/home-1/tour/tour-14.jpg",
      price: "$49.00",
      title: "Man Sitting on Rocks next to \n Creek in Mountains",
      location: "Nepal",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".6s",
    },
    {
      img: "assets/img/home-1/tour/tour-15.jpg",
      discount: "23% Off",
      price: "$49.00",
      title: "Aerial Photography of Cinque \n Terre in Italy",
      location: "Liguria, Italy",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".8s",
    },
    {
      img: "assets/img/home-1/tour/tour-16.jpg",
      price: "$49.00",
      title: "Aerial Photography of Cinque \n Terre in Italy",
      location: "Liguria, Italy",
      duration: "1 - 3 days",
      persons: "3 persons",
      delay: ".9s",
    },
  ];

  const pagination = [
    { icon: "fa-solid fa-chevron-left", active: true },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { icon: "fa-solid fa-chevron-right", style2: true },
  ];
  return (
    <RoavioLayout>
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
                Tour Grid
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2">Tour Grid</li>
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
      {/* Tour Grid Section Start */}
      <section className="tour-grid-section section-padding fix">
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

          <div className="box-item-5">
            {filters.map((filter, i) => (
              <div key={i} className="form-clt">
                <div className="form">
                  <select className="single-select w-100">
                    {filter.options.map((option, j) => (
                      <option key={j}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
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

          <div className="page-nav-wrap text-center">
            <ul>
              {pagination.map((page, i) => (
                <li key={i}>
                  <a
                    className={`page-numbers ${page.active ? "active" : ""} ${
                      page.style2 ? "style-2" : ""
                    }`}
                    href="#"
                  >
                    {page.icon ? <i className={page.icon} /> : page.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Contact1 />
    </RoavioLayout>
  );
};

export default TourGrid;
