export const WhyChooseUs1 = () => {
  const features = [
    {
      icon: "flaticon-traveling",
      title: "Locally Crafted Journeys",
      text: "Every journey we offer is thoughtfully curated by locals who know their destinations best.",
    },
    {
      icon: "flaticon-travel-agency",
      title: "Self guided flexibility",
      text: "Enjoy the freedom to explore at your own pace with our self-guided flexibility.",
    },
    {
      icon: "flaticon-travel",
      title: "No hidden charge included",
      text: "We believe in transparent pricing, so what you see is exactly what you pay.",
    },
    {
      icon: "flaticon-roadmap",
      title: "Custom tours package",
      text: "Design your dream trip with our custom tour packages, tailored to your preferences",
    },
  ];
  return (
    <section className="why-choose-us-section-3 section-padding fix bg-color-5">
      <div className="left-shape">
        <img src="assets/img/home-3/destination/shape-1.png" alt="img" />
      </div>
      <div className="right-shape">
        <img src="assets/img/home-3/destination/shape-2.png" alt="img" />
      </div>
      <div className="bottom-shape">
        <img src="assets/img/home-3/destination/shape-3.png" alt="img" />
      </div>
      <div className="container-fluid">
        <div className="section-title text-center">
          <h2 className="text-white text-anim">Why Choose Our Agency</h2>
          <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            Crafting Join over 100,000 satisfied travelers who have experienced
          </p>
        </div>
        <div className="row">
          {features.map((feature, i) => (
            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
              <div className="choose-us-box-items-3">
                <div className="icon">
                  <i className={feature.icon} />
                </div>
                <h5>{feature.title}</h5>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
