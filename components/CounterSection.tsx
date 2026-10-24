import Link from "next/link";
import Counter from "./Counter";

export const CounterSection1 = () => {
  const counters = [
    {
      icon: "flaticon-costumer",
      count: 30,
      suffix: "k+",
      description: "Total worldwide satisfied clients",
      delay: ".3s",
    },
    {
      icon: "flaticon-suitcase",
      count: 500,
      suffix: "+",
      description: "World tours available in toun",
      delay: ".5s",
    },
    {
      icon: "flaticon-excursion",
      count: 20,
      suffix: "+",
      description: "Professional local tour guides",
      delay: ".7s",
    },
  ];
  return (
    <section
      className="counter-section section-padding fix bg-cover"
      style={{ backgroundImage: "url(assets/img/home-1/bg.png)" }}
    >
      <div className="container">
        <div className="counter-wrapper">
          <div className="section-title text-center mb-0">
            <h2 className="text-white text-anim">
              Unlimited Travel Experience
            </h2>
            <p className="text-white wow fadeInUp" data-wow-delay=".5s">
              Crafting journeys, creating memories plan smarter, travel better
            </p>
          </div>
          <div className="row">
            <div className="counter-main-item">
              {counters.map((counter, index) => (
                <div
                  key={index}
                  className="counter-item wow fadeInUp"
                  data-wow-delay={counter.delay}
                >
                  <div className="icon">
                    <i className={counter.icon} />
                  </div>
                  <div className="content">
                    <h3>
                      <span className="count">
                        <Counter end={counter.count} />
                      </span>
                      {counter.suffix}
                    </h3>
                    <p>{counter.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CounterSection2 = () => {
  return (
    <section className="countr-section-3 section-padding fix">
      <div className="container-fluid">
        <div className="counter-wrapper-3">
          <div className="row g-2">
            <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-xl-6 col-lg-12">
                  <div className="counter-box">
                    <div className="top-items">
                      <div className="icon">
                        <i className="flaticon-traveling" />
                      </div>
                      <div className="content">
                        <h3>
                          <span className="count">
                            <Counter end={28000} />
                          </span>
                          k+
                        </h3>
                        <h6>Total worldwide satisfied clients</h6>
                      </div>
                    </div>
                    <p>
                      We’ve earned trust worldwide by delivering seamless travel
                      experiences, personalized service
                    </p>
                  </div>
                  <div className="counter-box style-2">
                    <div className="top-items">
                      <div className="icon">
                        <i className="flaticon-suitcase" />
                      </div>
                      <div className="content">
                        <h3>
                          <span className="count">
                            <Counter end={500} />
                          </span>
                          +
                        </h3>
                        <h6>World tours available in tours</h6>
                      </div>
                    </div>
                    <p>
                      Explore the globe with our wide selection of world tours,
                      carefully designed to connect
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="counter-image">
                    <img src="assets/img/home-3/counter/01.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-xl-6 col-lg-12">
                  <div className="counter-box">
                    <div className="top-items">
                      <div className="icon">
                        <i className="flaticon-excursion" />
                      </div>
                      <div className="content">
                        <h3>
                          <span className="count">
                            <Counter end={20} />
                          </span>
                          +
                        </h3>
                        <h6>Professional local tour guides</h6>
                      </div>
                    </div>
                    <p>
                      Our professional local tour guides bring destination to
                      life with their deep knowledge, passion
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="counter-box">
                    <div className="top-items">
                      <div className="icon">
                        <i className="flaticon-man" />
                      </div>
                      <div className="content">
                        <h3>
                          <span className="count">
                            <Counter end={1800} />
                          </span>
                          +
                        </h3>
                        <h6>Regular trip sold</h6>
                      </div>
                    </div>
                    <p>
                      Our regularly sold trips are a testament to their
                      popularity and traveler satisfaction.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="adventer-image">
                    <img src="assets/img/home-3/counter/02.jpg" alt="img" />
                    <div className="left-content">
                      <h6>Ready to Travel</h6>
                      <h2>
                        Adventure is calling – <br /> are you ready?
                      </h2>
                      <Link href="/tour-details" className="theme-btn">
                        Explore Tours
                      </Link>
                    </div>
                    <div className="right-box">
                      <h3>
                        <span className="count">
                          <Counter end={10} />
                        </span>
                        m+
                      </h3>
                      <p>Trusted clients / happy clients</p>
                      <img
                        src="assets/img/home-3/counter/group.png"
                        alt="img"
                      />
                    </div>
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

export const CounterSection3 = () => {
  return (
    <section className="counter-section-4 fix">
      <div className="container-fluid">
        <div className="counter-wrapper-4">
          <div className="row g-2">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="counter-box-item-4 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-costumer" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">
                      <Counter end={28000} />
                    </span>
                    +
                  </h2>
                  <p>
                    We take pride in serving thousands of satisfied clients
                    worldwide delivering exceptional
                  </p>
                </div>
              </div>
              <div
                className="counter-box-item-4 style-2 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-excursion" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">
                      <Counter end={100} />
                    </span>
                    +
                  </h2>
                  <p>
                    Our professional local tour guides bring every destination
                    to life with deep knowledge
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="counter-image-4 style-4">
                <img src="assets/img/home-4/feature/01.jpg" alt="img" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="counter-box-item-4 style-3 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-suitcase" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">
                      <Counter end={3000} />
                    </span>
                    +
                  </h2>
                  <p>
                    Discover the magic of world tours available in town designed
                    to bring you closer.
                  </p>
                </div>
              </div>
              <div
                className="counter-image-4 style-right wow fadeInRight"
                data-wow-delay=".5s"
              >
                <img src="assets/img/home-4/feature/02.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
