"use client";
import { sliderProps } from "@/utilities/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export const Team1 = () => {
  const team = [
    {
      img: "assets/img/home-4/team/01.jpg",
      name: "Michael Anderson",
      role: "Resort Manager",
    },
    {
      img: "assets/img/home-4/team/02.jpg",
      name: "Michael Anderson",
      role: "Resort Manager",
    },
    {
      img: "assets/img/home-4/team/03.jpg",
      name: "Michael Anderson",
      role: "Resort Manager",
    },
    {
      img: "assets/img/home-4/team/04.jpg",
      name: "Michael Anderson",
      role: "Resort Manager",
    },
  ];
  return (
    <section className="team-section-4 section-padding fix">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-anim">Meet Our Resort Guide</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Resort Guide is designed to help you make the most of your stay{" "}
            <br />
            offering everything need to know at your fingertips.
          </p>
        </div>
        <Swiper {...sliderProps.teamSlide} className="swiper team-slider-4">
          {team.map((member, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="team-card-items-4">
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="team-bottom-item">
          <button className="array-prev">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <div className="swiper-dot-7">
            <div className="dot3" />
          </div>
          <button className="array-next">
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
};
