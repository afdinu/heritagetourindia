"use client";
import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";
import { Accordion, Nav, Tab } from "react-bootstrap";

const Faq = () => {
  const commonFAQs = [
    {
      number: 1,
      question: "How do I book a trip with your agency?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 2,
      question: "Do you offer customized travel packages?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
      isExpanded: true,
    },
    {
      number: 3,
      question: "What payment methods do you accept?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 4,
      question: "Can you assist with visas and travel documents?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 5,
      question: "What happens if I need to cancel or reschedule my trip?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 6,
      question: "Do you provide travel insurance?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 7,
      question: "Are your tours suitable for families and groups?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 8,
      question: "How can I contact you during my trip?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 9,
      question: "How can I book a tour with you?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
    {
      number: 10,
      question: "Can you help with visas and travel insurance?",
      answer:
        "Yes! We specialize in tailor-made tours. You can share your preferences—destinations, activities, and budget—and we'll design a trip that suits your needs.",
    },
  ];

  // Define FAQ tabs
  const faqTabs = [
    {
      id: "technical",
      title: "General",
      isActive: true,
      navItemClass: "style-2",
      delay: ".2s",
      tabIndex: -1,
      faqs: commonFAQs,
    },
    {
      id: "work",
      title: "Pricing Plan",
      delay: ".4s",
      faqs: commonFAQs,
    },
    {
      id: "ambition",
      title: "Tour Package",
      delay: ".6s",
      tabIndex: -1,
      faqs: commonFAQs,
    },
    {
      id: "skill",
      title: "Privacy Policy",
      delay: ".8s",
      tabIndex: -1,
      faqs: commonFAQs.slice(0, 9), // Only 9 FAQs for this tab
    },
  ];

  // Helper function to convert number to word
  const numberToWord = (num: number): string => {
    const words = [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
    ];
    return words[num - 1] || num.toString();
  };
  return (
    <RoavioLayout>
      <div
        className="breadcrumb-wrapper-3 fix bg-cover"
        style={{
          backgroundImage: "url(assets/img/inner-page/breadcrumb/bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                FAQs
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2 style-3">FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Conatct-Us Section Start */}
      <section className="faq-section section-padding fix">
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                <div className="faq-left-content">
                  <div className="section-title mb-0">
                    <h2 className="text-anim">Frequently Asked Questions?</h2>
                  </div>
                  <p className="text">
                    We’ve gathered the information you need in one place you can
                    save time and make confident decisions. And if you don’t see
                    your question answered.
                  </p>
                  <Tab.Container
                    defaultActiveKey={
                      faqTabs.find((tab) => tab.isActive)?.id || "technical"
                    }
                  >
                    <Nav as="ul" className="nav" role="tablist">
                      {faqTabs.map((tab, index) => (
                        <Nav.Item
                          as="li"
                          key={index}
                          className={`nav-item ${
                            tab.navItemClass || ""
                          } wow fadeInUp`}
                          data-wow-delay={tab.delay}
                        >
                          <Nav.Link eventKey={tab.id}>{tab.title}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    <Tab.Content className="tab-content">
                      {faqTabs.map((tab, tabIndex) => (
                        <Tab.Pane key={tabIndex} eventKey={tab.id}>
                          <div className="faq-box-item">
                            <div className="faq-items-4">
                              <Accordion
                                defaultActiveKey={tab.faqs
                                  .find((f) => f.isExpanded)
                                  ?.number.toString()}
                              >
                                {tab.faqs.map((faq, faqIndex) => (
                                  <Accordion.Item
                                    key={faqIndex}
                                    eventKey={faq.number.toString()}
                                    className="accordion-item"
                                  >
                                    <Accordion.Header>
                                      {faq.number}. {faq.question}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>{faq.answer}</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                ))}
                              </Accordion>
                            </div>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="faq-right">
                  <div className="faq-bg-image">
                    <img src="assets/img/home-1/news/news-19.jpg" alt="img" />
                    <div className="tour-bg-content">
                      <span>xplore The World</span>
                      <h3>
                        <Link href="/tour-details">Best Tourist Place</Link>
                      </h3>
                      <Link href="/tour-details" className="theme-btn">
                        Explore Tours
                      </Link>
                    </div>
                  </div>
                  <div className="comment-box">
                    <h3>Have Any Questions?</h3>
                    <p>Don’t heisted to contact us</p>
                    <form action="#">
                      <div className="row g-2">
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="email"
                              id="email6"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Write message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button type="submit" className="theme-btn">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact1 />
    </RoavioLayout>
  );
};

export default Faq;
