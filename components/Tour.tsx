import Link from "next/link";

export const Tour1 = () => {
  const tourCards = [
    {
      image: "assets/img/home-1/tour/tour-1.jpg",
      title: "Bird's Eye Of Island",
      location: "Bol, Croatia",
      tours: "50+ tours",
    },
    {
      image: "assets/img/home-1/tour/tour-2.jpg",
      title: "Climbing Waterfalls",
      location: "Bol, Croatia",
      tours: "50+ tours",
      imageStyle: "style-3",
    },
    {
      image: "assets/img/home-1/tour/tour-3.jpg",
      title: "Whitewater Rafting",
      location: "Whitewater Rafting",
      tours: "50+ tours",
      imageStyle: "style-3",
    },
    {
      image: "assets/img/home-1/tour/tour-4.jpg",
      title: "Birds Eye View of Kerkyra",
      location: "Kerkira, Greece",
      tours: "50+ tours",
      imageStyle: "style-2",
    },
    {
      image: "assets/img/home-1/tour/tour-5.jpg",
      title: "Red Multi-storey Building",
      location: "Bangkok, Thailand",
      tours: "50+ tours",
      imageStyle: "style-3",
      contentStyle: "style-4",
    },
    {
      image: "assets/img/home-1/tour/tour-6.jpg",
      title: "Sitting on the edge",
      location: "São Paulo, Brazil",
      tours: "50+ tours",
      imageStyle: "style-3",
      contentStyle: "style-5",
    },
  ];
  return (
    <section className="tour-section section-padding pt-0 fix">
      <div className="container custom-container">
        <div className="row g-1">
          <div className="col-xl-5">
            <div className="row g-1">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="tour-card-item">
                  <div
                    className={`tour-image ${tourCards[0].imageStyle || ""}`}
                  >
                    <img src={tourCards[0].image} alt="img" />
                    <span>{tourCards[0].tours}</span>
                    <div
                      className={`tour-content ${
                        tourCards[0].contentStyle || ""
                      }`}
                    >
                      <h3>
                        <Link href="/tour-details">{tourCards[0].title}</Link>
                      </h3>
                      <p>{tourCards[0].location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div
                  className="tour-card-item wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div
                    className={`tour-image ${tourCards[1].imageStyle || ""}`}
                  >
                    <img src={tourCards[1].image} alt="img" />
                    <span>{tourCards[1].tours}</span>
                    <div
                      className={`tour-content ${
                        tourCards[1].contentStyle || ""
                      }`}
                    >
                      <h3>
                        <Link href="/tour-details">{tourCards[1].title}</Link>
                      </h3>
                      <p>{tourCards[1].location}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tour-card-item mt-1 wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div
                    className={`tour-image ${tourCards[2].imageStyle || ""}`}
                  >
                    <img src={tourCards[2].image} alt="img" />
                    <span>{tourCards[2].tours}</span>
                    <div
                      className={`tour-content ${
                        tourCards[2].contentStyle || ""
                      }`}
                    >
                      <h3>
                        <Link href="/tour-details">{tourCards[2].title}</Link>
                      </h3>
                      <p>{tourCards[2].location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="row g-1">
              <div
                className="col-xl-8 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="tour-card-item">
                  <div
                    className={`tour-image ${tourCards[3].imageStyle || ""}`}
                  >
                    <img src={tourCards[3].image} alt="img" />
                    <span>{tourCards[3].tours}</span>
                    <div
                      className={`tour-content ${
                        tourCards[3].contentStyle || ""
                      }`}
                    >
                      <h3>
                        <Link href="/tour-details">{tourCards[3].title}</Link>
                      </h3>
                      <p>{tourCards[3].location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div
                  className="tour-card-item wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div
                    className={`tour-image ${tourCards[4].imageStyle || ""}`}
                  >
                    <img src={tourCards[4].image} alt="img" />
                    <span>{tourCards[4].tours}</span>
                    <div
                      className={`tour-content ${
                        tourCards[4].contentStyle || ""
                      }`}
                    >
                      <h3>
                        <Link href="/tour-details">{tourCards[4].title}</Link>
                      </h3>
                      <p>{tourCards[4].location}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tour-card-item mt-1 wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div
                    className={`tour-image ${tourCards[5].imageStyle || ""}`}
                  >
                    <img src={tourCards[5].image} alt="img" />
                    <span>{tourCards[5].tours}</span>
                    <div
                      className={`tour-content ${
                        tourCards[5].contentStyle || ""
                      }`}
                    >
                      <h3>
                        <Link href="/tour-details">{tourCards[5].title}</Link>
                      </h3>
                      <p>{tourCards[5].location}</p>
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
