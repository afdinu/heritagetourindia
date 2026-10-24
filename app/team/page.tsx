import { Contact1 } from "@/components/Contact";
import Counter from "@/components/Counter";
import { Feature3 } from "@/components/Feature";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const Team = () => {
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
    {
      img: "assets/img/home-2/team/05.jpg",
      name: "Michael Anderson",
      role: "Holiday Planner",
    },
    {
      img: "assets/img/home-2/team/06.jpg",
      name: "Christopher Hughes",
      role: "Holiday Planner",
    },
    {
      img: "assets/img/home-2/team/07.jpg",
      name: "Matthew Johnson",
      role: "Holiday Planner",
    },
    {
      img: "assets/img/home-2/team/08.jpg",
      name: "Sarah Thompson",
      role: "Holiday Planner",
    },
  ];
  return (
    <RoavioLayout>
      {/* Breadcrumb-Wrapper Section Start */}
      <div
        className="breadcrumb-wrapper-4 fix bg-cover"
        style={{
          backgroundImage: "url(assets/img/inner-page/breadcrumb/bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="breadcrumb-top-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Team Member
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href="/"> Home </Link>
                </li>
                <li className="style-2 style-3">Team Member</li>
              </ul>
            </div>
            <div className="content">
              <h2>
                <span className="count">
                  <Counter end={100} />
                </span>
                +
              </h2>
              <p>Professional Team Member</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tour-Dedicated Section Start */}
      <section className="tour-dedicated-section section-padding fix">
        <div className="container">
          <div className="tour-dedicated-wrapper">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="tour-dedicated-content">
                  <div className="section-title mb-0">
                    <h2 className="text-anim">
                      Dedicated Travel Specialists Your Dream Tours Care
                    </h2>
                    <p className="text">
                      We provide personalized guidance to ensure every journey
                      is smooth, enjoyable, and unforgettable. From planning the
                      perfect itinerary to offering 24/7 support, our trusted
                      specialists are here to make your travel experience truly
                      exceptional.
                    </p>
                    <div className="tour-dedicated-item">
                      <div className="left-icon-item">
                        <div className="icon-item">
                          <div className="icon">
                            <i className="flaticon-traveling" />
                          </div>
                          <div className="content">
                            <h5>Travel Specialists</h5>
                            <p>
                              Our travel specialists bring years of expertise.
                            </p>
                          </div>
                          <Link href="/team-details" className="theme-btn">
                            Meet Our Team
                          </Link>
                        </div>
                        <div className="icon-item">
                          <div className="icon">
                            <i className="flaticon-destination" />
                          </div>
                          <div className="content">
                            <h5>Trusted &amp; secure</h5>
                            <p>
                              At our travel agency, your safety and trust
                              priorities
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <img
                          src="assets/img/inner-page/tour-details/01.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="tour-image">
                  <img
                    data-speed=".8"
                    src="assets/img/inner-page/tour-details/02.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section-2 Start */}
      <Feature3 />
      {/* Team Section Start */}
      <section className="team-single-section section-padding fix">
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
                <div className="team-single-item">
                  <div className="team-image">
                    <img src={member.img} alt="img" />
                    <div className="icon">
                      <i className="fa-solid fa-plus" />
                    </div>
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
      </section>
      <Contact1 />
    </RoavioLayout>
  );
};

export default Team;
