import Link from "next/link";

export const Benefit1 = () => {
  const benefits = [
    {
      icon: "flaticon-traveling",
      title: "Expert Travel Guide",
      description:
        "Travel professionals who help destinations, accommodations, and activities tailored.",
      animation: "fadeInLeft",
      delay: ".3s",
      colClass: "col-xl-3 col-lg-4 col-md-6",
    },
    {
      icon: "flaticon-roadmap",
      title: "Custom Tour Plan",
      description:
        "Enjoy trips designed around your preferences, whether you want a relaxing beach holiday",
      animation: "fadeInRight",
      delay: ".5s",
      colClass: "col-xl-3 col-lg-4 col-md-6",
    },
    {
      icon: "flaticon-mouse",
      title: "Hassle-Free Booking",
      description:
        "Save time and effort with a single platform to book flights, hotels, activities, transportation",
      animation: "fadeInUp",
      delay: ".2s",
      colClass: "col-xl-3 col-lg-4 col-md-6",
    },
    {
      icon: "flaticon-promotion",
      title: "Deals & Discounts",
      description:
        "Save time and effort with a single platform to book flights, hotels, activities, transportation",
      animation: "fadeInUp",
      delay: ".4s",
      colClass: "col-xl-3 col-lg-4 col-md-6",
    },
    {
      icon: "flaticon-tourist",
      title: "Local Guides Authentic",
      description:
        "Immerse yourself local culture with trusted guides who provide insider tips and hidden",
      animation: "fadeInUp",
      delay: ".6s",
      colClass: "col-xl-3 col-lg-4 col-md-6",
    },
    {
      icon: "flaticon-insurance",
      title: "Travel Insurance",
      description:
        "Stay protected with insurance options and on-ground support for a worry-free experience.",
      animation: "fadeInUp",
      delay: ".8s",
      colClass: "col-xl-3 col-lg-4 col-md-6",
    },
  ];
  const centerImage = {
    src: "assets/img/home-1/tour/tour-7.jpg",
    alt: "img",
    colClass: "col-xl-6 col-lg-4 col-md-6",
  };

  return (
    <section className="benefit-tour-section section-padding fix header-bg">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-white text-anim">How to Benefit Our Tours</h2>
          <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            Make the most of your travel experience with our carefully <br />
            curated tours designed to offer convenience
          </p>
        </div>
        <div className="row">
          {/* First benefit */}
          <div
            className={`${benefits[0].colClass} wow ${benefits[0].animation}`}
            data-wow-delay={benefits[0].delay}
          >
            <div className="benefit-tour-item">
              <div className="icon">
                <i className={benefits[0].icon} />
              </div>
              <div className="content">
                <h5>
                  <Link href="/tour-details">{benefits[0].title}</Link>
                </h5>
                <p>{benefits[0].description}</p>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className={`${centerImage.colClass} wow img-custom-anim-top`}>
            <div className="benefit-tour-image">
              <img src={centerImage.src} alt={centerImage.alt} />
            </div>
          </div>

          {/* Second benefit */}
          <div
            className={`${benefits[1].colClass} wow ${benefits[1].animation}`}
            data-wow-delay={benefits[1].delay}
          >
            <div className="benefit-tour-item">
              <div className="icon">
                <i className={benefits[1].icon} />
              </div>
              <div className="content">
                <h5>
                  <Link href="/tour-details">{benefits[1].title}</Link>
                </h5>
                <p>{benefits[1].description}</p>
              </div>
            </div>
          </div>

          {/* Remaining benefits */}
          {benefits.slice(2).map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.colClass} wow ${benefit.animation}`}
              data-wow-delay={benefit.delay}
            >
              <div className="benefit-tour-item">
                <div className="icon">
                  <i className={benefit.icon} />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/tour-details">{benefit.title}</Link>
                  </h5>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Benefit2 = () => {
  const tourBenefitItems = [
    {
      type: "benefit",
      icon: "flaticon-traveling",
      title: "Expert Travel Guide",
      description:
        "Travel professionals who help destinations, accommodations, and activities tailored.",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "image",
      image: "assets/img/home-2/tour/tour-1.jpg",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "benefit",
      icon: "flaticon-promotion",
      title: "Deals & Discounts",
      description:
        "Access special rates and offers not available to general public, ensuring the best value",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "image",
      image: "assets/img/home-2/tour/tour-2.jpg",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "benefit",
      icon: "flaticon-roadmap",
      title: "Custom Tour Plan",
      description:
        "Enjoy trips designed around your preferences, whether you want a relaxing beach holiday",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "image",
      image: "assets/img/home-2/tour/tour-3.jpg",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "benefit",
      icon: "flaticon-tourist",
      title: "Local Guides Authentic",
      description:
        "Immerse yourself local culture with trusted guides who provide insider tips and hidden",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "image",
      image: "assets/img/home-2/tour/tour-6.jpg",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "image",
      image: "assets/img/home-2/tour/tour-4.jpg",
      colClass: "col-xl-4 col-md-6 col-lg-4",
    },
    {
      type: "benefit",
      icon: "flaticon-mouse",
      title: "Hassle-Free Booking",
      description:
        "Save time and effort with a single platform to book flights, hotels, activities, transportation",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
    {
      type: "image",
      image: "assets/img/home-2/tour/tour-5.jpg",
      colClass: "col-xl-2 col-md-6 col-lg-4",
    },
  ];
  return (
    <section className="tour-benefit-section-2 section-padding fix header-bg">
      <div className="container custom-container-4">
        <div className="section-title text-center">
          <h2 className="text-white text-anim">How To Benefit Our Tours</h2>
          <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            Make the most of your travel experience with our carefully <br />
            curated tours designed to offer convenience
          </p>
        </div>
        <div className="tour-benefit-wrapper-2">
          <span className="right-border" />
          <div className="row g-4 justify-content-center">
            {tourBenefitItems.map((item, index) => (
              <div key={index} className={item.colClass}>
                {item.type === "benefit" ? (
                  <div className="tour-benefit-item-2">
                    <div className="icon">
                      <i className={item.icon} />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/tour-details">{item.title}</Link>
                      </h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="tour-benefit-image">
                    <img src={item.image} alt="img" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
