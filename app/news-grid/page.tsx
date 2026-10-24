import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const NewsGrid = () => {
  const news = [
    {
      img: "assets/img/home-1/news/news-5.jpg",
      date: "18 August",
      title: "Best Family-Friendly Travel Spots Around the World",
      delay: ".3s",
    },
    {
      img: "assets/img/home-1/news/news-6.jpg",
      date: "19 August",
      title: "Eco-Friendly Travel How to Make Your Trips Sustainable",
      delay: ".5s",
    },
    {
      img: "assets/img/home-1/news/news-7.jpg",
      date: "20 August",
      title: "World is a book, and those who do not travel read only one page.",
      delay: ".7s",
    },
    {
      img: "assets/img/home-1/news/news-8.jpg",
      date: "21 August",
      title: "Highlight trending destinations and why they're worth exploring.",
      delay: ".3s",
    },
    {
      img: "assets/img/home-1/news/news-9.jpg",
      date: "22 August",
      title: "Tips on itinerary planning, booking, and travel hacks.",
      delay: ".5s",
    },
    {
      img: "assets/img/home-1/news/news-10.jpg",
      date: "23 August",
      title: "Eco-Friendly Travel How to Make Your Trips Sustainable",
      delay: ".7s",
    },
    {
      img: "assets/img/home-1/news/news-11.jpg",
      date: "23 August",
      title: "Focus on destinations suitable for families with kids.",
      delay: ".3s",
    },
    {
      img: "assets/img/home-1/news/news-12.jpg",
      date: "24 August",
      title:
        "Guide to enjoying luxury stays and experiences without overspending.",
      delay: ".5s",
    },
    {
      img: "assets/img/home-1/news/news-13.jpg",
      date: "18 August",
      title: "Eco-Friendly Travel How to Make Your Trips Sustainable",
      delay: ".7s",
    },
    {
      img: "assets/img/home-1/news/news-14.jpg",
      date: "23 August",
      title: "Focus on destinations suitable for families with kids.",
      delay: ".3s",
    },
    {
      img: "assets/img/home-1/news/news-15.jpg",
      date: "24 August",
      title:
        "Guide to enjoying luxury stays and experiences without overspending.",
      delay: ".5s",
    },
    {
      img: "assets/img/home-1/news/news-16.jpg",
      date: "18 August",
      title: "Eco-Friendly Travel How to Make Your Trips Sustainable",
      delay: ".7s",
    },
  ];
  return (
    <RoavioLayout>
      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-wrapper fix">
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Blog Grid
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2">Blog Grid</li>
            </ul>
          </div>
        </div>
      </div>
      {/* News Section Start */}
      <section className="news-section-2 section-padding pt-0 fix">
        <div className="container">
          <div className="row g-4">
            {news.map((article, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={article.delay}
              >
                <div className="news-card-items mt-0">
                  <div className="news-image">
                    <img src={article.img} alt="img" />
                    <span>{article.date}</span>
                  </div>
                  <div className="news-content">
                    <span>Tours &amp; travel</span>
                    <h3>
                      <Link href="news-details">{article.title}</Link>
                    </h3>
                    <Link href="news-details" className="link-btn">
                      Read More <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="page-nav-wrap text-center">
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
      <Contact1 />
    </RoavioLayout>
  );
};

export default NewsGrid;
