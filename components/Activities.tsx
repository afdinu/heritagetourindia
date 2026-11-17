import Link from "next/link";
import serviceAreas from "../data/service-areas.json";

const phoneNumber = "+917737244759";
const whatsappNumber = "917737244759";

function assetPath(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `/${path.replace(/^\/+/, "")}`;
}

export const Activities1 = () => {
  const activities = serviceAreas
    .filter((area) => area.showOnMainGrid !== false)
    .map((area, index) => ({
      image: area.image
        ? assetPath(area.image)
        : "/assets/img/home-1/activiti/01.jpg",
      imageAlt: area.imageAlt || area.name,
      title: area.name,
      href: `/services/${area.city}`,
      delay: index === 0 ? undefined : `${(index % 5) * 0.2}s`,
    }));

  return (
    <section className="activities-section section-padding fix">
      <div className="container custom-container">
        <div className="activities-wrapper row g-4 g-xl-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
          {activities.map((activity) => {
            const message = encodeURIComponent(
              `Hello Heritage Tour Guide India,

I am interested in ${activity.title}.

Please share the available tour options, prices, and booking details.

Service Link: https://heritagetourindia.com${activity.href}

Thank you!`
            );

            return (
              <div
                key={activity.href}
                className="col activities-card-item wow fadeInUp"
                data-wow-delay={activity.delay}
              >
                <div className="activities-image">
                  <Link
                    href={activity.href}
                    aria-label={`Explore ${activity.title}`}
                  >
                    <img
                      src={activity.image}
                      alt={activity.imageAlt}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="activities-content">
                  <h4>
                    <Link href={activity.href}>
                      {activity.title}
                    </Link>
                  </h4>

                  {/* View Details + WhatsApp + Call */}
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3">
                    <Link
                      href={activity.href}
                      className="btn btn-dark"
                      aria-label={`View details for ${activity.title}`}
                    >
                      View Details
                    </Link>

                    <div className="d-flex align-items-center gap-2 ms-auto">
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        className="btn btn-outline-success"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp about ${activity.title}`}
                        title="WhatsApp"
                      >
                        <i
                          className="fa-brands fa-whatsapp"
                          aria-hidden="true"
                        />
                      </a>

                      <a
                        href={`tel:${phoneNumber}`}
                        className="btn btn-outline-dark"
                        aria-label={`Call about ${activity.title}`}
                        title="Call Now"
                      >
                        <i
                          className="fa-solid fa-phone"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// import Link from "next/link";

// export const Activities1 = () => {
//   const activities = [
//     {
//       image: "/assets/img/home-1/activiti/01.jpg",
//       title: "Snorkeling & Scuba Diving",
//     },
//     {
//       image: "/assets/img/home-1/activiti/02.jpg",
//       title: "Desert Safari & Camel Rides",
//       delay: ".2s",
//     },
//     {
//       image: "/assets/img/home-1/activiti/03.jpg",
//       title: "Hiking & Nature Trails",
//       delay: ".4s",
//     },
//     {
//       image: "/assets/img/home-1/activiti/04.jpg",
//       title: "Cultural Heritage Tours",
//       delay: ".6s",
//     },
//     {
//       image: "assets/img/home-1/activiti/05.jpg",
//       title: "Wildlife Safaris",
//       delay: ".8s",
//     },
//   ];
//   return (
//     <section className="activities-section section-padding fix">
//       <div className="container custom-container">
//         <div className="activities-wrapper row g-4 g-xl-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
//           {activities.map((activity, index) => (
//             <div
//               key={index}
//               className="col activities-card-item wow fadeInUp"
//               data-wow-delay={activity.delay || undefined}
//             >
//               <div className="activities-image">
//                 <img src={activity.image} alt="img" />
//               </div>
//               <div className="activities-content">
//                 <h4>
//                   <Link href="/destination-details">{activity.title}</Link>
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
