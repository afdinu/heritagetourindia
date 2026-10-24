import Link from "next/link";

export const Activities1 = () => {
  const activities = [
    {
      image: "assets/img/home-1/activiti/01.jpg",
      title: "Snorkeling & Scuba Diving",
    },
    {
      image: "assets/img/home-1/activiti/02.jpg",
      title: "Desert Safari & Camel Rides",
      delay: ".2s",
    },
    {
      image: "assets/img/home-1/activiti/03.jpg",
      title: "Hiking & Nature Trails",
      delay: ".4s",
    },
    {
      image: "assets/img/home-1/activiti/04.jpg",
      title: "Cultural Heritage Tours",
      delay: ".6s",
    },
    {
      image: "assets/img/home-1/activiti/05.jpg",
      title: "Wildlife Safaris",
      delay: ".8s",
    },
  ];
  return (
    <section className="activities-section section-padding fix">
      <div className="container custom-container">
        <div className="activities-wrapper row g-4 g-xl-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="col activities-card-item wow fadeInUp"
              data-wow-delay={activity.delay || undefined}
            >
              <div className="activities-image">
                <img src={activity.image} alt="img" />
              </div>
              <div className="activities-content">
                <h4>
                  <Link href="/destination-details">{activity.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
