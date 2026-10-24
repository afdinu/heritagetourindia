import Link from "next/link";
import Counter from "./Counter";

export const Feature1 = () => {
  const features = [
    {
      icon: "flaticon-traveling-1",
      title: "Flight Booking & Reservation",
      description:
        "Take the stress to travel with our seamless flight booking and reservation services.",
      delay: ".2s",
    },
    {
      icon: "flaticon-hot-air-balloon",
      title: "Hotel & Resort Accommodation",
      description:
        "Enjoy a perfect stay with our carefully selected hotels and resorts.",
      delay: ".4s",
    },
    {
      icon: "flaticon-passport",
      iconStyle: "style-2",
      title: "Visa & Travel Assistance",
      description:
        "Travel confidently with our comprehensive Visa & Travel Assistance services.",
      delay: ".6s",
    },
    {
      icon: "flaticon-tent",
      iconStyle: "style-2",
      title: "Customized & Private Tours",
      description:
        "We design itineraries that match your interests, schedule, and budget.",
      delay: ".8s",
    },
  ];
  return (
    <section className="feature-section section-padding fix pt-0">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">All-in-one Travel Assistance</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Crafting journeys, creating memories plan smarter, travel better
          </p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={feature.delay}
            >
              <div className="feature-item">
                <div className="feature-icon-item">
                  <div className={`icon ${feature.iconStyle || ""}`}>
                    <i className={feature.icon} />
                  </div>
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Feature2 = () => {
  return (
    <section className="feature-exprience-section-2 fix header-bg">
      <div className="container custom-container-4">
        <div className="feature-exprience-wrapper">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 wow img-custom-anim-left">
              <div className="left-image">
                <img src="assets/img/home-2/feature/01.jpg" alt="img" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="counter-main-box wow img-custom-anim-top">
                <div className="content">
                  <h2>
                    <span className="count">
                      <Counter end={10} />
                    </span>
                    m+
                  </h2>
                  <p>Trusted clients / happy clients</p>
                  <div className="group-image">
                    <img src="assets/img/home-2/feature/group.png" alt="img" />
                  </div>
                </div>
                <div className="right-box">
                  <h2>
                    <span className="count">
                      <Counter end={150} />
                    </span>
                    +
                  </h2>
                  <p>by over 2500+ global satisfied clients</p>
                  <div className="star-item">
                    <img src="assets/img/home-2/feature/Image.png" alt="img" />
                    <div className="star">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="adventure-box-2 wow img-custom-anim-bottom">
                <div className="shape-2">
                  <img src="assets/img/home-2/feature/shape-bg.png" alt="img" />
                </div>
                <h3>
                  <Link href="/tour-details">
                    18+ years of experience <br />
                    in travel services
                  </Link>
                </h3>
                <div className="info-item">
                  <img src="assets/img/home-1/adventure/client.png" alt="img" />
                  <div className="content">
                    <h5>Mickel z Ponkoz</h5>
                    <span>Travel guide</span>
                  </div>
                </div>
                <div className="shape">
                  <img src="assets/img/home-1/adventure/shape.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow img-custom-anim-right">
              <div className="left-image">
                <img src="assets/img/home-2/feature/02.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Feature3 = () => {
  return (
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
  );
};

export const Feature4 = () => {
  return (
    <section className="feature-memories-section section-padding fix header-bg">
      <div className="container">
        <div className="feature-memories-wrapper">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="feature-memories-content">
                <div className="section-title mb-0">
                  <h2 className="text-white text-anim">
                    Crafting Memories, Keeping Promises
                  </h2>
                </div>
                <p className="text">
                  Focus is on keeping your journey safe, smooth, and
                  enjoyable—so you can explore the world with peace of mind.”
                </p>
                <div className="feature-memories-image">
                  <img src="assets/img/home-3/feature-image.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="feature-memories-right">
                <p className="text-2">
                  Travel with confidence knowing that your safety comes first.
                  We follow strict standards, partner with trusted providers,
                  and ensure every detail is carefully planned to give you a
                  worry-free experience.
                </p>
                <div className="feature-memories-item">
                  <div className="feature-item">
                    <div className="icon-item">
                      <div className="icon">
                        <i className="flaticon-traveling" />
                      </div>
                      <h5>Friendly Guide</h5>
                    </div>
                    <p>
                      Travel feels more special when you’re guided by someone
                      who cares.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="icon-item">
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                      <h5>Safety Travel</h5>
                    </div>
                    <p>
                      Your safety is our top priority on every journey carefully
                      accommodations
                    </p>
                  </div>
                </div>
                <div className="list-box-item">
                  <ul className="list">
                    <li>
                      <i className="fa-solid fa-badge-check" />
                      Personalized Itineraries
                    </li>
                    <li>
                      <i className="fa-solid fa-badge-check" />
                      Seamless Booking Experience
                    </li>
                    <li>
                      <i className="fa-solid fa-badge-check" />
                      Local Experience &amp; Authenticity
                    </li>
                    <li>
                      <i className="fa-solid fa-badge-check" />
                      Save &amp; Security Travels
                    </li>
                  </ul>
                  <div className="award-box">
                    <div className="icon">
                      <img src="assets/img/home-3/award.png" alt="img" />
                    </div>
                    <h5>
                      Award Winning <br />
                      Agency
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Feature5 = () => {
  return (
    <section className="feature-section-4 section-padding fix">
      <div className="container">
        <div className="feature-wrapper-4">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    Welcome To The Heart <br /> Of Luxury &amp; Hospitality
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  We believe travel is more than just a trip—it’s an experience
                  that shapes your life. Our mission is to create unforgettable
                  journeys that combine adventure, comfort, and authentic
                  cultural encounters.
                </p>
                <div
                  className="feature-left-item wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="feature-items">
                    <div className="icon">
                      <i className="flaticon-man" />
                    </div>
                    <h5>Curated by locals</h5>
                    <p>Trips are thoughtfully design and curated by locals</p>
                    <Link href="/contact" className="theme-btn">
                      Learn More Us
                    </Link>
                  </div>
                  <div className="feature-items">
                    <div className="icon">
                      <i className="flaticon-man" />
                    </div>
                    <h5>Self guided flexibility</h5>
                    <p>
                      Enjoy the freedom to travel own pace with our self-guided.
                    </p>
                    <div className="group-image">
                      <img
                        src="assets/img/home-4/feature/avater.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-right-item">
                <div className="feature-thumb">
                  <img
                    src="assets/img/home-4/feature/07.jpg"
                    alt="img"
                    className="wow img-custom-anim-top"
                  />
                  <div
                    className="hero-box bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/home-3/hero/shape.png)",
                    }}
                  >
                    <div className="top-item">
                      <div className="cont">
                        <h2>
                          <span className="count">
                            <Counter end={100} />
                          </span>
                          +
                        </h2>
                        <p>Tours Available</p>
                      </div>
                      <div className="small-image">
                        <img
                          src="assets/img/home-3/hero/small.jpg"
                          alt="img"
                          className="wow img-custom-anim-right"
                        />
                      </div>
                    </div>
                    <div className="bottom-item">
                      <div className="box">
                        <h2>4.8</h2>
                      </div>
                      <div className="right-content">
                        <img src="assets/img/home-3/hero/clat.png" alt="img" />
                        <div className="star">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-thumb style-4">
                  <img src="assets/img/home-4/feature/08.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
