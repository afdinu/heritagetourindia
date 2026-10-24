import { About4 } from "@/components/About";
import { Activities1 } from "@/components/Activities";
import { Brand1 } from "@/components/Brand";
import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import { Testimonial1 } from "@/components/Testimonial";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const About = () => {
  const counters = [
    {
      icon: "flaticon-costumer",
      count: "30",
      suffix: "k+",
      text: "Total worldwide satisfied clients",
      delay: ".3s",
    },
    {
      icon: "flaticon-suitcase",
      count: "500",
      suffix: "+",
      text: "World tours available in toun",
      delay: ".5s",
    },
    {
      icon: "flaticon-excursion",
      count: "20",
      suffix: "+",
      text: "Professional local tour guides",
      delay: ".7s",
    },
  ];
  const team = [
    {
      img: "assets/img/home-2/team/01.jpg",
      name: "Emma Williams",
      role: "Senior Tour Guide",
    },
    {
      img: "assets/img/home-2/team/02.jpg",
      name: "James Anderson",
      role: "Travel Specialist",
    },
    {
      img: "assets/img/home-2/team/03.jpg",
      name: "Sophia Martinez",
      role: "Cultural Guide",
    },
    {
      img: "assets/img/home-2/team/04.jpg",
      name: "Ava Thompson",
      role: "Holiday Planner",
    },
  ];
  const features = [
    {
      icon: "flaticon-travel-agency-1",
      title: "Personal Tour Plans",
      description: "Tailored itineraries to match your interests and budget.",
    },
    {
      icon: "flaticon-price-tag",
      title: "Best Price Guarantee",
      description: "Competitive tours rates without compromising quality.",
    },
    {
      icon: "flaticon-booking",
      title: "Hassle-Free Booking",
      description: "Easy safe and hassle-free online reservation process.",
    },
    {
      icon: "flaticon-destination",
      title: "Range of Destinations",
      description: "From popular hotspots to hidden gems worldwide.",
    },
  ];
  return (
    <RoavioLayout>
      <div
        className="breadcrumb-wrapper-2 fix bg-cover"
        style={{
          backgroundImage: "url(assets/img/inner-page/breadcrumb/bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                About Us
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="style-2">About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <About4 />
      <div
        className="video-section-2 fix bg-cover"
        style={{ backgroundImage: "url(assets/img/home-2/video-bg.jpg)" }}
      >
        <div className="container">
          <div className="video-content">
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="video-btn video-popup"
            >
              <i className="fa-duotone fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Counter Section Start */}
      <section className="counter-section-2 section-padding fix">
        <div className="container">
          <div className="counter-wrapper-2">
            <div className="section-title text-center mb-0">
              <h2 className="text-white text-anim">
                Unlimited Travel Experience
              </h2>
              <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                Crafting journeys, creating memories plan smarter, travel better
              </p>
            </div>
            <div className="row">
              <div className="counter-main-item-2">
                {counters.map((counter, i) => (
                  <div
                    key={i}
                    className="counter-item wow fadeInUp"
                    data-wow-delay={counter.delay}
                  >
                    <div className="icon">
                      <i className={counter.icon} />
                    </div>
                    <div className="content">
                      <h3>
                        <span className="count">
                          <Counter end={counter.count} />
                        </span>
                        {counter.suffix}
                      </h3>
                      <p>{counter.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section-2 Start */}
      <div className="team-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">Meet Our Travel Guide</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              The leadership team guiding Togo’s success
            </p>
          </div>
          <div className="row">
            {team.map((member, i) => (
              <div key={i} className="col-xl-3 col-md-6 col-lg-3">
                <div className="team-image-item">
                  <div className="team-image">
                    <img src={member.img} alt="img" />
                  </div>
                  <div className="team-content">
                    <h3>
                      <Link href="/team-details">{member.name}</Link>
                    </h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Choose Section-2 Start */}
      <div
        className="choose-us-section section-padding fix bg-cover"
        style={{ backgroundImage: "url(assets/img/home-2/bg.jpg)" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-anim">People Why Choose Us</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              We offer personalized itineraries, competitive pricing
            </p>
          </div>
          <div className="row">
            {features.map((feature, i) => (
              <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                <div className="choose-us-box">
                  <div className="icon">
                    <i className={feature.icon} />
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
      </div>
      <Activities1 />
      <Testimonial1 />
      <Brand1 />
      <Contact1 />
    </RoavioLayout>
  );
};

export default About;
