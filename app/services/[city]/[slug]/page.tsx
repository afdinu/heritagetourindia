import serviceAreas from "../../../../data/service-areas.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Contact1 } from "@/components/Contact";
import TourEnquiryForm from "@/components/TourEnquiryForm";
import RoavioLayout from "@/layout/RoavioLayout";

// --------------------------------------------------
// TYPES
// --------------------------------------------------

type ServiceArea = (typeof serviceAreas)[number];
type Tour = ServiceArea["services"][number];

type TourParams = {
  city: string;
  slug: string;
};

type TourPageProps = {
  params: Promise<TourParams>;
};

type TourListProps = {
  title: string;
  items?: string[];
  icon?: string;
};

type GalleryPhoto = {
  src: string;
  alt?: string;
};

// --------------------------------------------------
// CONSTANTS
// --------------------------------------------------

const phone = "+917737244759";
function assetPath(path: string): string {
  return `/${path.replace(/^\/+/, "")}`;
}

async function getTour(
  params: Promise<TourParams>
): Promise<{
  area: ServiceArea;
  tour: Tour;
}> {
  const { city, slug } = await params;

  const area = serviceAreas.find((entry) => entry.city === city);

  const tour = area?.services.find(
    (entry) => entry.slug === slug
  );

  if (!area || !tour) {
    notFound();
  }

  return { area, tour };
}

// --------------------------------------------------
// SEO METADATA
// --------------------------------------------------

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { tour } = await getTour(params);

  return {
    title:
      tour.seo?.title ||
      `${tour.name} | Heritage Tour Guide India`,

    description:
      tour.seo?.description ||
      tour.summary ||
      tour.description,
  };
}

// --------------------------------------------------
// REUSABLE TOUR LIST COMPONENT
// --------------------------------------------------

function TourList({
  title,
  items = [],
  icon = "fa-check",
}: TourListProps) {
  if (!items.length) return null;

  return (
    <div className="list-item mb-4">
      <h3>{title}</h3>

      <ul className="list">
        {items.map((item) => (
          <li key={item}>
            <i
              className={`fa-solid ${icon}`}
              aria-hidden="true"
            />{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// --------------------------------------------------
// MAIN TOUR DETAILS PAGE
// --------------------------------------------------

export default async function TourDetails({
  params,
}: TourPageProps) {
  const { area, tour } = await getTour(params);

  const areaHref = `/tour-areas/${area.city}`;

  const cover = tour.image || area.image;

  const coverAlt = tour.image
    ? tour.imageAlt
    : area.imageAlt;

  const gallery: GalleryPhoto[] = tour.gallery?.length
    ? tour.gallery
    : cover
      ? [{ src: cover, alt: coverAlt || "" }]
      : [];

  const relatedTours = area.services
    .filter((entry) => entry.slug !== tour.slug)
    .slice(0, 3);

  const breadcrumbImage = tour.breadcrumbImage || area.breadcrumbImage;

  return (
    <RoavioLayout>
      {/* BREADCRUMB SECTION */}

      <div
        className={breadcrumbImage
          ? "breadcrumb-wrapper-2 style-tour-page bg-cover"
          : "breadcrumb-wrapper fix"}
        style={breadcrumbImage ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url(${JSON.stringify(assetPath(breadcrumbImage))})`,
        } : undefined}
      >
        <div className="container">
          <div className="page-heading style-2">
            <ul
              className="breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
            >
              {/* <li>
                <Link href="/">Home</Link>
              </li> */}

              {/* <li>
                <Link href={areaHref}>{area.name}</Link>
              </li> */}

              {/* <li
                className="style-2 style-3"
                aria-current="page"
              >
                {tour.name}
              </li> */}
            </ul>

            <div className="breadcrumb-sub-title">
              <h1
                className="wow fadeInUp"
                data-wow-delay=".3s"
              >
                {tour.name}
              </h1>
            </div>

            <ul className={breadcrumbImage ? "list text-white" : "list"}>
              {tour.location && (
                <li>
                  <i className="fa-solid fa-location-dot" />{" "}
                  {tour.location}
                </li>
              )}

              {tour.duration && (
                <li>
                  <i className="fa-regular fa-clock" />{" "}
                  {tour.duration}
                </li>
              )}

              {tour.groupSize && (
                <li>
                  <i className="fa-solid fa-users" />{" "}
                  {tour.groupSize}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* TOUR DETAILS SECTION */}

      <section className="tour-details-section section-padding pt-0 fix">
        <div className="container">
          <div className="tour-details-wrappers">

            {/* TOUR CONTENT */}

            <div className="tour-details-content">
              <div className="row g-4">

                {/* LEFT CONTENT */}

                <div className="col-lg-8 col-12">
                  <div className="tour-left-content">

                    <h3>Tour Overview</h3>
                  
                    <p className="mt-3 mb-4" style={{ whiteSpace: "pre-line" }}>
                      {tour.description || tour.summary}
                    </p>

                    {/* TOUR HIGHLIGHTS */}

                    <TourList
                      title="Top Highlights"
                      items={tour.highlights}
                    />

                    {/* ITINERARY */}

                    {tour.itinerary?.length > 0 && (
                      <div className="mb-4">
                        <h3>Itinerary</h3>

                        <div className="accordion-two mt-3">
                          {tour.itinerary.map((item, index) => (
                            <details
                              className="accordion-item mb-2"
                              key={`${item.title}-${index}`}
                            >
                              <summary className="accordion-button">
                                {item.label
                                  ? `${item.label} · `
                                  : ""}
                                {item.title}
                              </summary>

                              <div className="accordion-body">
                                {item.description}
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* INCLUSIONS AND EXCLUSIONS */}

                    <div className="row g-4">
                      {tour.inclusions?.length > 0 && (
                        <div className="col-md-6">
                          <TourList
                            title="Included"
                            items={tour.inclusions}
                          />
                        </div>
                      )}

                      {tour.exclusions?.length > 0 && (
                        <div className="col-md-6">
                          <TourList
                            title="Excluded"
                            items={tour.exclusions}
                            icon="fa-xmark"
                          />
                        </div>
                      )}
                    </div>

                    {/* FREQUENTLY ASKED QUESTIONS */}

                    {tour.faqs?.length > 0 && (
                      <div className="mb-4">
                        <h3>Frequently Asked Questions</h3>

                        <div className="accordion-one mt-3">
                          {tour.faqs.map(
                            ({ question, answer }) => (
                              <details
                                className="accordion-item mb-2"
                                key={question}
                              >
                                <summary className="accordion-button">
                                  {question}
                                </summary>

                                <div className="accordion-body">
                                  {answer}
                                </div>
                              </details>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {gallery.length > 0 && (
                      <section className="mb-4" aria-labelledby="tour-gallery">
                        <h3 id="tour-gallery" className="mb-3">Tour Gallery</h3>
                        <div className="row g-3">
                          {gallery.map((photo, index) => (
                            <div
                              key={`${photo.src}-${index}`}
                              className="col-12 col-sm-6 col-xl-4"
                            >
                              <img
                                src={assetPath(photo.src)}
                                alt={photo.alt || ""}
                                className="d-block w-100 rounded"
                                style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* TOUR MAP */}

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

                {/* RIGHT SIDEBAR */}

                <div className="col-lg-4 col-12">
                  <div className="tour-details-side">
                    <div className="tour-details-sidebar sticky-style">

                      <TourEnquiryForm
                        tourName={tour.name}
                        tourPath={`${areaHref}/${tour.slug}`}
                        action={process.env.TOUR_ENQUIRY_FORM_ACTION?.trim()}
                      />

                      {/* CONTACT INFORMATION */}

                      <div className="widget-contact">
                        <h3>Need Help?</h3>

                        <ul className="list-style-one">
                          <li>
                            <i
                              className="fa-solid fa-phone"
                              aria-hidden="true"
                            />
                            {" "}
                            <a href={`tel:${phone}`}>
                              +91 77372 44759
                            </a>
                          </li>
                        </ul>

                        <Link href={areaHref}>
                          View more tours
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RELATED TOURS SECTION */}

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

                const alt = related.image
                  ? related.imageAlt
                  : area.imageAlt;

                return (
                  <div
                    key={related.slug}
                    className="col-xl-4 col-md-6"
                  >
                    <article className="tour-place-item">

                      {image && (
                        <div className="tour-place-image">
                          <Link
                            href={href}
                            className="d-block"
                            aria-label={`View ${related.name}`}
                          >
                            <img
                              src={assetPath(image)}
                              alt={alt || ""}
                              loading="lazy"
                            />
                          </Link>
                        </div>
                      )}

                      <div className="tour-place-content">

                        <div className="rating-item mb-1">
                          <div
                            className="star"
                            aria-hidden="true"
                          >
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                        </div>

                        <h3 className="mb-2">
                          <Link href={href}>
                            {related.name}
                          </Link>
                        </h3>

                        <Link
                          href={href}
                          className="btn btn-dark"
                        >
                          View Details
                        </Link>

                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* CONTACT SECTION */}

      <Contact1 />

    </RoavioLayout>
  );
}
