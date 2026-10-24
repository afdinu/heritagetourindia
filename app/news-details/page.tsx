import BlogSidebar from "@/components/BlogSidebar";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const NewsDetails = () => {
  return (
    <RoavioLayout>
      {/* Hero Section Start */}
      <div className="breadcrumb-wrapper fix">
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Blog Details
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="style-2">Blog Details</li>
            </ul>
          </div>
        </div>
      </div>
      {/* News Section Start */}
      <section className="news-details-section section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-12">
              <div className="news-details-post">
                <ul className="list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="style-2">Single blog</li>
                </ul>
                <h2>
                  Best family-friendly travel spots around the world
                  eco-friendly travel how to make your trips sustainable
                </h2>
                <ul className="list-items">
                  <li className="list">Tours &amp; travel</li>
                  <li className="list">By Admin</li>
                  <li className="list">20 August 2025</li>
                  <li className="list">Comments (5)</li>
                </ul>
                <div className="news-details-content">
                  <p>
                    Make every moment of your journey unforgettable with our
                    exciting range of tour activities. from breathtaking city
                    sightseeing and cultural heritage tours to
                    adrenaline-pumping adventures like hiking, snorkeling, and
                    desert safaris, we have something for every traveler.
                  </p>
                  <div className="details-thumb">
                    <img
                      src="assets/img/inner-page/news-details/details-1.jpg"
                      alt="img"
                    />
                  </div>
                  <h3>
                    Eco-Friendly Travel How to Make Your Trips Sustainable
                  </h3>
                  <p className="mt-2">
                    Agency plays a pivotal role in crafting memorable
                    experiences for travelers by offering wide range services
                    tailored to individual preferences. Whether it's a family
                    vacation, an adventure trip, or luxury getaway
                    well-established travel agency can handle everything from
                    flight bookings and accommodation to guided tours .
                  </p>
                  <p className="mt-4">
                    We have something for every traveler. indulge in local
                    cuisines, explore hidden gems, and enjoy unique experiences
                    that go beyond the ordinary. whether you’re seeking
                    relaxation or adventure, our curated activities ensure your
                    trip is packed with memories that last a lifetime.
                  </p>
                  <div className="sideber">
                    <div className="icon">
                      <i className="flaticon-quote" />
                    </div>
                    <div className="content">
                      <h5>
                        "In the world of tours and travel, every journey is an
                        invitation to explore the unknown, connect with
                        cultures, and create memories that last lifetime It's
                        not just about the destination,extraordinary
                        adventures."
                      </h5>
                      <span>Kevin F. Glasscock</span>
                    </div>
                  </div>
                  <div className="details-thumb">
                    <img
                      src="assets/img/inner-page/news-details/details-2.jpg"
                      alt="img"
                    />
                  </div>
                  <h3>
                    Adventure Awaits Thrilling Activities for Bold Travelers
                  </h3>
                  <p className="mt-2">
                    Stay connected and never miss a deal! subscribe to our
                    newsletter and get exclusive travel offers, insider tips,
                    and the latest destination trends delivered straight to your
                    inbox. from budget-friendly deals to expert travel advice,
                    we’ll help you plan the perfect trip every time. join our
                    community of travelers today and start exploring smarter!
                  </p>
                  <div className="row tag-share-wrap">
                    <div className="col-xl-8 col-lg-7">
                      <div className="tagcloud">
                        <span>Tags:</span>
                        <Link href="/news-details">Travel</Link>
                        <Link href="/news-details">Guide</Link>
                        <Link href="/news-details">Hiking</Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                      <div className="social-share">
                        <span>Share</span>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="client-info-box">
                    <div className="client-image">
                      <img
                        src="assets/img/inner-page/news-details/client-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="info-content">
                      <h5>Richard M. Fudge</h5>
                      <span>Author</span>
                      <p>
                        "I’ve traveled with many agencies, but this one stands
                        out! personalized approach and attention to detail made
                        our honeymoon unforgettable.
                      </p>
                      <div className="social-icon">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4>Related post</h4>
                  <div className="related-post-item">
                    <div className="recent-item">
                      <div className="recent-thumb">
                        <img
                          src="assets/img/inner-page/news-details/post-1.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="recent-content">
                        <span>20 August 2025</span>
                        <h5>
                          <Link href="/news-details">
                            Best Family-Friendly Travel <br /> Spots Around the
                            World
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="recent-item">
                      <div className="recent-thumb">
                        <img
                          src="assets/img/inner-page/news-details/post-2.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="recent-content">
                        <span>23 August 2025</span>
                        <h5>
                          <Link href="/news-details">
                            Luxury Travel on a Budget <br /> Secrets Revealed
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="comment-area">
                    <h3>Comments</h3>
                    <div className="comment-item">
                      <div className="comment-image">
                        <img
                          src="assets/img/inner-page/news-details/comment.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h6>Lonnie B. Horwitz</h6>
                        <span>
                          <i className="far fa-calendar-alt" /> September 25
                          ,2025
                        </span>
                        <p>
                          Tours and travels play a crucial role in enriching
                          lives by offering unique experiences, cultural
                          exchanges, and the joy of exploration.
                        </p>
                        <a className="read-more" href="#">
                          Reply <i className="far fa-angle-right" />
                        </a>
                      </div>
                    </div>
                    <div className="comment-item style-2">
                      <div className="comment-image">
                        <img
                          src="assets/img/inner-page/news-details/comment-2.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h6>Jaime B. Wilson</h6>
                        <span>
                          <i className="far fa-calendar-alt" /> September 25
                          ,2025
                        </span>
                        <p>
                          Tours and travels play a crucial role in enriching
                          lives by offering unique experiences, cultural
                          exchanges, and the joy of exploration.
                        </p>
                        <a className="read-more" href="#">
                          Reply <i className="far fa-angle-right" />
                        </a>
                      </div>
                    </div>
                    <div className="comment-item">
                      <div className="comment-image">
                        <img
                          src="assets/img/inner-page/news-details/comment-3.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h6>Michael A. Saladin</h6>
                        <span>
                          <i className="far fa-calendar-alt" /> September 25
                          ,2025
                        </span>
                        <p>
                          Tours and travels play a crucial role in enriching
                          lives by offering unique experiences, cultural
                          exchanges, and the joy of exploration.
                        </p>
                        <a className="read-more" href="#">
                          Reply <i className="far fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form-wrap">
                    <h4>Leave a comments</h4>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form action="#">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
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
                              placeholder="Write comment"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                        <div className="col-lg-6">
                          <button type="submit" className="theme-btn">
                            Send your Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>
          </div>
          <div className="page-nav-wrap">
            <ul>
              <li>
                <a className="page-numbers active" href="#">
                  <i className="fa-solid fa-chevron-left" />
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  1
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  2
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  3
                </a>
              </li>
              <li>
                <a className="page-numbers style-2" href="#">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="contact-section section-padding pb-0">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-end">
              <div className="col-lg-6">
                <div className="contact-image">
                  <img
                    data-speed=".8"
                    src="assets/img/home-1/Image.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="logo-image">
                    <Link href="/">
                      <img src="assets/img/logo/white-logo.svg" alt="img" />
                    </Link>
                  </div>
                  <div className="section-title mb-0">
                    <h2 className="sec-title text-white text-anim">
                      Adventure Is Calling – Are You Ready?
                    </h2>
                  </div>
                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                    Get ready to embark on unforgettable journeys with us.
                    whether you’re seeking thrilling adventures, relaxing
                    escapes
                  </p>
                  <Link href="/tour-details" className="theme-btn">
                    Explore Our Tours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RoavioLayout>
  );
};

export default NewsDetails;
