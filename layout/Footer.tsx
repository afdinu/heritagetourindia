import Link from "next/link";

const Footer = ({ version }: { version?: number }) => {
  switch (version) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section fix header-bg">
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row">
            <div className="col-xl-2 col-md-4 col-lg-3 wow fadeInUp">
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Services</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Best Tour Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Tour Booking
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Hotel Booking
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Ticket Booking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Company</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/about">
                      <i className="fa-solid fa-chevron-right" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Jobs Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <i className="fa-solid fa-chevron-right" />
                      News Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-lg-3 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Destinations</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      African Safaris
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Alaska &amp; Canada
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      South America
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Middle East
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fa-regular fa-map-location-dot" />
                  </div>
                  <div className="content">
                    <h6>
                      578 Level, D-block Street <br />
                      Melbourne, Australia
                    </h6>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fa-regular fa-envelope" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="mailto:supportrevelo@gmail.com">
                        supportrevelo@gmail.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="contact-item mb-0">
                  <div className="icon">
                    <i className="fa-regular fa-phone-volume" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="tel:+88012334588">+880 123 345 88</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>
                    Subscribe Our Newsletter to <br />
                    get more offer &amp; Tips
                  </h4>
                </div>
                <div className="newsletter-content">
                  <p>
                    Stay connected &amp; never miss a deal! subscribe to our
                    newsletter and get travel offers
                  </p>
                  <form action="#">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                      />
                      <button type="submit" className="theme-btn">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-1">
        <div className="container">
          <div className="footer-wrapper">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Roavio
            </h2>
            <div className="text-item wow fadeInUp" data-wow-delay=".5s">
              <p>
                @Copy {new Date().getFullYear()} <span>ROAVIO,</span> All rights
                reserved
              </p>
              <a href="#" className="icon">
                <i className="fa-solid fa-chevron-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer2 = () => {
  return (
    <footer className="footer-section fix header-bg">
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-lg-6 wow fadeInUp">
              <div className="single-footer-widget">
                <div className="wid-title">
                  <Link href="/">
                    <img src="assets/img/logo/white-logo.svg" alt="" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Get ready to embark on unforgettable journeys with us.
                    whether you’re seeking thrilling adventures, relaxing
                    escapes
                  </p>
                  <div className="social-icon">
                    <a href="#">
                      <i className="fa-brands fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-lg-3 ps-xl-5 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Services</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Best Tour Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Tour Booking
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Hotel Booking
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Ticket Booking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-lg-3 ps-xl-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Company</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/about">
                      <i className="fa-solid fa-chevron-right" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right" />
                      Jobs Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/news-details">
                      <i className="fa-solid fa-chevron-right" />
                      News Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Destinations</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      African Safaris
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Alaska &amp; Canada
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      South America
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <i className="fa-solid fa-chevron-right" />
                      Middle East
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fa-regular fa-map-location-dot" />
                  </div>
                  <div className="content">
                    <h6>
                      578 Level, D-block Street <br />
                      Melbourne, Australia
                    </h6>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fa-regular fa-envelope" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="mailto:supportrevelo@gmail.com">
                        supportrevelo@gmail.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="contact-item mb-0">
                  <div className="icon">
                    <i className="fa-regular fa-phone-volume" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="tel:+88012334588">+880 123 345 88</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-1">
        <div className="container">
          <div className="footer-wrapper">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Roavio
            </h2>
            <div className="text-item wow fadeInUp" data-wow-delay=".5s">
              <p>
                @Copy {new Date().getFullYear()} <span>ROAVIO,</span> All rights
                reserved
              </p>
              <a href="#" className="icon">
                <i className="fa-solid fa-chevron-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer3 = () => {
  return (
    <footer className="footer-section-3 fix">
      <h2 className="text">Roavio</h2>
      <div className="shape-1">
        <img src="assets/img/home-3/f-1.png" alt="img" />
      </div>
      <div className="shape-2">
        <img src="assets/img/home-3/f-2.png" alt="img" />
      </div>
      <div className="shape-3">
        <img src="assets/img/home-3/f-3.png" alt="img" />
      </div>
      <div className="shape-4">
        <img src="assets/img/home-3/f-4.png" alt="img" />
      </div>
      <div className="container">
        <div className="footer-widget-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="footer-left-item">
                <div className="footer-item">
                  <div className="footer-content">
                    <div className="wid-title">
                      <Link href="/">
                        <img src="assets/img/logo/black-logo-2.svg" alt="" />
                      </Link>
                    </div>
                    <p>
                      Get ready to embark on unforgettable journeys with seeking
                      thrilling
                    </p>
                    <Link href="/tour-details" className="theme-btn color">
                      Explore Tours
                    </Link>
                  </div>
                  <div className="single-footer-widget">
                    <div className="wid-title">
                      <h4>Services</h4>
                    </div>
                    <ul className="list-area">
                      <li>
                        <Link href="/tour-details">
                          <i className="fa-solid fa-chevron-right" />
                          Best Tour Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/tour-details">
                          <i className="fa-solid fa-chevron-right" />
                          Tour Booking
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <i className="fa-solid fa-chevron-right" />
                          Hotel Booking
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <i className="fa-solid fa-chevron-right" />
                          Ticket Booking
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-item pb-0 mb-0">
                  <div className="single-footer-widget">
                    <div className="wid-title">
                      <h4>Get In Touch</h4>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fa-regular fa-map-location-dot" />
                      </div>
                      <div className="content">
                        <h6>
                          578 Level, D-block Street <br />
                          Melbourne, Australia
                        </h6>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fa-regular fa-envelope" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="mailto:supportrevelo@gmail.com">
                            supportrevelo@gmail.com
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-item mb-0">
                      <div className="icon">
                        <i className="fa-regular fa-phone-volume" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="tel:+88012334588">+880 123 345 88</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="single-footer-widget style-3">
                    <div className="wid-title">
                      <h4>Social Media</h4>
                    </div>
                    <ul className="social-list">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" /> Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube" /> Youtube
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter" /> Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" /> Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right-content">
                <h4>Destinations</h4>
                <div className="area-list">
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    African Safaris
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    Canada
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    USA
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    Middle East
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    Asia
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    Swaziland
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    Portugal
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    Netherland
                  </Link>
                  <Link href="/destination-details">
                    <i className="fa-solid fa-chevron-right" />
                    Nepal
                  </Link>
                </div>
                <Link href="/destination-details" className="fotter-btn">
                  Explore All Destinations{" "}
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <div className="map-items">
                  <div className="googpemap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-3">
        <div className="container">
          <div className="footer-wrapper-3">
            <ul className="left-list">
              <li>
                <Link href="/contact">Company</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/contact">Privacy Policy</Link>
              </li>
            </ul>
            <p>
              @Copy {new Date().getFullYear()} <span>ROAVIO,</span> All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer4 = () => {
  return (
    <footer className="footer-section-4 fix">
      <div className="container">
        <div className="footer-widget-wrapper-4">
          <div className="row g-4">
            <div className="col-xl-9 col-lg-8 col-md-8">
              <div className="footer-left-content">
                <div className="footer-item">
                  <div className="logo">
                    <Link href="/">
                      <img src="assets/img/logo/black-logo.svg" alt="img" />
                    </Link>
                  </div>
                  <div className="content">
                    <h2 className="text-anim">
                      Experience ultimate luxury book your suite today
                    </h2>
                    <Link href="/contact" className="theme-btn mt-4">
                      Booking Now
                    </Link>
                  </div>
                </div>
                <div className="footer-icon-item">
                  <div className="icon-item">
                    <div className="icon">
                      <i className="fa-regular fa-map-location-dot" />
                    </div>
                    <div className="cont">
                      <h5>Address</h5>
                      <h6>578 Level, Melbourne, Australia</h6>
                    </div>
                  </div>
                  <div className="icon-item">
                    <div className="icon">
                      <i className="fa-regular fa-envelope" />
                    </div>
                    <div className="cont">
                      <h5>Email Us</h5>
                      <h6>
                        <a href="mailto:supportroavio@gmail.com">
                          supportroavio@gmail.com
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="icon-item">
                    <div className="icon">
                      <i className="fa-regular fa-phone-volume" />
                    </div>
                    <div className="cont">
                      <h5>Need Help</h5>
                      <h6>
                        <a href="tel:Call:+12345678899">
                          Call : +1 234 567 88 99
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="photo-gallery">
                <h5>Photo Gallery</h5>
                <div className="gallery-item">
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-1.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-1.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-2.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-2.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-3.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-3.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-4.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-4.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-5.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-5.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-6.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-6.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-7.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-7.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-8.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-8.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb">
                    <a
                      href="assets/img/home-4/footer/gallery-9.jpg"
                      className="img-popup"
                    >
                      <img
                        src="assets/img/home-4/footer/gallery-9.jpg"
                        alt="gallery-img"
                      />
                      <div className="icon">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-3">
        <div className="container">
          <div className="footer-wrapper-3">
            <ul className="left-list">
              <li>
                <Link href="/contact">Company</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/contact">Privacy Policy</Link>
              </li>
            </ul>
            <p>
              @Copy {new Date().getFullYear()}{" "}
              <span className="style-4">ROAVIO,</span> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
