"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Counter from "./Counter";

export const About1 = () => {
  return (
    <section className="about-section section-right fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            <div className="col-xl-5 col-lg-4">
              <div className="about-left-item">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    Explore India  <br /> with a Local Tour Guide <br /> with Us.
                  </h2>
                </div>
                <h6 className="wow fadeInUp" data-wow-delay=".5s">
                  Local stories. Personal tours. Memorable journeys.{" "}
                  {/* <span className="count">
                    <Counter end={20} decimals={0} />
                  </span>
                  <b>+</b> years of experience */}
                </h6>
                <div className="about-image wow img-custom-anim-left">
                    <img src="assets/img/home-1/about/jaipur-local-tour-guide.webp" alt="jaipur local tour guide" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="about-right-item">
                <div className="about-image-item">
                  <div className="about-image-2 wow img-custom-anim-left">
                  <img src="assets/img/home-1/about/taj-mahal-tour-guide.webp" alt="agra-tour-guide" />
                  </div>
                  <div className="about-box wow img-custom-anim-right">
                    <div className="icon">
                      <i className="flaticon-travel" />
                    </div>
                    <h5>Guided at Every Step</h5>
                    <p>Discover each place with helpful local guidance.</p>
                  </div>
                </div>
                <div className="content">
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    At Heritage Tour Guide India, we help you explore historic monuments, local markets, and cultural landmarks with a local tour guide. Choose a city tour or plan a journey around your interests. Learn the stories behind each place and enjoy exploring at your own pace.
                  </p>
                  <div className="list-item wow fadeInUp" data-wow-delay=".5s">
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check" />
                        Local Tour Guides
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Private & Group Tours
                      </li>
                    </ul>
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check" />
                       Heritage & City Walks
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Flexible Itineraries
                      </li>
                    </ul>
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check" />
                        Cultural Experiences
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Tours at Your Pace
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                   Plan Your Guided Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About2 = () => {
  return (
    <section className="about-section-2 section-padding fix">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    Passionate About <br /> Your Adventures <br /> With{" "}
                    <b>ROAVIO</b>
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  We believe travel is more than just a trip—it’s an experience
                  that shapes your life. Our mission is to create unforgettable
                  journeys that combine adventure, comfort, and authentic
                  cultural encounters.
                </p>
                <div className="about-item">
                  <div className="about-image">
                    <img
                      data-speed=".8"
                      src="assets/img/home-2/about/about-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div
                    className="right-content wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <Tab.Container defaultActiveKey="Course">
                      <Nav as={"ul"} className="nav">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            href="#Course"
                            eventKey="Course"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Our Mission
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            href="#Curriculum"
                            eventKey="Curriculum"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Our Vision
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content as={"div"} className="tab-content">
                        <Tab.Pane
                          as={"div"}
                          eventKey="Course"
                          className="tab-pane fade"
                        >
                          <div className="content">
                            <p>
                              Take the stress to travel with our seamless flight
                              booking and reservation services.
                            </p>
                            <ul className="list">
                              <li>
                                <i className="fa-solid fa-check" />
                                Destination Search &amp; Filters
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Online Booking System
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Blog &amp; Travel Guides
                              </li>
                            </ul>
                            <Link href="/about" className="theme-btn">
                              Learn More Us
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane
                          as={"div"}
                          eventKey="Curriculum"
                          className="tab-pane fade"
                        >
                          <div className="content">
                            <p>
                              Take the stress to travel with our seamless flight
                              booking and reservation services.
                            </p>
                            <ul className="list">
                              <li>
                                <i className="fa-solid fa-check" />
                                Destination Search &amp; Filters
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Online Booking System
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Blog &amp; Travel Guides
                              </li>
                            </ul>
                            <Link href="/about" className="theme-btn">
                              Learn More Us
                            </Link>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image-item">
                <div className="about-image-2">
                  <img
                    data-speed=".8"
                    src="assets/img/home-2/about/about-2.jpg"
                    alt="img"
                  />
                </div>
                <div className="about-image-2 style-2">
                  <img
                    data-speed=".8"
                    src="assets/img/home-2/about/about-3.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About3 = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    Passionate About <br /> Your Adventures <br /> with{" "}
                    <b className="color">ROAVIO</b>
                  </h2>
                </div>
                <p className="text">
                  We believe travel is more than just a trip—it’s an experience
                  that shapes your life. Our mission is to create unforgettable
                  journeys that combine adventure, comfort, and authentic
                  cultural encounters.
                </p>
                <div className="about-left-item">
                  <div className="left-image">
                    <img
                      data-speed=".8"
                      src="assets/img/home-3/about/01.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="right-item">
                    <div className="count-item">
                      <div className="count-box">
                        <h2>
                          <span className="count">
                            <Counter end={10} />
                          </span>
                          +
                        </h2>
                      </div>
                      <div className="radius-image">
                        <img
                          src="assets/img/home-3/about/radius.jpg"
                          alt="img"
                        />
                        <a
                          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                          className="video-btn video-popup"
                        >
                          <i className="fa-duotone fa-play" />
                        </a>
                      </div>
                    </div>
                    <p>
                      Years of expertise in crafting travel personalized
                      journeys, we are dedicated to providing travel experiences
                    </p>
                    <Link href="/about" className="theme-btn">
                      Learn More Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-right-item">
                <div className="about-box">
                  <h3>We’re the Right Choice for Real travel Adventures</h3>
                  <div className="icon-item">
                    <div className="icon">
                      <i className="flaticon-traveling" />
                    </div>
                    <div className="content">
                      <h5>Curated by locals</h5>
                      <p>
                        Trips are thoughtfully designed &amp; curated by locals
                        who know their destination
                      </p>
                    </div>
                  </div>
                  <div className="icon-item style-2">
                    <div className="icon">
                      <i className="flaticon-traveling-1" />
                    </div>
                    <div className="content">
                      <h5>Self guided flexibility</h5>
                      <p>
                        Enjoy the freedom to travel at your own pace with our
                        self-guided flexibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-image">
                  <img
                    data-speed=".8"
                    src="assets/img/home-3/about/02.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About4 = () => {
  return (
    <section className="about-section-2 section-padding fix">
      <div className="container">
        <div className="about-wrapper-2 style-2">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-0">
                  <h2 className="text-anim">
                    Passionate About Your Adventures With <b>ROAVIO</b>
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  We believe travel is more than just a trip—it’s an experience
                  that shapes your life. Our mission is to create unforgettable
                  journeys that combine adventure, comfort, and authentic
                  cultural encounters.
                </p>
                <div className="about-item">
                  <div className="about-image wow img-custom-anim-left">
                    <img src="assets/img/home-2/about/about-4.jpg" alt="img" />
                  </div>
                  <div
                    className="right-content wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <Tab.Container defaultActiveKey="Course">
                      <Nav as={"ul"} className="nav">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            href="#Course"
                            eventKey="Course"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Our Mission
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            href="#Curriculum"
                            eventKey="Curriculum"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Our Vision
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content as={"div"} className="tab-content">
                        <Tab.Pane
                          as={"div"}
                          eventKey="Course"
                          className="tab-pane fade"
                        >
                          <div className="content">
                            <p>
                              Take the stress to travel with our seamless flight
                              booking and reservation services.
                            </p>
                            <ul className="list">
                              <li>
                                <i className="fa-solid fa-check" />
                                Destination Search &amp; Filters
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Online Booking System
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Blog &amp; Travel Guides
                              </li>
                            </ul>
                            <Link href="/about" className="theme-btn">
                              Learn More Us
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane
                          as={"div"}
                          eventKey="Curriculum"
                          className="tab-pane fade"
                        >
                          <div className="content">
                            <p>
                              Take the stress to travel with our seamless flight
                              booking and reservation services.
                            </p>
                            <ul className="list">
                              <li>
                                <i className="fa-solid fa-check" />
                                Destination Search &amp; Filters
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Online Booking System
                              </li>
                              <li>
                                <i className="fa-solid fa-check" />
                                Blog &amp; Travel Guides
                              </li>
                            </ul>
                            <Link href="/about" className="theme-btn">
                              Learn More Us
                            </Link>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-item">
                <div className="about-image-2 wow img-custom-anim-top">
                  <img src="assets/img/home-2/about/about-5.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
