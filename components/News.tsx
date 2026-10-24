import Link from "next/link";

export const News1 = () => {
  const newsItems = [
    {
      image: "assets/img/home-1/news/news-1.jpg",
      date: "18 August",
      category: "Tours & travel",
      title: "Highlight trending destinations and why they're worth exploring.",
      delay: ".2s",
    },
    {
      image: "assets/img/home-1/news/news-2.jpg",
      date: "20 August",
      category: "Tours & travel",
      title: "Tips on itinerary planning, booking, and travel hacks.",
      delay: ".4s",
    },
    {
      image: "assets/img/home-1/news/news-3.jpg",
      date: "23 August",
      category: "Tours & travel",
      title: "Focus on destinations suitable for families with kids.",
      delay: ".6s",
    },
    {
      image: "assets/img/home-1/news/news-4.jpg",
      date: "24 August",
      category: "Tours & travel",
      title:
        "Guide to enjoying luxury stays and experiences without overspending.",
      delay: ".8s",
    },
  ];
  return (
    <section className="news-section section-padding fix">
      <div className="container custom-container-2">
        <div className="section-title text-center">
          <h2 className="text-anim">Read Our Latest News &amp; Blog</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Crafting journeys, creating memories plan smarter, travel better
          </p>
        </div>
        <div className="row">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={news.delay}
            >
              <div className="news-card-items">
                <div className="news-image">
                  <img src={news.image} alt="img" />
                  <span>{news.date}</span>
                </div>
                <div className="news-content">
                  <span>{news.category}</span>
                  <h3>
                    <Link href="/news-details">{news.title}</Link>
                  </h3>
                  <Link href="/news-details" className="link-btn">
                    Read More <i className="fa-solid fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const News2 = () => {
  const newsItems = [
    {
      image: "assets/img/home-2/news/01.jpg",
      category: "Tours & travel",
      title:
        "Best Family-Friendly Destinations Around the World Tips on itinerary planning, booking, and travel hacks.",
      colClass: "col-xl-6 col-lg-6 col-md-6",
      animation: "fadeInUp",
      delay: ".3s",
    },
    {
      image: "assets/img/home-2/news/news-2.jpg",
      category: "Tours & travel",
      title: "Focus on destinations suitable for families with kids.",
      colClass: "col-xl-3 col-lg-6 col-md-6",
      animation: "fadeInUp",
      delay: ".5s",
    },
    {
      image: "assets/img/home-2/news/news-3.jpg",
      category: "Tours & travel",
      title: "Family trips filled with fun and comfort.",
      colClass: "col-xl-3 col-lg-6 col-md-6",
      animation: "fadeInRight",
      delay: ".7s",
    },
  ];

  return (
    <section className="news-section-2 section-padding fix">
      <div className="container custom-container-2">
        <div className="section-title text-center">
          <h2 className="text-anim">Read Our latest News &amp; Blog</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Crafting journeys, creating memories plan smarter, travel better
          </p>
        </div>
        <div className="row">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className={`${news.colClass} wow ${news.animation}`}
              data-wow-delay={news.delay}
            >
              <div className="news-card-items-2">
                <div className="news-image">
                  <img src={news.image} alt="img" />
                </div>
                <div className="news-content">
                  <span>{news.category}</span>
                  <h3>
                    <Link href="/news-details">{news.title}</Link>
                  </h3>
                  <Link href="/news-details" className="link-btn">
                    Read More <i className="fa-solid fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const News3 = () => {
  const newsImages = [
    { img: "assets/img/home-3/news/01.jpg", date: "24", month: "Augus" },
    { img: "assets/img/home-3/news/02.jpg", date: "25", month: "Augus" },
  ];

  const newsArticles = [
    {
      title: "Focus on destinations suitable for families with kids.",
      text: "Personalized itineraries a expert guidance, every detail is crafted to make your travel unique.",
    },
    {
      title: "Thrilling activities from trekking to scuba diving.",
      text: "Personalized itineraries a expert guidance, every detail is crafted to make your travel unique.",
      style: "style-3",
    },
  ];
  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="news-wrapper-3">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="news-left-content">
                <div className="section-title mb-0">
                  <h2 className="text-anim">Read Our Latest News &amp; Blog</h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".3s">
                  Crafting journeys, creating memories plan smarter, travel
                  better
                </p>
                <div className="news-black-bg">
                  <span>Tours &amp; travel</span>
                  <h4>
                    <Link href="/news-details">
                      Sustainable travel practices and eco-conscious
                      destinations.
                    </Link>
                  </h4>
                  <p>
                    Personalized itineraries a expert guidance, every detail is
                    crafted to make your travel unique.
                  </p>
                  <Link href="/news-details" className="link-btn">
                    Read More <i className="fa-solid fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              {newsImages.map((item, i) => (
                <div
                  key={i}
                  className={`news-image-items-3 ${i === 1 ? "style-2" : ""}`}
                >
                  <div className="news-image">
                    <img src={item.img} alt="img" />
                    <div className="box">
                      <h3>{item.date}</h3>
                      <h6>{item.month}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              {newsArticles.map((article, i) => (
                <div key={i} className={`news-white-bg ${article.style || ""}`}>
                  <span>Tours &amp; travel</span>
                  <h4>
                    <Link href="/news-details">{article.title}</Link>
                  </h4>
                  <p>{article.text}</p>
                  <Link href="/news-details" className="link-btn">
                    Read More <i className="fa-solid fa-chevron-right" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const News4 = () => {
  const news = [
    {
      img: "assets/img/home-2/news/news-2.jpg",
      date: "18",
      month: "August",
      category: "Resort",
      title:
        "Best Family-Friendly destinations for around the world tips on itinerary",
    },
    {
      img: "assets/img/home-2/news/news-3.jpg",
      date: "20",
      month: "August",
      category: "Suites",
      title: "Thrilling activities from trekking to scuba diving.",
    },
    {
      img: "assets/img/home-4/news-1.jpg",
      date: "24",
      month: "August",
      category: "Luxury Hotel",
      title: "Focus on destinations suitable for families with kids.",
    },
    {
      img: "assets/img/home-4/news-1.jpg",
      date: "28",
      month: "August",
      category: "Tours & travel",
      title:
        "Guide to enjoying luxury stays and experiences without overspending.",
    },
  ];
  return (
    <section className="news-section-4 section-padding fix pt-0">
      <div className="container custom-container-2">
        <div className="section-title text-center">
          <h2 className="text-anim">Read Our Latest News &amp; Blog</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Stay updated with our latest insights, travel tips, and inspiring
            stories <br />
            from around the world our blog brings you expert advice.
          </p>
        </div>
        <div className="row">
          {news.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
              <div className="news-card-items-2">
                <div className="news-image">
                  <img src={item.img} alt="img" />
                  <div className="box">
                    <h3>{item.date}</h3>
                    <h6>{item.month}</h6>
                  </div>
                </div>
                <div className="news-content">
                  <span>{item.category}</span>
                  <h3>
                    <Link href="/news-details">{item.title}</Link>
                  </h3>
                  <Link href="/news-details" className="link-btn">
                    Read More <i className="fa-solid fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
