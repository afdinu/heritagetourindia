import serviceAreas from "../../../../data/service-areas.json";
 import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";
// import serviceAreas from "@/data/serviceAreas.json";

const phone = "+917737244759";
const whatsapp = "917737244759";

const galleryColumns = [
  "col-xl-3",
  "col-xl-6",
  "col-xl-3",
  "col-xl-6",
  "col-xl-3",
  "col-xl-3",
];

function assetPath(path) {
  return `/${path.replace(/^\/+/, "")}`;
}

async function getTour(params) {
  const { city, slug } = await params;
  const area = serviceAreas.find((entry) => entry.city === city);
  const tour = area?.services.find((entry) => entry.slug === slug);

  if (!tour) notFound();

  return { area, tour };
}

export async function generateMetadata({ params }) {
  const { tour } = await getTour(params);

  return {
    title: tour.seo?.title || `${tour.name} | Heritage Tour Guide India`,
    description: tour.seo?.description || tour.summary || tour.description,
  };
}

function TourList({ title, items = [], icon = "fa-check" }) {
  if (!items.length) return null;

  return (
    <div className="list-item mb-4">
      <h3>{title}</h3>
      <ul className="list">
        {items.map((item) => (
          <li key={item}>
            <i className={`fa-solid ${icon}`} aria-hidden="true" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function TourDetails({ params }) {
  const { area, tour } = await getTour(params);
  const areaHref = `/tour-areas/${area.city}`;
  const cover = tour.image || area.image;
  const coverAlt = tour.image ? tour.imageAlt : area.imageAlt;
  const gallery = tour.gallery?.length
    ? tour.gallery.slice(0, 6)
    : cover
      ? [{ src: cover, alt: coverAlt }]
      : [];
  const relatedTours = area.services
    .filter((entry) => entry.slug !== tour.slug)
    .slice(0, 3);

  const message = encodeURIComponent(
    `Hello Heritage Tour Guide India, I’m interested in ${tour.name}. Could you share the availability and tour details?`
  );

  return (
    <RoavioLayout>
      <div className="breadcrumb-wrapper fix">
        <div className="container">
          <div className="page-heading style-2">
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/tour-areas">Tour Areas</Link></li>
              <li><Link href={areaHref}>{area.name}</Link></li>
              <li className="style-2 style-3" aria-current="page">
                {tour.name}
              </li>
            </ul>

            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {tour.name}
              </h1>
            </div>

            <ul className="list">
              {tour.location && (
                <li><i className="fa-solid fa-location-dot" /> {tour.location}</li>
              )}
              {tour.duration && (
                <li><i className="fa-regular fa-clock" /> {tour.duration}</li>
              )}
              {tour.groupSize && (
                <li><i className="fa-solid fa-users" /> {tour.groupSize}</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <section className="tour-details-section section-padding pt-0 fix">
        <div className="container">
          <div className="tour-details-wrappers">
            {gallery.length > 0 && (
              <div className="row g-2">
                {gallery.map((photo, index) => (
                  <div
                    key={`${photo.src}-${index}`}
                    className={
                      gallery.length === 1
                        ? "col-12"
                        : `${galleryColumns[index]} col-lg-4 col-md-6`
                    }
                  >
                    <div className="details-image">
                      <img
                        src={assetPath(photo.src)}
                        alt={photo.alt || ""}
                        className="w-100"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="tour-details-content">
              <div className="row g-4">
                <div className="col-lg-8 col-12">
                  <div className="tour-left-content">
                    <h3>Tour Overview</h3>
                    <p className="mt-3 mb-4">
                      {tour.description || tour.summary}
                    </p>

                    <div className="row g-4">
                      {tour.inclusions?.length > 0 && (
                        <div className="col-md-6">
                          <TourList title="Included" items={tour.inclusions} />
                        </div>
                      )}
                      {tour.exclusions?.length > 0 && (
                        <div className="col-md-6">
                          <TourList title="Excluded" items={tour.exclusions} icon="fa-xmark" />
                        </div>
                      )}
                    </div>

                    <TourList title="Top Highlights" items={tour.highlights} />

                    {tour.itinerary?.length > 0 && (
                      <div className="mb-4">
                        <h3>Itinerary</h3>
                        <div className="accordion-two mt-3">
                          {tour.itinerary.map((item, index) => (
                            <details className="accordion-item mb-2" key={`${item.title}-${index}`}>
                              <summary className="accordion-button">
                                {item.label ? `${item.label} · ` : ""}
                                {item.title}
                              </summary>
                              <div className="accordion-body">{item.description}</div>
                            </details>
                          ))}
                        </div>
                      </div>
                    )}

                    {tour.faqs?.length > 0 && (
                      <div className="mb-4">
                        <h3>Frequently Asked Questions</h3>
                        <div className="accordion-one mt-3">
                          {tour.faqs.map(({ question, answer }) => (
                            <details className="accordion-item mb-2" key={question}>
                              <summary className="accordion-button">{question}</summary>
                              <div className="accordion-body">{answer}</div>
                            </details>
                          ))}
                        </div>
                      </div>
                    )}

                    {tour.mapEmbedUrl && (
                      <div className="map-items">
                        <h3>Tour Map</h3>
                        <div className="googpemap">
                          <iframe
                            src={tour.mapEmbedUrl}
                            title={`Map for ${tour.name}`}
                            className="w-100"
                            height="350"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="tour-details-side">
                    <div className="tour-details-sidebar sticky-style">
                      <div className="tour-sidebar-items">
                        <h3>Tour Enquiry</h3>
                        <p className="mb-3">
                          Ask about available dates, the meeting point, and
                          options for your group.
                        </p>
                        <a
                          href={`https://wa.me/${whatsapp}?text=${message}`}
                          className="theme-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                          {" "}Enquire on WhatsApp
                        </a>
                      </div>

                      <div className="widget-contact">
                        <h3>Need Help?</h3>
                        <ul className="list-style-one">
                          <li>
                            <i className="fa-solid fa-phone" aria-hidden="true" />
                            {" "}<a href={`tel:${phone}`}>+91 77372 44759</a>
                          </li>
                        </ul>
                        <Link href={areaHref}>View more tours</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedTours.length > 0 && (
        <section className="tour-grid-section section-padding pt-0 fix">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="text-anim">Related Tours</h2>
            </div>

            <div className="row g-4">
              {relatedTours.map((related) => {
                const href = `${areaHref}/${related.slug}`;
                const image = related.image || area.image;
                const alt = related.image ? related.imageAlt : area.imageAlt;

                return (
                  <div key={related.slug} className="col-xl-4 col-md-6">
                    <article className="tour-place-item">
                      {image && (
                        <div className="tour-place-image">
                          <Link href={href} className="d-block" aria-label={`View ${related.name}`}>
                            <img src={assetPath(image)} alt={alt || ""} loading="lazy" />
                          </Link>
                        </div>
                      )}
                      <div className="tour-place-content">
                        <div className="rating-item mb-1">
                          <div className="star" aria-hidden="true">
                            <i className="fa-solid fa-star" />
                          </div>
                        </div>
                        <h3 className="mb-2"><Link href={href}>{related.name}</Link></h3>
                        <Link href={href} className="btn btn-dark">View Details</Link>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Contact1 />
    </RoavioLayout>
  );
}