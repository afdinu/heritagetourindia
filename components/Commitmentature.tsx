import Counter from "./Counter";

export const Commitmentature1 = () => {
  return (
    <section className="commitment-section section-padding fix header-bg">
      <div className="container">
        <div className="commitment-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="commitment-content">
                <div className="section-title mb-0">
                  <h2 className="text-white text-anim">
                    Travel Adventure, Our Commitment To Excellence Turning Your
                    Travel.
                  </h2>
                </div>
                <div className="commitment-left">
                  <div className="commitment-image">
                    <img
                      data-speed=".8"
                      src="assets/img/home-2/feature/commitment-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="count-item">
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                      We’re here to deliver nothing but the best. at our travel
                      agency, adventure meets precision as we a personalized
                      itineraries designed for your ultimate experience.
                    </p>
                    <div
                      className="count-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="content">
                        <h2>
                          <span className="count">
                            <Counter end={500} />
                          </span>
                          +
                        </h2>
                        <p>World tours available</p>
                      </div>
                      <div className="content">
                        <h2>
                          <span className="count">
                            <Counter end={20} />
                          </span>
                          +
                        </h2>
                        <p>Professional local guides</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="commitment-image-item">
                <div className="commitment-image">
                  <img
                    data-speed=".8"
                    src="assets/img/home-2/feature/commitment-2.jpg"
                    alt="img"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="fa-duotone fa-play" />
                  </a>
                </div>
                <div className="commitment-image style-2">
                  <img
                    data-speed=".8"
                    src="assets/img/home-2/feature/commitment-3.jpg"
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
