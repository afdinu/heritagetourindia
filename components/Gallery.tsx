"use client";
import Link from "next/link";
import { useState } from "react";

export const Gallery1 = () => {
  const images = [
    "/assets/img/home-3/gallery/01.jpg",
    "/assets/img/home-3/gallery/02.jpg",
    "/assets/img/home-3/gallery/03.jpg",
    "/assets/img/home-3/gallery/04.jpg",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="gallery-section-3 fix">
      <div className="container-fluid">
        <div className="gallery-wrapper-3">
          <div className="main-box">
            {images.map((img, i) => (
              <div
                key={i}
                className={`box-2 ${activeIndex === i ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <div className="thumb">
                  <img src={img} alt="img" />
                  <div className="project-content">
                    <div className="text">
                      <h4>
                        <Link href="/tour-details">
                          Explore Our Tour Gallery
                        </Link>
                      </h4>
                    </div>
                    <Link href="/tour-details" className="icon">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
