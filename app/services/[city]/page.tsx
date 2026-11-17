import serviceAreas from "../../../data/service-areas.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

const phoneNumber = "+917737244759";
const whatsappNumber = "917737244759";

function assetPath(path?: string | null): string | null {
  const imagePath = path?.trim();

  if (!imagePath) return null;

  if (/^(https?:)?\/\//i.test(imagePath)) {
    return imagePath;
  }

  return `/${imagePath.replace(/^\/+/, "")}`;
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const area = serviceAreas.find((entry) => entry.city === city);

  if (!area) notFound();

  const breadcrumbImage =
    assetPath(area.breadcrumbImage) ||
    "/assets/img/inner-page/breadcrumb/bg-4.jpg";

  return (
    <RoavioLayout>
      <div
        className="breadcrumb-wrapper-2 style-tour-page bg-cover"
        style={{
          backgroundImage: `url(${JSON.stringify(breadcrumbImage)})`,
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {area.name}
              </h1>
            </div>

            <ul
              className="breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li className="style-2" aria-current="page">
                {area.name}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="tour-grid-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Explore Our Guided Tours</h2>
            <p>{area.description}</p>
          </div>

          {area.services.length === 0 && (
            <p className="text-center">
              Tour options will be added soon.
            </p>
          )}

          <div className="row g-4">
            {area.services.map((tour, index) => {
              const href = `/services/${area.city}/${tour.slug}`;

              const tourImage = assetPath(tour.image);
              const image = tourImage || assetPath(area.image);
              const imageAlt = tourImage
                ? tour.imageAlt
                : area.imageAlt;

              const message = encodeURIComponent(
                `Hello Heritage Tour Guide India, I’m interested in ${tour.name} (${area.name}). Could you share the details?`
              );

              return (
                <div
                  key={tour.slug}
                  className="col-xl-4 col-lg-6 col-md-6 d-flex wow fadeInUp"
                  data-wow-delay={[".2s", ".4s", ".6s"][index % 3]}
                >
                  <article className="tour-place-item w-100 d-flex flex-column">
                    {image && (
                      <div className="tour-place-image">
                        <Link
                          href={href}
                          className="d-block"
                          aria-label={`View details for ${tour.name}`}
                        >
                          <img
                            src={image}
                            alt={imageAlt || ""}
                            className="w-100"
                            style={{
                              aspectRatio: "4 / 3",
                              objectFit: "cover",
                            }}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                    )}

                    <div className="tour-place-content">
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
                            aria-label={`Ask about ${tour.name} on WhatsApp`}
                          >
                            <i
                              className="fa-brands fa-whatsapp"
                              aria-hidden="true"
                            />
                          </a>

                          <a
                            href={`tel:${phoneNumber}`}
                            className="btn btn-outline-dark"
                            aria-label={`Call about ${tour.name}`}
                          >
                            <i
                              className="fa-solid fa-phone"
                              aria-hidden="true"
                            />
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