import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const destinations = [
  {
    icon: "flaticon-destination",
    title: "Delhi",
    description: "Discover Old Delhi’s bazaars, historic lanes, and monuments.",
  },
  {
    icon: "flaticon-excursion",
    title: "Agra",
    description: "Visit the Taj Mahal and explore Agra’s Mughal heritage.",
  },
  {
    icon: "flaticon-travel-agency-1",
    title: "Jaipur",
    description: "Explore Amber Fort, Jaipur’s old city, and its markets.",
  },
];

const tourOptions = [
  {
    image: "/assets/img/home-1/tour/Delhi1.jpeg",
    title: "City Tours",
    description: "Explore Delhi or Agra with a local guide.",
  },
  {
    image: "/assets/img/home-1/tour/golden-triangle-tour.jpeg",
    title: "Golden Triangle Tours",
    description: "Discover Delhi, Agra, and Jaipur in one trip.",
  },
  {
    image: "/assets/img/home-1/tour/golden-triangle-wildlife-tour-package.webp",
    title: "Golden Triangle with Wildlife",
    description: "Combine the three cities with a safari in Ranthambore.",
  },
  {
    image: "/assets/img/home-1/tour/rajathan-tours.jpeg",
    title: "Rajasthan Tours & Extensions",
    description: "Add time in Rajasthan to visit more forts, palaces, and cities.",
  },
];

const features = [
  {
    icon: "flaticon-travel-agency-1",
    title: "Local Knowledge",
    description:
      "Hear the stories behind the monuments, markets, and neighbourhoods you visit.",
  },
  {
    icon: "flaticon-price-tag",
    title: "Clear Tour Details",
    description:
      "Check what’s included, how long the tour takes, and what to expect before you enquire.",
  },
  {
    icon: "flaticon-booking",
    title: "Flexible Itineraries",
    description:
      "Tell us how much time you have and what interests you, from architecture to local food.",
  },
  {
    icon: "flaticon-destination",
    title: "City Tours and Longer Trips",
    description:
      "Book a single-city tour or plan a Golden Triangle route with extra stops.",
  },
];

export default function About() {
  return (
    <RoavioLayout>
      <div
        className="breadcrumb-wrapper-2 fix bg-cover"
        style={{
          backgroundImage: "url(/assets/img/home-1/hero/slider-1.webp)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                About Heritage Tour Guide India
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li><Link href="/">Home</Link></li>
              <li className="style-2" aria-current="page">About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="/assets/img/home-1/Taj_Mahal_frontal_with_garden.webp"
                alt="The Taj Mahal viewed from its gardens"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="text-anim">Explore India with a Local Guide</h2>
              </div>
              <p>
                Heritage Tour Guide India helps travellers explore Delhi, Agra,
                Jaipur, and Rajasthan with local guides. Walk through Old Delhi’s
                markets, learn about Mughal architecture at the Taj Mahal, or
                spend a day exploring Jaipur’s forts and historic streets.
              </p>
              <p className="mt-3 mb-4">
                Choose a guided city tour or connect Delhi, Agra, and Jaipur on
                a Golden Triangle itinerary. If you have more time, ask about a
                Ranthambore safari or an extension to other cities in Rajasthan.
              </p>
              <Link href="/tour-areas" className="theme-btn">
                Explore Guided Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        className="video-section-2 fix bg-cover"
        style={{ backgroundImage: "url(/assets/img/home-1/tour/amber-fort-background.webp)" }}
      >
        <div className="container">
          <div className="video-content">
            <a
              href="https://youtu.be/0Kqd6agnKVk?si=e1VDG0s5v6vXH5Ef"
              className="video-btn video-popup"
              aria-label="Play video"
            >
              <i className="fa-duotone fa-play" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <section className="counter-section-2 section-padding fix">
        <div className="container">
          <div className="counter-wrapper-2">
            <div className="section-title text-center mb-0">
              <h2 className="text-white text-anim">Explore the Golden Triangle</h2>
              <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                Delhi’s bazaars, Agra’s Mughal monuments, and Jaipur’s hilltop forts.
              </p>
            </div>
            <div className="row">
              <div className="counter-main-item-2">
                {destinations.map((destination) => (
                  <div key={destination.title} className="counter-item wow fadeInUp">
                    <div className="icon">
                      <i className={destination.icon} aria-hidden="true" />
                    </div>
                    <div className="content">
                      <h3>{destination.title}</h3>
                      <p>{destination.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Find a Tour That Fits Your Trip</h2>
          </div>
          <div className="row g-4">
            {tourOptions.map((tour) => (
              <div key={tour.title} className="col-xl-3 col-lg-3 col-md-6">
                <article className="team-image-item">
                  <div className="team-image">
                    <img src={tour.image} alt="" loading="lazy" />
                  </div>
                  <div className="team-content">
                    <h3>{tour.title}</h3>
                    <p>{tour.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/tour-areas" className="theme-btn">
              Browse All Tour Options
            </Link>
          </div>
        </div>
      </section>

      <section
        className="choose-us-section section-padding fix bg-cover"
        style={{ backgroundImage: "url(/assets/img/home-2/bg.jpg)" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Why Travel with Heritage Tour Guide India?</h2>
          </div>
          <div className="row g-4">
            {features.map((feature) => (
              <div key={feature.title} className="col-xl-3 col-lg-6 col-md-6">
                <div className="choose-us-box">
                  <div className="icon">
                    <i className={feature.icon} aria-hidden="true" />
                  </div>
                  <div className="choose-us-content">
                    <h5>{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact1 />
    </RoavioLayout>
  );
}