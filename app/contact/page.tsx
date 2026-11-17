import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";
import TourGuideContactForm from "@/components/TourGuideContactForm"
import Link from "next/link";

const Contact = () => {
  const contactInfo = [
    {
      icon: "fa-solid fa-envelope",
      title: "Email us",
      items: [
        {
          text: "heritagetourguide@gmail.com",
          link: "mailto:heritagetourguide@gmail.com",
        },
       
      ],
    },
    {
      icon: "fa-solid fa-phone",
      title: "Call Us",
      items: [
        { text: "+917737244759", link: "tel:+917737244759" },
        { text: "Available 24/7 hours" },
      ],
    },
    {
      icon: "fas fa-alarm-clock",
      title: "Working Hours",
      items: [{ text: "Sunday to Saturday \n 08:00 AM – 06:00 PM" }],
    },
    {
      icon: "fa-solid fa-earth-americas",
      title: "Office",
      items: [{ text: "Jaipur \n Rajasthan,302001" }],
    },
  ];
  return (
    <RoavioLayout>
      {/* Breadcrumb-Wrapper Section Start */}
      <div
        className="breadcrumb-wrapper-3 fix bg-cover"
        style={{
          backgroundImage: "url(/assets/img/inner-page/breadcrumb/bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Contact
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="style-2 style-3">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Conatct-Us Section Start */}
      <section className="conatct-us-section-3 section-padding fix">
        <div className="container">
          <div className="contact-us-wrapper-3">
            <div className="row g-4">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-us-content">
                  <div className="section-title mb-0">
                    <h2 className="text-anim">
                      Start Your Adventure Contact Us Today
                    </h2>
                  </div>
                  <p className="text">
                    Have questions or ready to plan your next adventure? Our
                    travel experts are here to guide you every step of the way.
                  </p>
                  <div className="contact-us-item">
                    {contactInfo.slice(0, 2).map((info, i) => (
                      <div key={i} className="content">
                        <h5>
                          <i className={info.icon} />
                          {info.title}
                        </h5>
                        {info.items.map((item, j) => (
                          <h6 key={j}>
                            {item.link ? (
                              <a href={item.link}>{item.text}</a>
                            ) : (
                              item.text.split("\n").map((line, k) => (
                                <span key={k}>
                                  {line}
                                  {k < item.text.split("\n").length - 1 && (
                                    <br />
                                  )}
                                </span>
                              ))
                            )}
                          </h6>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="contact-us-item mb-0">
                    {contactInfo.slice(2, 4).map((info, i) => (
                      <div key={i} className="content">
                        <h5>
                          <i className={info.icon} />
                          {info.title}
                        </h5>
                        {info.items.map((item, j) => (
                          <h6 key={j}>
                            {item.text.split("\n").map((line, k) => (
                              <span key={k}>
                                {line}
                                {k < item.text.split("\n").length - 1 && <br />}
                              </span>
                            ))}
                          </h6>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="contact-box">
                 <TourGuideContactForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section Start */}
      <div className="map-section section-padding fix pt-0">
        <div className="container">
          <div className="map-items">
            <div className="googpemap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.199848846734!2d75.79477543955082!3d26.9177743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db75dee29a50d%3A0x5f277eab0bb64757!2sHeritage%20Tour%20Guide%20India!5e0!3m2!1sen!2sin!4v1794582297508!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section Start */}
      <Contact1 />
    </RoavioLayout>
  );
};

export default Contact;
