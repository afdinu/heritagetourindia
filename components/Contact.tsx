import Link from "next/link";

export const Contact1 = () => {
  return (
    <section className="contact-section section-padding pb-0">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4 align-items-end">
            <div className="col-lg-6">
              <div className="contact-image">
                <img
                  data-speed=".8"
                  src="assets/img/home-1/Image.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="logo-image">
                  <Link href="/">
                    <img src="assets/img/logo/white-logo.svg" alt="img" />
                  </Link>
                </div>
                <div className="section-title mb-0">
                  <h2 className="sec-title text-white text-anim">
                    Adventure is Calling – Are You Ready?
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".3s">
                  Get ready to embark on unforgettable journeys with us. whether
                  you’re seeking thrilling adventures, relaxing escapes
                </p>
                <Link href="/tour-details" className="theme-btn">
                  Explore Our Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact2 = () => {
  return (
    <section
      className="contact-section-2 section-padding pb-0 fix bg-cover"
      style={{ backgroundImage: "url(assets/img/home-2/contact-bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">
            Subscribe Our Newsletter To <br />
            Get More Offer &amp; Tips
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Crafting journeys, creating memories plan smarter, travel better
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div
              className="contact-content-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
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
    </section>
  );
};

export const Contact3 = () => {
  const images = [
    { img: "assets/img/home-4/feature/03.jpg", col: "col-lg-7" },
    { img: "assets/img/home-4/feature/04.jpg", col: "col-lg-5" },
    { img: "assets/img/home-4/feature/05.jpg", col: "col-lg-5" },
    { img: "assets/img/home-4/feature/06.jpg", col: "col-lg-7" },
  ];
  return (
    <section className="contact-section-4 section-padding fix">
      <div className="container">
        <div className="contact-wrapper-4">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title">
                  <h2 className="text-anim">Book luxury &amp; Suite</h2>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Indulge in the ultimate comfort and elegance by booking our
                    luxury room suites designed with exquisite attention to
                    detail, each suite offers spacious
                  </p>
                </div>
                <div className="contact-content">
                  <form action="contact.php" id="contact-form1" method="POST">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt mb-10">
                          <span>Full name</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="David Michel"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt mb-10">
                          <span>Email Address</span>
                          <input
                            type="text"
                            name="email"
                            id="email6"
                            placeholder="example@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt mb-10">
                          <span>Phone No</span>
                          <input
                            type="text"
                            name="Number"
                            id="Number"
                            placeholder="+1 (234) 567 88 99"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt mb-10">
                          <span>Room Type</span>
                          <div className="form">
                            <select className="single-select">
                              <option>Family</option>
                              <option>Friends</option>
                              <option>Personal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <span>Your Message</span>
                          <textarea
                            name="message"
                            id="message1"
                            placeholder="Write message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button className="theme-btn w-100" type="submit">
                          Send your message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-2">
                {images.map((item, i) => (
                  <div
                    key={i}
                    className={`${item.col} col-md-${
                      item.col.includes("7") ? "7" : "5"
                    }`}
                  >
                    <div className="contact-image-4">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
