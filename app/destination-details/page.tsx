import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const DestinationDetails = () => {
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
  ];
  const hotels = [
    {
      img: "assets/img/inner-page/hotel/01.jpg",
      rating: "4.8",
      location: "Ao Nang, Thailand",
      title: "The brown bench near swimming pool Hotel",
      bedrooms: "2 Bed room",
      kitchen: "1 kitchen",
      washrooms: "2 Wash room",
      internet: "Internet",
      price: "$99",
      delay: ".3s",
    },
    {
      img: "assets/img/inner-page/hotel/02.jpg",
      rating: "4.8",
      location: "Ao Nang, Thailand",
      title: "Green trees and body of water Marriott Hotel",
      bedrooms: "2 Bed room",
      kitchen: "1 kitchen",
      washrooms: "2 Wash room",
      internet: "Internet",
      price: "$56",
      delay: ".5s",
    },
    {
      img: "assets/img/inner-page/hotel/03.jpg",
      rating: "4.8",
      location: "Ao Nang, Thailand",
      title: "Painted house surround with trees Hotel",
      bedrooms: "2 Bed room",
      kitchen: "1 kitchen",
      washrooms: "2 Wash room",
      internet: "Internet",
      price: "$109",
      delay: ".3s",
    },
    {
      img: "assets/img/inner-page/hotel/04.jpg",
      rating: "4.8",
      location: "Ao Nang, Thailand",
      title: "House pool Jungle Pool Indonesia Hotel",
      bedrooms: "2 Bed room",
      kitchen: "1 kitchen",
      washrooms: "2 Wash room",
      internet: "Internet",
      price: "$67",
      delay: ".5s",
    },
  ];
  return (
    <RoavioLayout>
      {/* Hero Section Start */}
      <div className="breadcrumb-wrapper fix">
        <div className="container">
          <div className="page-heading style-2">
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2 style-3">Destination Details</li>
            </ul>
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Tower Bridge of London, <br />
                United Kingdom
              </h1>
            </div>
            <div className="star-list">
              <div className="star">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star-half-stroke" />
                <span>(480+ Reviews)</span>
              </div>
              <span>
                <i className="fa-regular fa-location-dot" />
                London, United Kingdom
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* tour-details Section Start */}
      <section className="destination-details section-padding pt-0 fix">
        <div className="container">
          <div className="row g-2">
            <div className="col-xl-3 col-md-6 col-lg-4">
              <div className="destination-details-image">
                <img
                  src="assets/img/inner-page/destination-details/details-1.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-lg-4">
              <div className="destination-details-image">
                <img
                  src="assets/img/inner-page/destination-details/details-2.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-4">
              <div className="destination-details-image">
                <img
                  src="assets/img/inner-page/destination-details/details-3.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-lg-4">
              <div className="destination-details-image">
                <img
                  src="assets/img/inner-page/destination-details/details-4.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-4">
              <div className="destination-details-image">
                <img
                  src="assets/img/inner-page/destination-details/details-5.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-4">
              <div className="destination-details-image">
                <img
                  src="assets/img/inner-page/destination-details/details-6.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="destination-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                <div className="destination-details-content">
                  <h3>Overview</h3>
                  <p className="mb-3 mt-3">
                    The Tower Bridge of London is one of the city’s most iconic
                    landmarks, blending Victorian engineering with timeless
                    beauty. Spanning the River Thames, its twin towers and
                    majestic bascules create a stunning backdrop for photos and
                    river cruises alike. Visitors can walk across the high-level
                    glass walkways for panoramic views.
                  </p>
                  <p className="mb-3">
                    London’s skyline or watch as the bridge lifts to allow ships
                    to pass beneath. A symbol of history and innovation, Tower
                    Bridge is a must-visit destination that showcases the charm
                    and grandeur of the United Kingdom’s capital.
                  </p>
                  <p className="mt-4">
                    Standing proudly over the River Thames, Tower Bridge is a
                    masterpiece of London’s heritage and innovation. Its
                    striking twin towers and iconic drawbridge design make it
                    one of the most recognizable sights in the world. Whether
                    you stroll across its walkways, admire the city from above,
                  </p>
                  <div className="top-list">
                    <h3>Top-highlight</h3>
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check" />
                        Explore iconic sites like Tanah Lot, Uluwatu, and
                        Besakih Temple.
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Relax on Kuta, Seminyak, Nusa Dua, and Jimbaran Bay.
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Discover rice terraces, art markets, yoga retreats, and
                        monkey forests.
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Hike an active volcano for breathtaking sunrise views.
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Experience beach clubs, rooftop bars, and live music in
                        Seminyak and Canggu.
                      </li>
                      <li>
                        <i className="fa-solid fa-check" />
                        Visit Tegenungan, Gitgit, and Sekumpul waterfalls for
                        adventure and serenity.
                      </li>
                    </ul>
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
              <div className="col-lg-4">
                <div className="price-box-item">
                  <h3>Tower bridge of London</h3>
                  <div className="price-item">
                    <div className="price">
                      <h6>To Child</h6>
                      <h2>$138</h2>
                    </div>
                    <div className="price style-2">
                      <h6>To Adult</h6>
                      <h2>$399</h2>
                    </div>
                  </div>
                  <Link href="/contact" className="theme-btn">
                    Learn More Us
                  </Link>
                  <h6>
                    Need some help? <Link href="/contact">Contact Us</Link>
                  </h6>
                </div>
                <div className="best-tourist-box">
                  <div className="top-content">
                    <h6>Explore The World</h6>
                    <h3>Best Tourist Place</h3>
                    <Link href="/tour-details" className="theme-btn">
                      Explore Tours
                    </Link>
                  </div>
                  <div className="bottom-image">
                    <img
                      src="assets/img/inner-page/destination-details/tour-man.png"
                      alt="img"
                    />
                    <div className="bg-shape">
                      <img
                        src="assets/img/inner-page/destination-details/bg-shape.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular-Destination Section-4 Start */}
      <section className="popular-destination-section-4 section-padding header-bg fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-white text-anim">Related Destinations</h2>
            <p className="text-white wow fadeInUp" data-wow-delay=".5s">
              One site{" "}
              <span className="count">
                <Counter end={30500} />
              </span>
              <b>+</b> most popular experience you’ll remember
            </p>
          </div>
          <div className="row">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={dest.delay}
              >
                <div className="destination-radius-item style-2">
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
      {/* Travel-Section- Start */}
      <section className="travel-section section-padding header-bg fix">
        <div className="container">
          <div className="travel-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="travel-content">
                  <div className="section-title mb-0">
                    <h2 className="text-white text-anim">
                      All-In-One Travel Assistance
                    </h2>
                    <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                      Crafting journeys, creating memories plan smarter, travel
                      better
                    </p>
                  </div>
                  <div className="travel-item">
                    <div className="icon-item">
                      <div className="icon">
                        <i className="flaticon-traveling-1" />
                      </div>
                      <div className="content">
                        <h5>Booking &amp; Reservation</h5>
                        <p>
                          Take the stress to travel with seamless flight booking
                          reservation services.
                        </p>
                      </div>
                    </div>
                    <div className="icon-item">
                      <div className="icon">
                        <i className="flaticon-hot-air-balloon" />
                      </div>
                      <div className="content">
                        <h5>Hotel &amp; Accommodation</h5>
                        <p>
                          Enjoy a perfect stay with our carefully selected
                          hotels and resorts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="travel-item">
                    <div className="icon-item">
                      <div className="icon">
                        <i className="flaticon-passport" />
                      </div>
                      <div className="content">
                        <h5>Visa &amp; Travel Assistance</h5>
                        <p>
                          Travel confidently with comprehensive Visa &amp;
                          Travel Assistance services.
                        </p>
                      </div>
                    </div>
                    <div className="icon-item">
                      <div className="icon">
                        <i className="flaticon-tent" />
                      </div>
                      <div className="content">
                        <h5>Customizable Tours</h5>
                        <p>
                          We design itineraries that match your interests,
                          schedule, and budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="travel-image">
                  <img
                    src="assets/img/inner-page/destination/18.jpg"
                    alt="img"
                  />
                  <div className="right-box">
                    <h2>
                      <span className="count">
                        <Counter end={150} />
                      </span>
                      +
                    </h2>
                    <p>by over 2500+ global satisfied clients</p>
                    <div className="star-item">
                      <img
                        src="assets/img/home-2/feature/Image.png"
                        alt="img"
                      />
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
            </div>
          </div>
        </div>
      </section>
      <section className="discover-hotel-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Discover The World's Class Top Hotel</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              One site{" "}
              <span className="count">
                <Counter end={30500} />
              </span>
              <b>+</b> most popular experience you’ll remember
            </p>
          </div>
          <div className="row">
            {hotels.map((hotel, i) => (
              <div
                key={i}
                className="col-lg-6 wow fadeInUp"
                data-wow-delay={hotel.delay}
              >
                <div className="top-hotel-item">
                  <div className="hotel-image">
                    <img src={hotel.img} alt="img" />
                    <div className="icon">
                      <i className="fa-regular fa-heart" />
                    </div>
                    <span>
                      <i className="fa-solid fa-star" /> ({hotel.rating})
                    </span>
                  </div>
                  <div className="hotel-content">
                    <span>
                      <i className="fa-regular fa-location-dot" />{" "}
                      {hotel.location}
                    </span>
                    <h3>
                      <Link href="/tour-details">{hotel.title}</Link>
                    </h3>
                    <div className="list-item">
                      <ul className="list">
                        <li>
                          <img src="assets/img/inner-page/icon/05.svg" alt="" />
                          {hotel.bedrooms}
                        </li>
                        <li>
                          <img src="assets/img/inner-page/icon/06.svg" alt="" />
                          {hotel.kitchen}
                        </li>
                      </ul>
                      <ul className="list">
                        <li>
                          <img src="assets/img/inner-page/icon/07.svg" alt="" />
                          {hotel.washrooms}
                        </li>
                        <li>
                          <img src="assets/img/inner-page/icon/08.svg" alt="" />
                          {hotel.internet}
                        </li>
                      </ul>
                    </div>
                    <div className="button-item">
                      <h4>
                        {hotel.price}
                        <span>/per night</span>
                      </h4>
                      <Link href="/destination-details" className="theme-btn">
                        Book Now
                      </Link>
                    </div>
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

export default DestinationDetails;
