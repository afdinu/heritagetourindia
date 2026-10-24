"use client";
import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";
import { Accordion } from "react-bootstrap";

const TourDetails = () => {
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
  const itineraryItems = [
    {
      day: 1,
      title: "Arrive at campground",
      description:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
    {
      day: 2,
      title: "Wake up early and embark on a day hike",
      description:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
    {
      day: 3,
      title: "Join a guided ranger-led nature walk",
      description:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
    {
      day: 4,
      title: "Take a break from hiking",
      description:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
    {
      day: 5,
      title: "Pack a lunch and embark on a longer hike",
      description:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
  ];

  // Helper function to convert number to word
  const numberToWord = (num: number): string => {
    const words = [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
    ];
    return words[num - 1] || num.toString();
  };
  const faqItems = [
    {
      number: 1,
      question: "How do I book a tour or travel package?",
      answer:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
    {
      number: 2,
      question: "What is included in the travel package?",
      answer:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
      isExpanded: true,
    },
    {
      number: 3,
      question: "What is your cancellation and refund policy?",
      answer:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
    {
      number: 4,
      question: "Can I customize my tour or travel package?",
      answer:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
    {
      number: 5,
      question: "What documents do I need to travel?",
      answer:
        "The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you'll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.",
    },
  ];
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };
  return (
    <RoavioLayout>
      {/* Hero Section Start */}
      <div className="breadcrumb-wrapper fix">
        <div className="container">
          <div className="page-heading style-2">
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="style-2 style-3">Tour Details</li>
            </ul>
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Relinking Beach in Nusa panada <br />
                island, Bali, Indonesia
              </h1>
            </div>
            <ul className="list">
              <li>
                <i className="fa-regular fa-location-dot" />
                Bali, Indonesia
              </li>
              <li>
                <i className="fa-regular fa-clock" />1 - 3 days
              </li>
              <li>
                <i className="fa-regular fa-users" />3 persons
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* tour-details Section Start */}
      <section className="tour-details-section section-padding pt-0 fix">
        <div className="container">
          <div className="tour-details-wrappers">
            <div className="row g-2">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="details-image">
                  <img
                    src="assets/img/inner-page/tour-details/details-1.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="details-image">
                  <img
                    src="assets/img/inner-page/tour-details/details-2.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="details-image">
                  <img
                    src="assets/img/inner-page/tour-details/details-3.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="details-image">
                  <img
                    src="assets/img/inner-page/tour-details/details-4.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="details-image">
                  <img
                    src="assets/img/inner-page/tour-details/details-5.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="details-image">
                  <img
                    src="assets/img/inner-page/tour-details/details-6.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="tour-details-content">
              <div className="row g-4">
                <div className="col-lg-8 col-12">
                  <div className="tour-left-content">
                    <h3>Tours Overview</h3>
                    <p className="mt-3 mb-3">
                      Bali, often called “The Island of Gods”, is one of the
                      world’s most captivating travel destinations. Located in
                      Indonesia, this tropical paradise is famous for its
                      pristine beaches, lush rice terraces, vibrant nightlife,
                      and deeply spiritual culture. Whether you’re seeking
                      adventure, relaxation, or cultural immersion, Bali offers
                      an experience like no other.
                    </p>
                    <p className="mb-5">
                      Visitors can unwind on stunning beaches like Kuta,
                      Seminyak, and Nusa Dua, or escape to bud for peaceful
                      retreat surrounded by rice fields, art galleries, and yoga
                      centers. Adventure seekers can explore volcano hikes at
                      Mount Batur, diving in crystal-clear waters, or surfing
                      world-class waves. Bali is also rich in tradition, with
                      thousands of temples, colorful ceremonies, and warm
                      hospitality from locals.
                    </p>
                    <div className="row g-4 mb-5">
                      <div className="col-lg-6">
                        <div className="list-item">
                          <h3>Included and Excluded</h3>
                          <ul className="list">
                            <li>
                              <i className="fa-solid fa-check" />
                              Pick and Drop Services
                            </li>
                            <li>
                              <i className="fa-solid fa-check" />1 Meal Per Day
                            </li>
                            <li>
                              <i className="fa-solid fa-check" />
                              Cruise Dinner &amp; Music Event
                            </li>
                            <li>
                              <i className="fa-solid fa-check" />
                              Visit 7 Best Places in the City
                            </li>
                            <li>
                              <i className="fa-solid fa-check" />
                              Bottled Water on Buses
                            </li>
                            <li>
                              <i className="fa-solid fa-check" />
                              Transportation Luxury Tour Bus
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="list-item">
                          <h3>Excluded</h3>
                          <ul className="list">
                            <li>
                              <i className="fa-solid fa-xmark" />
                              Gratuities
                            </li>
                            <li>
                              <i className="fa-solid fa-xmark" />
                              Hotel pickup and drop-off
                            </li>
                            <li>
                              <i className="fa-solid fa-xmark" />
                              Lunch, Food &amp; Drinks
                            </li>
                            <li>
                              <i className="fa-solid fa-xmark" />
                              Optional upgrade to a glass
                            </li>
                            <li>
                              <i className="fa-solid fa-xmark" />
                              Additional Services
                            </li>
                            <li>
                              <i className="fa-solid fa-xmark" />
                              Insurance
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h3>Top Highlights</h3>
                    <p className="mt-3">
                      Bali is more than just a tropical destination—it’s a
                      paradise filled with unforgettable experiences. from its
                      sacred temples perched on dramatic cliffs to golden
                      beaches that stretch for miles, every corner of the island
                      offers something unique.
                    </p>
                    <ul className="list-2">
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
                    <h3>Itinerary</h3>
                    <Accordion>
                      <div className="accordion-two">
                        {itineraryItems.map((item, index) => {
                          const collapseId = `collapseTwo${numberToWord(
                            item.day
                          )}`;
                          return (
                            <Accordion.Item eventKey={collapseId} key={index}>
                              <h5 className="accordion-header">
                                <Accordion.Button as={"button"} type="button">
                                  Day {item.day} - {item.title}
                                </Accordion.Button>
                              </h5>
                              <Accordion.Collapse eventKey={collapseId}>
                                <div className="accordion-body">
                                  <p>{item.description}</p>
                                </div>
                              </Accordion.Collapse>
                            </Accordion.Item>
                          );
                        })}
                      </div>
                    </Accordion>
                    <h3>Frequently Asked Questions</h3>
                    <Accordion defaultActiveKey="collapseOne">
                      <div className="accordion-one mt-25 mb-60">
                        {faqItems.map((item, index) => {
                          const collapseId = `collapse${numberToWord(
                            item.number
                          )}`;

                          return (
                            <Accordion.Item
                              eventKey={collapseId}
                              key={index}
                              className="accordion-item"
                            >
                              <h5 className="accordion-header">
                                <Accordion.Button as={"button"} type="button">
                                  {formatNumber(item.number)}_{item.question}
                                </Accordion.Button>
                              </h5>
                              <Accordion.Collapse eventKey={collapseId}>
                                <div className="accordion-body">
                                  <p>{item.answer}</p>
                                </div>
                              </Accordion.Collapse>
                            </Accordion.Item>
                          );
                        })}
                      </div>
                    </Accordion>
                    <h3>Maps</h3>
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
                    <h3>Clients Reviews</h3>
                    <div className="courses-reviews-box-items">
                      <div className="courses-reviews-box">
                        <div className="reviews-box">
                          <h2>
                            <span className="count">
                              <Counter end={4.8} decimals={1} />
                            </span>
                          </h2>
                          <p>856 Reviews</p>
                          <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <div className="reviews-ratting-right">
                          <div className="reviews-ratting-item">
                            <span>Services</span>
                            <div className="progress">
                              <div className="progress-value style-two" />
                            </div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                            </div>
                          </div>
                          <div className="reviews-ratting-item">
                            <span>Guides</span>
                            <div className="progress">
                              <div className="progress-value style-three" />
                            </div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <div className="reviews-ratting-item">
                            <span>Price</span>
                            <div className="progress">
                              <div className="progress-value style-three" />
                            </div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                            </div>
                          </div>
                          <div className="reviews-ratting-item">
                            <span>Safety</span>
                            <div className="progress">
                              <div className="progress-value style-four" />
                            </div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                            </div>
                          </div>
                          <div className="reviews-ratting-item">
                            <span>Foods</span>
                            <div className="progress">
                              <div className="progress-value style-five" />
                            </div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Add Reviews</h3>
                    <div className="contact-box">
                      <h4>Leave Feedback</h4>
                      <form
                        action="contact.php"
                        id="contact-form1"
                        method="POST"
                        className="contact-form-items"
                      >
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Name</span>
                              <input
                                type="text"
                                name="name"
                                id="name331"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Phone</span>
                              <input
                                type="text"
                                name="name"
                                id="name22"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <span>Email</span>
                              <input
                                type="text"
                                name="name"
                                id="email11"
                                placeholder="Your email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <span>Comments</span>
                              <textarea
                                name="message"
                                id="message1"
                                placeholder="Type your message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <button type="submit" className="theme-btn">
                              Send Your Reviews
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="tour-details-side">
                    <div className="tour-details-sidebar sticky-style">
                      <div className="tour-sidebar-items">
                        <h3>Tour Booking</h3>
                        <ul className="form-list">
                          <li>
                            From Date:
                            <div className="form-clt">
                              <div className="date mb-25">
                                <input type="date" />
                              </div>
                            </div>
                          </li>
                          <li>
                            Time:
                            <div className="form-clt d-flex gap-3">
                              <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                  <span className="checkbox-area d-center">
                                    <input type="checkbox" />
                                    <span className="checkmark d-center" />
                                  </span>
                                  <span className="text-color">12:00</span>
                                </span>
                              </label>
                              <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                  <span className="checkbox-area d-center">
                                    <input type="checkbox" />
                                    <span className="checkmark d-center" />
                                  </span>
                                  <span className="text-color">10:00</span>
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <div className="tickets-list">
                          <p>Tickets</p>
                          <ul>
                            <li>
                              18+ Years: <b>$168</b>
                              <div className="form-clt">
                                <div className="form">
                                  <select className="single-select w-100">
                                    <option> 01</option>
                                    <option> 02</option>
                                    <option> 03</option>
                                    <option> 04</option>
                                  </select>
                                </div>
                              </div>
                            </li>
                            <li>
                              18- Years: <b>$100</b>
                              <div className="form-clt">
                                <div className="form">
                                  <select className="single-select w-100">
                                    <option> 01</option>
                                    <option> 02</option>
                                    <option> 03</option>
                                    <option> 04</option>
                                  </select>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="extra-items">
                          <p>Add Extra:</p>
                          <label className="checkbox-single d-flex justify-content-between align-items-center">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center" />
                              </span>
                              <span className="text-color">
                                Add service per booking
                              </span>
                            </span>
                            <span className="text-color">$45</span>
                          </label>
                          <label className="checkbox-single d-flex justify-content-between align-items-center">
                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                              <span className="checkbox-area d-center">
                                <input type="checkbox" />
                                <span className="checkmark d-center" />
                              </span>
                              <span className="text-color">
                                Add service per personal
                              </span>
                            </span>
                            <span className="text-color">$35</span>
                          </label>
                        </div>
                        <ul className="total-list">
                          <li>Total:</li>
                          <li>$80</li>
                        </ul>
                        <button className="theme-btn" type="submit">
                          Book Now
                        </button>
                        <p className="text">Need some help?</p>
                      </div>
                      <div className="widget-contact">
                        <h3>Need Help?</h3>
                        <ul className="list-style-one">
                          <li>
                            <i className="far fa-envelope" />{" "}
                            <a href="emilto:helpxample@gmail.com">
                              helpxample@gmail.com
                            </a>
                          </li>
                          <li>
                            <i className="far fa-phone-volume" />{" "}
                            <a href="callto:+000(123)45688">
                              +000 (123) 456 88
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tour-sidebar-bg-image-items">
                        <img
                          src="assets/img/inner-page/tour-sidebar/sidebar-image.jpg"
                          alt="img"
                        />
                        <div className="tour-bg-content">
                          <span>xplore The World</span>
                          <h3>
                            <Link href="/tour-details">Best Tourist Place</Link>
                          </h3>
                          <Link href="/tour-details" className="theme-btn">
                            Explore Tours
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tour Grid Section Start */}
      <section className="tour-grid-section section-padding pt-0 fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Related Trips You Might Also Like</h2>
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

export default TourDetails;
