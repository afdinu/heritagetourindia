import Link from "next/link";

type TourCard = {
  image: string;
  title: string;
  href: `/services/${string}`;
  imageStyle?: string;
  contentStyle?: string;
};

const tourCards: [TourCard, TourCard, TourCard, TourCard, TourCard, TourCard] = [
  {
    image: "/assets/img/home-1/tour/Delhi1.jpeg",
    title: "Delhi Tour Guide",
    href: "/services/delhi-tours-guide",
  },
  {
    image: "/assets/img/home-1/tour/agra1.jpeg",
    title: "Agra Tours Guide",
    href: "/services/agra-tours-guide",
    imageStyle: "style-3",
  },
  {
    image: "/assets/img/home-1/tour/golden-triangle-tour.jpeg",
    title: "Golden Triangle Tours Guide",
    href: "/services/golden-triangle",
    imageStyle: "style-3",
  },
  {
    image: "/assets/img/home-1/tour/golden-triangle-wildlife-tour-package.webp",
    title: "Golden Triangle Tours Guide With Wildlife",
    href: "/services/golden-triangle-with-wildlife",
    imageStyle: "style-2",
  },
  {
    image: "/assets/img/home-1/tour/golden-triangle-tour-with-extension.jpeg",
    title: "Golden Triangle Tours Guide With Extension",
    href: "/services/golden-triangle-with-extensions",
    imageStyle: "style-3",
    contentStyle: "style-4",
  },
  {
    image: "/assets/img/home-1/tour/rajathan-tours.jpeg",
    title: "Rajasthan Tour Guide",
    href: "/services/rajasthan-tours-guide",
    imageStyle: "style-3",
    contentStyle: "style-5",
  },
];

function TourCardImage({ card }: { card: TourCard }) {
  return (
    <div className={`tour-image ${card.imageStyle ?? ""}`}>
      <Link
        href={card.href}
        className="d-block"
        aria-label={card.title}
        tabIndex={-1}
      >
        <img src={card.image} alt="" />
      </Link>

      <div className={`tour-content ${card.contentStyle ?? ""}`}>
        <h3>
          <Link href={card.href}>{card.title}</Link>
        </h3>
      </div>
    </div>
  );
}

export const Tour1 = () => {
  const [delhi, agra, goldenTriangle, wildlife, extension, rajasthan] =
    tourCards;

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
                  <TourCardImage card={delhi} />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div
                  className="tour-card-item wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <TourCardImage card={agra} />
                </div>

                <div
                  className="tour-card-item mt-1 wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <TourCardImage card={goldenTriangle} />
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
                  <TourCardImage card={wildlife} />
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div
                  className="tour-card-item wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <TourCardImage card={extension} />
                </div>

                <div
                  className="tour-card-item mt-1 wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <TourCardImage card={rajasthan} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};