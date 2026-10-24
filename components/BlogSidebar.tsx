import Link from "next/link";

const BlogSidebar = () => {
  const categories = [
    { name: "Beach & Water Activities", count: 3 },
    { name: "Wildlife & Safari Tours", count: 5 },
    { name: "Trekking & Hiking", count: 8 },
    { name: "Cruise & Boat Tours", count: 2 },
    { name: "Shopping & Market Tours", count: 4 },
    { name: "Nightlife & Entertainment", count: 6 },
  ];

  const recentPosts = [
    {
      img: "assets/img/home-1/news/pp-1.jpg",
      date: "20 August 2025",
      title: "Best Family-Friendly Travel Spots Around the World",
    },
    {
      img: "assets/img/home-1/news/p-2.jpg",
      date: "23 August 2025",
      title: "Luxury Travel on a Budget Secrets Revealed",
    },
    {
      img: "assets/img/home-1/news/pp-3.jpg",
      date: "24 August 2025",
      title: "Ultimate Beach Destinations for Your Next Holiday",
    },
  ];
  const tags = [
    "Travel",
    "Guide",
    "Hiking",
    "Boat",
    "Wildlife",
    "Beach",
    "Activities",
    "City",
    "Road",
  ];
  return (
    <div className="main-sideber sticky-style">
      <div className="single-sideber-widget">
        <div className="search-widget">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <i className="fa-regular fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
      <div className="single-sideber-widget">
        <div className="widget-title">
          <h4>Categories</h4>
        </div>
        <ul>
          {categories.map((category, i) => (
            <li key={i}>
              <Link href="news-details">{category.name}</Link>
              <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="single-sideber-widget">
        <div className="widget-title">
          <h4>Recent Post</h4>
        </div>
        <div className="recent-post-area">
          {recentPosts.map((post, i) => (
            <div key={i} className="recent-items">
              <div className="recent-thumb">
                <img src={post.img} alt="img" />
              </div>
              <div className="recent-content">
                <span>{post.date}</span>
                <h5>
                  <Link href="news-details">{post.title}</Link>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="single-sideber-widget">
        <div className="widget-title">
          <h4>Tags</h4>
        </div>
        <div className="tagcloud">
          {tags.map((tag, i) => (
            <Link key={i} href="news-details">
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="tour-bg-image">
        <img src="assets/img/home-1/news/news-19.jpg" alt="img" />
        <div className="tour-bg-content">
          <span>xplore The World</span>
          <h3>
            <Link href="tour-details">Best Tourist Place</Link>
          </h3>
          <Link href="tour-details" className="theme-btn">
            Explore Tours
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
