
import Link from "next/link";

const phone = process.env.NEXT_PUBLIC_TOUR_PHONE?.trim() || "";

const whatsapp = (
  process.env.NEXT_PUBLIC_TOUR_WHATSAPP?.trim() || phone
).replace(/\D/g, "");

type EnquiryButtonsProps = {
  name: string;
  href?: string;
};

type ServiceCard = {
  name: string;
  image?: string;
  description?: string;
  duration?: string;
  href: string;
};

type ServiceCardsProps = {
  cards: ServiceCard[];
};

export function EnquiryButtons({
  name,
  href,
}: EnquiryButtonsProps) {
  const message = encodeURIComponent(
    `Hello Heritage Tour Guide India, I’m interested in ${name}. Please share more details.`
  );

  return (
    <div className="d-flex flex-wrap gap-2 mt-auto">
      {href && (
        <Link
          href={href}
          className="btn btn-dark"
          aria-label={`Know more about ${name}`}
        >
          Know More
        </Link>
      )}

      {phone && (
        <a
          href={`tel:${phone}`}
          className="btn btn-outline-dark"
        >
          Call
        </a>
      )}

      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}?text=${message}`}
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      )}
    </div>
  );
}

export default function ServiceCards({
  cards,
}: ServiceCardsProps) {
  return (
    <div className="row g-4">
      {cards.map(
        ({ name, image, description, duration, href }) => (
          <div key={href} className="col-xl-4 col-md-6">
            <article className="tour-place-item h-100 d-flex flex-column">
              {image && (
                <div className="tour-place-image">
                  <Link
                    href={href}
                    className="d-block"
                    aria-label={`View ${name}`}
                  >
                    <img
                      src={`/${image.replace(/^\/+/, "")}`}
                      alt={name}
                      loading="lazy"
                      className="w-100"
                      style={{
                        aspectRatio: "4 / 3",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
              )}

              <div className="tour-place-content d-flex flex-column flex-grow-1">
                <h2>
                  <Link href={href}>{name}</Link>
                </h2>

                {description && (
                  <p className="mt-2 mb-3">{description}</p>
                )}

                {duration && (
                  <p className="mb-3">{duration}</p>
                )}

                <EnquiryButtons name={name} href={href} />
              </div>
            </article>
          </div>
        )
      )}
    </div>
  );
}
