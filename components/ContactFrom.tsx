import Counter from "./Counter";

export const ContactFrom1 = () => {
  return (
    <div
      className="contact-from-section header-bg wow fadeInUp"
      data-wow-delay=".3s"
    >
      <div className="right-shape d-none d-xxl-block">
        <img src="assets/img/home-1/tree.png" alt="img" />
      </div>
      <div className="container-fluid">
        <div className="contact-from-wrapper">
          <div className="contact-content">
            <h2>
              <span className="count">
                <Counter end={10} />
              </span>
              m+
            </h2>
            <h6>Trusted clients / happy clients</h6>
            <div className="grop-image">
              <img src="assets/img/home-1/group.png" alt="img" />
            </div>
          </div>
          <div className="contact-right">
            <h3>Find adventure that suits your needs</h3>
            <p>
              We provide more than{" "}
              <span className="count">
                <Counter end={800} />
              </span>
              <b>+</b> travel destination
            </p>
            <div className="box-item">
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
  );
};
