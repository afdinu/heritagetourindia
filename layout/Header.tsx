"use client";
import Link from "next/link";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const Header = ({ version }: { version?: number }) => {
  const headers = {
    1: Header1,
    2: Header2,
    3: Header3,
    4: Header4,
  };
  const Header = headers[version as 1 | 2 | 3 | 4] || Header1;
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <MobileMenu toggle={toggle} setToggle={setToggle} />
      <Header toggle={toggle} setToggle={setToggle} />
    </Fragment>
  );
};
export default Header;

const Header1 = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  return (
    <Fragment>
      <div className="header-top-section">
        <div className="container-fluid">
          <div className="header-top-wrapper">
            <p>
              Welcome to <span>Roavio</span> travel agency, need helps for
              travel guide <b>Let’s Talk</b>
            </p>
            <div className="header-right">
              <div className="flag-wrap">
                <i className="fa-solid fa-globe" />
                <div className="nice-select" tabIndex={0}>
                  <span className="current">English</span>
                  <ul className="list">
                    <li data-value={1} className="option selected focus">
                      English
                    </li>
                    <li data-value={1} className="option">
                      Bangla
                    </li>
                    <li data-value={1} className="option">
                      Hindi
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="header-list">
                <li>
                  <i className="fa-solid fa-envelope" />
                  <a href="mailto:support@gmail.com">
                    Email : support@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone-flip" />
                  <a href="tel:+1-234-567-889">Call : +1-234-567-889</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="mean__menu-wrapper">
                  <Nav />
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="search-widget">
                  <form action="#">
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                    <input type="text" placeholder="Search" />
                  </form>
                </div>
                <div className="header-button">
                  <Link href="/contact" className="theme-btn">
                    Book Now
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setToggle(true)}
                  >
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header2 = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  return (
    <header id="header-sticky" className="header-1 header-2">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="header-left">
              <div className="logo">
                <Link href="/" className="header-logo">
                  <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                </Link>
                <Link href="/" className="header-logo-2">
                  <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="mean__menu-wrapper">
                <Nav style="style-two" />
              </div>
              <a href="#" className="main-header__search search-toggler">
                <i className="fa-regular fa-magnifying-glass" />
              </a>
              <div className="header__hamburger my-auto">
                <div
                  className="sidebar__toggle"
                  onClick={() => setToggle(true)}
                >
                  <i className="fa-solid fa-bars-staggered" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header3 = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  return (
    <Fragment>
      <div className="header-top-section">
        <div className="container-fluid">
          <div className="header-top-wrapper style-3">
            <ul className="header-list">
              <li>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:support@gmail.com">Email : support@gmail.com</a>
              </li>
              <li className="color-3">
                <i className="fa-solid fa-phone-flip" />
                <a href="tel:1-234-567-889">Call : +1-234-567-889</a>
              </li>
            </ul>
            <p>
              Looking for a travel guide <b>Let’s Talk</b>
            </p>
            <div className="header-right">
              <div className="flag-wrap">
                <i className="fa-solid fa-globe" />
                <div className="nice-select" tabIndex={0}>
                  <span className="current">English</span>
                  <ul className="list">
                    <li data-value={1} className="option selected focus">
                      English
                    </li>
                    <li data-value={1} className="option">
                      Bangla
                    </li>
                    <li data-value={1} className="option">
                      Hindi
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social-icon">
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
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
      </div>

      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main style-3">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img
                      src="/assets/img/logo/black-logo-2.svg"
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="mean__menu-wrapper">
                  <Nav />
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="search-widget">
                  <form action="#">
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                    <input type="text" placeholder="Search" />
                  </form>
                </div>
                <div className="header-button">
                  <Link href="/contact" className="theme-btn color">
                    Book Now
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setToggle(true)}
                  >
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header4 = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  return (
    <header id="header-sticky" className="header-1 header-4">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="header-left">
              <div className="logo">
                <Link href="/" className="header-logo">
                  <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                </Link>
                <Link href="/" className="header-logo-2">
                  <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="mean__menu-wrapper">
                <Nav />
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="search-widget">
                <form action="#">
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                  <input type="text" placeholder="Search" />
                </form>
              </div>
              <div className="header-button">
                <Link href="/contact" className="theme-btn">
                  Book Now
                </Link>
              </div>
              <div className="header__hamburger d-xl-none my-auto">
                <div
                  className="sidebar__toggle"
                  onClick={() => setToggle(true)}
                >
                  <i className="fas fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Nav = ({ style }: { style?: string }) => {
  return (
    <div className="main-menu">
      <nav id="mobile-menu">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fa-solid fa-chevron-down" />
            </Link>
            <ul className={`submenu has-homemenu ${style}`}>
              <li>
                <div className="homemenu-items">
                  <div className="homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          Multi Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="/assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/index-2" className="theme-btn">
                          Multi Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="/assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/index-3" className="theme-btn">
                          Multi Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="/assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/index-4" className="theme-btn">
                          Multi Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="/" className="border-none">
              Home
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="/index-2">Home 02</Link>
              </li>
              <li>
                <Link href="/index-3">Home 03</Link>
              </li>
              <li>
                <Link href="/index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/destination-details">
              Destinations
              <i className="fa-solid fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/destination">Destinations 01</Link>
              </li>
              <li>
                <Link href="/destination-2">Destinations 02</Link>
              </li>
              <li>
                <Link href="/destination-details">Destination Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/tour-details">
              Tours
              <i className="fa-solid fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/tour-list">Tour List</Link>
              </li>
              <li>
                <Link href="/tour-grid">Tour Grid</Link>
              </li>
              <li>
                <Link href="/tour-sidebar">Tour sidebar</Link>
              </li>
              <li>
                <Link href="/tour-no-sidebar">Tour No sidebar</Link>
              </li>
              <li>
                <Link href="/tour-details">Tour Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="/news-details">
              Pages
              <i className="fa-solid fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/team-details">Team Details</Link>
              </li>
              <li>
                <Link href="/faq">Our Faq</Link>
              </li>
              <li>
                <Link href="/gallery">Our Gallery</Link>
              </li>
              <li>
                <Link href="/404">404 Page</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/news-details">
              Blog
              <i className="fa-solid fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/news">Blog Standard</Link>
              </li>
              <li>
                <Link href="/news-grid">Blog Grid</Link>
              </li>
              <li>
                <Link href="/news-details">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MobileMenu = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [multiMenu, setMultiMenu] = useState<string>("");
  const activeMenuSet = (value: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMenu(activeMenu === value ? "" : value);
  };
  const activeLi = (value: string) =>
    value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${toggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setToggle(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <a href="#nav" className="meanmenu-reveal">
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul>
                      <li className="has-dropdown active menu-thumb">
                        <a href="#" onClick={(e) => activeMenuSet("home", e)}>
                          Home
                          <i className="fa-solid fa-chevron-down" />
                        </a>
                        <ul
                          className="submenu has-homemenu"
                          style={activeLi("home")}
                        >
                          <li>
                            <div className="homemenu-items">
                              <div className="homemenu">
                                <div className="homemenu-thumb">
                                  <img
                                    src="/assets/img/header/home-1.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link href="/" className="theme-btn color">
                                      Multi Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 01</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img
                                    src="/assets/img/header/home-2.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link
                                      href="/index-2"
                                      className="theme-btn color"
                                    >
                                      Multi Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 02</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img
                                    src="/assets/img/header/home-3.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link
                                      href="/index-3"
                                      className="theme-btn color"
                                    >
                                      Multi Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 03</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img
                                    src="/assets/img/header/home-4.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link
                                      href="/index-4"
                                      className="theme-btn color"
                                    >
                                      Multi Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 04</h4>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={(e) => activeMenuSet("home", e)}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li className="has-dropdown active d-xl-none">
                        <a
                          href="#"
                          className="border-none"
                          onClick={(e) => activeMenuSet("home", e)}
                        >
                          Home
                        </a>
                        <ul className="submenu" style={activeLi("home")}>
                          <li>
                            <Link href="/">Home 01</Link>
                          </li>
                          <li>
                            <Link href="/index-2">Home 02</Link>
                          </li>
                          <li>
                            <Link href="/index-3">Home 03</Link>
                          </li>
                          <li>
                            <Link href="/index-4">Home 04</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={(e) => activeMenuSet("home", e)}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => activeMenuSet("destination", e)}
                        >
                          Destinations
                          <i className="fa-solid fa-chevron-down" />
                        </a>
                        <ul className="submenu" style={activeLi("destination")}>
                          <li>
                            <Link href="/destination">Destinations 01</Link>
                          </li>
                          <li>
                            <Link href="/destination-2">Destinations 02</Link>
                          </li>
                          <li>
                            <Link href="/destination-details">
                              Destination Details
                            </Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={(e) => activeMenuSet("destination", e)}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => activeMenuSet("tour", e)}>
                          Tours
                          <i className="fa-solid fa-chevron-down" />
                        </a>
                        <ul className="submenu" style={activeLi("tour")}>
                          <li>
                            <Link href="/tour-list">Tour List</Link>
                          </li>
                          <li>
                            <Link href="/tour-grid">Tour Grid</Link>
                          </li>
                          <li>
                            <Link href="/tour-sidebar">Tour sidebar</Link>
                          </li>
                          <li>
                            <Link href="/tour-no-sidebar">Tour No sidebar</Link>
                          </li>
                          <li>
                            <Link href="/tour-details">Tour Details</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={(e) => activeMenuSet("tour", e)}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li className="has-dropdown">
                        <a href="#" onClick={(e) => activeMenuSet("pages", e)}>
                          Pages
                          <i className="fa-solid fa-chevron-down" />
                        </a>
                        <ul className="submenu" style={activeLi("pages")}>
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/team">Team</Link>
                          </li>
                          <li>
                            <Link href="/team-details">Team Details</Link>
                          </li>
                          <li>
                            <Link href="/faq">Our Faq</Link>
                          </li>
                          <li>
                            <Link href="/gallery">Our Gallery</Link>
                          </li>
                          <li>
                            <Link href="/404">404 Page</Link>
                          </li>
                        </ul>
                        <a className="mean-expand" href="#">
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <Link href="/news-details">
                          Blog
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/news">Blog Standard</Link>
                          </li>
                          <li>
                            <Link href="/news-grid">Blog Grid</Link>
                          </li>
                          <li>
                            <Link href="/news-details">Blog Details</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={(e) => activeMenuSet("pages", e)}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li className="mean-last">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="offcanvas__contact">
                <h3>Get Appointment</h3>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-items"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name33"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="email33"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message2"
                          placeholder="Enter message..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${toggle ? "overlay-open" : ""}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};
