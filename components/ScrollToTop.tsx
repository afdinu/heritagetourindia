"use client";
import { useEffect, useState } from "react";
const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleBackTop = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrolled >= docHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleBackTop);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", toggleBackTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;
  return (
    <button id="back-top" className="back-to-top show" onClick={scrollToTop}>
      <i className="fa-regular fa-arrow-up" />
    </button>
  );
};

export default ScrollToTop;
