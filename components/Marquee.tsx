export const Marquee1 = () => {
  const locations = [
    "Sweden",
    "Denmark",
    "Netherlands",
    "Australia",
    "Indonesia",
    "New York",
    "France",
    "Italy",
    "Sri Lanka",
    "Ireland",
    "Germany",
    "Portugal",
    "Iceland",
    "Morocco",
    "Africa",
    "Canada",
  ];
  const repeatCount = 3;
  return (
    <div className="marquee-section">
      <div className="mycustom-marque">
        <div className="scrolling-wrap style-2">
          {Array.from({ length: repeatCount }).map((_, index) => (
            <div key={index} className="comm">
              <div />
              {locations.map((location, locIndex) => (
                <div key={locIndex} className="cmn-textslide">
                  {location}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Marquee2 = () => {
  const slides = [
    "Private tours",
    "Travel Insurance",
    "Safari & Wildlife",
    "Professional Guide",
    "10+ Years of experience",
    "Awards Winning Agency",
    "Couple Tours",
    "Hotel & Resorts",
    "Quality Security",
  ];
  return (
    <div className="marquee-section">
      <div className="mycustom-marque">
        <div className="scrolling-wrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="comm">
              <div />
              {slides.map((text, j) => (
                <div key={j} className="cmn-textslide">
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
