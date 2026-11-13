// import areas from "../../data/service-areas.json";
import serviceAreas from "../../data/service-areas.json";

import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";

import Link from "next/link";

const phoneNumber = "+917737244759";
const whatsappNumber = "917737244759";

export default function TourGrid() {
  const tours = serviceAreas.filter((area) => area.showOnMainGrid !== false);

  return (
    <RoavioLayout>
      <div
        className="breadcrumb-wrapper-2 style-tour-page bg-cover"
        style={{
          backgroundImage: "url(/assets/img/inner-page/breadcrumb/bg-4.jpg)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Tour Guide Services
              </h1>
            </div>

            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="style-2">Tour Areas</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="tour-grid-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Explore India with a Local Tour Guide</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Choose a guided tour in Delhi, Agra, or Rajasthan, or plan a
              Golden Triangle trip with a wildlife safari or extra stops.
            </p>
          </div>

          <div className="row g-4">
            {tours.map((tour, index) => {
              const href = `/services/${tour.city}`;
              const image = tour.image
                ? `/${tour.image.replace(/^\/+/, "")}`
                : null;
              const message = encodeURIComponent(
                `Hello Heritage Tour Guide India, I’m interested in ${tour.name}. Could you share the tour options?`
              );

              return (
                <div
                  key={tour.city}
                  className="col-xl-4 col-lg-6 col-md-6 d-flex wow fadeInUp"
                  data-wow-delay={`${(index % 3 + 1) * 200}ms`}
                >
                  <article className="tour-place-item w-100 d-flex flex-column">
                    {image && (
                      <div className="tour-place-image">
                        <Link
                          href={href}
                          className="d-block"
                          aria-label={`View ${tour.name} tours`}
                        >
                          <img
                            src={image}
                            alt={tour.imageAlt || ""}
                            className="w-100"
                            style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                    )}

                    <div className="tour-place-content d-flex flex-column flex-grow-1">
                      <div className="rating-item mb-1">
                        <div className="star" aria-hidden="true">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>

                      <h3 className="mb-2">
                        <Link href={href}>{tour.name}</Link>
                      </h3>

                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <Link
                          href={href}
                          className="btn btn-dark"
                          aria-label={`View details for ${tour.name}`}
                        >
                          View Details
                        </Link>

                        <div className="d-flex align-items-center gap-2 ms-auto">
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${message}`}
                            className="btn btn-outline-success"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`WhatsApp about ${tour.name}`}
                          >
                            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                          </a>

                          <a
                            href={`tel:${phoneNumber}`}
                            className="btn btn-outline-dark"
                            aria-label={`Call about ${tour.name}`}
                          >
                            <i className="fa-solid fa-phone" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact1 />
    </RoavioLayout>
  );
}