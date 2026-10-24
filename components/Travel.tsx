import Link from "next/link";

export const Travel1 = () => {
  const services = [
    {
      icon: "flaticon-cutlery",
      title: "Organic Food and \n Restaurant",
      text: "Indulge in a culinary journey like no other with our handpicked restaurant selections.",
      delay: ".2s",
    },
    {
      icon: "flaticon-swimming-pool",
      title: "Swimming pools \n and relaxation",
      text: "Dive into relaxation with our crystal-clear swimming pools designed for every mood",
      delay: ".4s",
    },
    {
      icon: "flaticon-stationary-bike",
      title: "Yoga GYM and \n fitness center",
      text: "Stay active and energized during your travels with our state-of-the-art fitness center.",
      delay: ".6s",
    },
    {
      icon: "flaticon-washing-machine",
      title: "Fresh & Clean \n Laundry Service",
      text: "Indulge in a culinary journey like no other with our handpicked restaurant selections.",
      delay: ".8s",
    },
  ];
  return (
    <section className="travel-section-4 section-padding pb-0 fix">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">Travel Made Easy With Us</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            We believe travel is more than just a trip—it’s an experience that
            shapes <br />
            your life. Our mission is to create unforgettable journeys
          </p>
        </div>
        <div className="row">
          {services.map((service, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="travel-box-items-4">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/tour-details">
                      {service.title.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < service.title.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </Link>
                  </h5>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
