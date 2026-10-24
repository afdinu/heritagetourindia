import BlogSidebar from "@/components/BlogSidebar";
import { Contact1 } from "@/components/Contact";
import RoavioLayout from "@/layout/RoavioLayout";
import Link from "next/link";

const News = () => {
  const featuredNews = {
    img: "assets/img/home-1/news/news-17.jpg",
    date: "18 August",
    category: "Tours & travel",
    title:
      "BBest Family-Friendly Travel Spots Around the World Eco-Friendly Travel How to Make Your Trips Sustainable",
  };

  const newsGrid = [
    {
      img: "assets/img/home-1/news/news-8.jpg",
      date: "18 August",
      title: "Highlight trending destinations and why they're worth exploring.",
      col: "col-lg-6",
    },
    {
      img: "assets/img/home-1/news/news-9.jpg",
      date: "20 August",
      title: "Tips on itinerary planning, booking, and travel hacks.",
      col: "col-lg-6",
    },
    {
      img: "assets/img/home-1/news/news-10.jpg",
      date: "23 August",
      title: "Focus on destinations suitable for families with kids.",
      col: "col-lg-6",
    },
    {
      img: "assets/img/home-1/news/news-11.jpg",
      date: "24 August",
      title:
        "Guide to enjoying luxury stays and experiences without overspending.",
      col: "col-lg-6",
    },
    {
      img: "assets/img/home-1/news/news-18.jpg",
      date: "18 August",
      title:
        "Best Family-Friendly Travel Spots Around the World Eco-Friendly Travel How to Make Your Trips Sustainable",
      col: "col-lg-12",
    },
    {
      img: "assets/img/home-1/news/news-14.jpg",
      date: "23 August",
      title: "Focus on destinations suitable for families with kids.",
      col: "col-lg-6",
    },
    {
      img: "assets/img/home-1/news/news-15.jpg",
      date: "24 August",
      title:
        "Guide to enjoying luxury stays and experiences without overspending.",
      col: "col-lg-6",
    },
  ];

  return (
    <RoavioLayout>
      <div className="breadcrumb-wrapper fix">
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Latest Blog
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="style-2">Latest Blog</li>
            </ul>
          </div>
        </div>
      </div>
      {/* News Section Start */}
      <section className="news-section section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-12">
              <div className="news-card-items mt-0">
                <div className="news-image">
                  <img src={featuredNews.img} alt="img" />
                  <span>{featuredNews.date}</span>
                </div>
                <div className="news-content">
                  <span>{featuredNews.category}</span>
                  <h3>
                    <Link href="news-details">{featuredNews.title}</Link>
                  </h3>
                  <Link href="news-details" className="link-btn">
                    Read More <i className="fa-solid fa-chevron-right" />
                  </Link>
                </div>
              </div>

              <div className="row">
                {newsGrid.map((news, i) => (
                  <div key={i} className={news.col}>
                    <div className="news-card-items">
                      <div className="news-image">
                        <img src={news.img} alt="img" />
                        <span>{news.date}</span>
                      </div>
                      <div className="news-content">
                        <span>Tours &amp; travel</span>
                        <h3>
                          <Link href="news-details">{news.title}</Link>
                        </h3>
                        <Link href="news-details" className="link-btn">
                          Read More <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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
      <Contact1 />
    </RoavioLayout>
  );
};

export default News;
