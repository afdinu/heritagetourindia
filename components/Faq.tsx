"use client";
import { Accordion } from "react-bootstrap";

export const Faq1 = () => {
  const accordionItems = [
    {
      id: "Two",
      number: "01",
      title: "Kayaking",
      content:
        "Glide through serene waters and discover breathtaking scenery with our kayaking adventures.",
      isExpanded: true,
    },
    {
      id: "One",
      number: "02",
      title: "Climbing",
      content:
        "Glide through serene waters and discover breathtaking scenery with our kayaking adventures.",
    },
    {
      id: "Three",
      number: "03",
      title: "Hiking",
      content:
        "Glide through serene waters and discover breathtaking scenery with our kayaking adventures.",
    },
    {
      id: "Four",
      number: "04",
      title: "Mountain biking",
      content:
        "Glide through serene waters and discover breathtaking scenery with our kayaking adventures.",
    },
    {
      id: "Five",
      number: "05",
      title: "Tent Camping",
      content:
        "Glide through serene waters and discover breathtaking scenery with our kayaking adventures.",
      extraClass: "mb-0",
    },
  ];
  return (
    <section className="faq-section-3 section-padding fix header-bg pt-0">
      <div className="faq-shape">
        <img src="assets/img/home-3/faq/shape-bg.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-white text-anim">
            Unleash Your Adventure with <br />
            Exciting Activities
          </h2>
          <p className="text-white wow fadeInUp" data-wow-delay=".5s">
            Turn your journey into an unforgettable adventure with our wide
            range of <br />
            travel activities from thrilling outdoor excursions and cultural
          </p>
        </div>
        <div className="faq-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="faq-left-item">
                <h3>(Lagos, Portugal)</h3>
                <div className="faq-image">
                  <img src="assets/img/home-3/faq/01.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content">
                <div className="faq-items-5">
                  <Accordion className="accordion" defaultActiveKey="Two">
                    {accordionItems.map((item, index) => (
                      <Accordion.Item
                        as={"div"}
                        eventKey={item.id}
                        key={index}
                        className={`accordion-item ${item.extraClass || ""}`}
                      >
                        <h2
                          className="accordion-header"
                          id={`technicalHeading${item.id}`}
                        >
                          <Accordion.Button
                            className={`accordion-button`}
                            type="button"
                          >
                            <span>{item.number}</span> {item.title}
                          </Accordion.Button>
                        </h2>
                        <Accordion.Collapse eventKey={item.id}>
                          <div className="accordion-body">
                            <p>{item.content}</p>
                          </div>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
