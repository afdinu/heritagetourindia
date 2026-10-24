import Link from "next/link";

const TourSidebar = () => {
  return (
    <div className="sticky-style">
      <div className="tour-main-sideber">
        <div className="tour-sidebar-items">
          <div className="widget-title">
            <h4>Filter by Price</h4>
          </div>
          <div className="price-filter-wrap">
            <div className="price-slider-range" />
            <div className="price">
              <span>Price </span>
              <input type="text" id="price" readOnly={true} />
            </div>
          </div>
        </div>
        <div className="tour-sidebar-items">
          <div className="widget-title">
            <h4>By Activities</h4>
          </div>
          <ul className="radio-filter">
            <li>
              <input
                className="form-check-input"
                type="radio"
                defaultChecked={true}
                name="ByActivities"
                id="activity1"
              />
              <label htmlFor="activity1">
                Sea Beach <span>18</span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity2"
              />
              <label htmlFor="activity2">
                Car Parking <span>29</span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity3"
              />
              <label htmlFor="activity3">
                Laundry Service <span>23</span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity4"
              />
              <label htmlFor="activity4">
                Outdoor Seating <span>25</span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity5"
              />
              <label htmlFor="activity5">
                Reservations <span>26</span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity6"
              />
              <label htmlFor="activity6">
                Hiking <span>28</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="tour-sidebar-items">
          <div className="widget-title">
            <h4>Tour Types</h4>
          </div>
          <ul className="radio-filter">
            <li>
              <input
                className="form-check-input"
                type="radio"
                defaultChecked={true}
                name="ByActivities"
                id="activity7"
              />
              <label htmlFor="activity7">Daily Tours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity8"
              />
              <label htmlFor="activity8">Group Tours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity9"
              />
              <label htmlFor="activity9">Family Tours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity10"
              />
              <label htmlFor="activity10">Package Tours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity11"
              />
              <label htmlFor="activity11">Holiday Tours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByActivities"
                id="activity12"
              />
              <label htmlFor="activity12">Private Tours</label>
            </li>
          </ul>
        </div>
        <div className="tour-sidebar-items">
          <div className="widget-title">
            <h4>By Languages</h4>
          </div>
          <ul className="radio-filter">
            <li>
              <input
                className="form-check-input"
                type="radio"
                defaultChecked={true}
                name="ByLanguages"
                id="language13"
              />
              <label htmlFor="language13">American</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language14"
              />
              <label htmlFor="language14">English</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language15"
              />
              <label htmlFor="language15">German</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language16"
              />
              <label htmlFor="language16">Japanese</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language17"
              />
              <label htmlFor="language17">Vietnamese</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language18"
              />
              <label htmlFor="language18">French</label>
            </li>
          </ul>
        </div>
        <div className="tour-sidebar-items">
          <div className="widget-title">
            <h4>Duration</h4>
          </div>
          <ul className="radio-filter">
            <li>
              <input
                className="form-check-input"
                type="radio"
                defaultChecked={true}
                name="Duration"
                id="duration19"
              />
              <label htmlFor="duration19">0 - 2 hours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration20"
              />
              <label htmlFor="duration20">2 - 4 hours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration21"
              />
              <label htmlFor="duration21">4 - 8 hours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration22"
              />
              <label htmlFor="duration22">Fulda (+8 hours)</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration23"
              />
              <label htmlFor="duration23">Multi days</label>
            </li>
          </ul>
        </div>
        <div className="tour-sidebar-items border-none">
          <div className="widget-title">
            <h4>By Reviews</h4>
          </div>
          <ul className="radio-filter">
            <li>
              <input
                className="form-check-input"
                type="radio"
                defaultChecked={true}
                name="ByReviews"
                id="review24"
              />
              <label htmlFor="review24">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByReviews"
                id="review25"
              />
              <label htmlFor="review25">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByReviews"
                id="review26"
              />
              <label htmlFor="review26">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByReviews"
                id="review27"
              />
              <label htmlFor="review27">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByReviews"
                id="review28"
              />
              <label htmlFor="review28">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="tour-sidebar-bg-image-items">
        <img
          src="assets/img/inner-page/tour-sidebar/sidebar-image.jpg"
          alt="img"
        />
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
    </div>
  );
};

export default TourSidebar;
