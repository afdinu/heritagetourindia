"use client";
import { useEffect } from "react";
import Swiper from "swiper";
import { sliderProps } from "./sliderProps";

let gsapInstance: typeof import("gsap")["gsap"] | null = null;
let ScrollTriggerInstance: any = null;
let ScrollSmootherInstance: any = null;
let SplitTextInstance: any = null;

export async function loadGsap() {
  if (!gsapInstance) {
    const gsapModule = await import("gsap");
    const ScrollTriggerModule = await import("gsap/ScrollTrigger");
    const ScrollSmootherModule = await import("gsap/ScrollSmoother");
    const SplitTextModule = await import("gsap/SplitText");

    gsapInstance = gsapModule.gsap;
    ScrollTriggerInstance = ScrollTriggerModule.ScrollTrigger;
    ScrollSmootherInstance = ScrollSmootherModule.ScrollSmoother;
    SplitTextInstance = SplitTextModule.SplitText;

    gsapInstance.registerPlugin(
      ScrollTriggerInstance,
      ScrollSmootherInstance,
      SplitTextInstance
    );
  }
  return {
    gsap: gsapInstance,
    ScrollTrigger: ScrollTriggerInstance,
    ScrollSmoother: ScrollSmootherInstance,
    SplitText: SplitTextInstance,
  };
}
export function useSmoothScrolling(): void {
  useEffect(() => {
    let smoother: any = null;
    (async () => {
      const { gsap, ScrollSmoother } = await loadGsap();
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    })();

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);
}
export function useStickyHeader(): void {
  useEffect(() => {
    const header = document.querySelector("#header-sticky");
    if (!header) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    });
  }, []);
}
export function useMouseCursor(): void {
  useEffect(() => {
    const mouseCursor = document.querySelector(".mouseCursor");
    if (!mouseCursor) return;
    const inner = document.querySelector(".cursor-inner") as HTMLElement;
    const outer = document.querySelector(".cursor-outer") as HTMLElement;
    if (!inner || !outer) return;
    const handleMouseMove = (e: MouseEvent) => {
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("button, a, .cursor-pointer")) {
        inner.classList.add("cursor-hover");
        outer.classList.add("cursor-hover");
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("button, a, .cursor-pointer")) {
        inner.classList.remove("cursor-hover");
        outer.classList.remove("cursor-hover");
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
}
export function animation(): void {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.WOW = require("wowjs");
    }
    // @ts-ignore
    new WOW.WOW().init();
  }, []);
}
export function animatedText(): void {
  useEffect(() => {
    (async () => {
      const { gsap, ScrollTrigger, SplitText } = await loadGsap();
      let staggerAmount = 0.03,
        translateXValue = 20,
        delayValue = 0.1,
        easeType = "power2.out",
        animatedTextElements = document.querySelectorAll(".text-anim");
      animatedTextElements.forEach((element) => {
        let animationSplitText = new SplitText(element, {
          type: "chars, words",
        });
        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          onEnter: () => {
            gsap.from(animationSplitText.chars, {
              duration: 1,
              delay: delayValue,
              x: translateXValue,
              autoAlpha: 0,
              stagger: staggerAmount,
              ease: easeType,
            });
          },
        });
      });
    })();
  }, []);
}

function animatedSwiper(selector: string, swiperInstance: Swiper): void {
  const animated = (): void => {
    const elements = document.querySelectorAll<HTMLElement>(
      `${selector} [data-animation]`
    );

    elements.forEach((element: HTMLElement) => {
      const anim = element.getAttribute("data-animation");
      const delay = element.getAttribute("data-delay");
      const duration = element.getAttribute("data-duration");

      if (!anim) return;

      // Remove animation class
      element.classList.remove(`anim${anim}`);

      // Add animation classes
      element.classList.add(anim, "animated");

      // Set animation styles
      if (delay) {
        element.style.webkitAnimationDelay = delay;
        element.style.animationDelay = delay;
      }

      if (duration) {
        element.style.webkitAnimationDuration = duration;
        element.style.animationDuration = duration;
      }

      // Handle animation end (once)
      const handleAnimationEnd = (): void => {
        element.classList.remove(anim, "animated");
        element.removeEventListener("animationend", handleAnimationEnd);
      };

      element.addEventListener("animationend", handleAnimationEnd);
    });
  };

  // Run animation initially
  animated();

  // Handle slide change - remove animated class
  swiperInstance.on("slideChange", (): void => {
    const elements = document.querySelectorAll<HTMLElement>(
      `${selector} [data-animation]`
    );
    elements.forEach((element: HTMLElement) => {
      element.classList.remove("animated");
    });
  });

  // Run animation on slide change
  swiperInstance.on("slideChange", animated);
}

// React Hook
export function useAnimationSwiper(): void {
  useEffect(() => {
    // Initialize Swiper instance
    const swiperInstance = new Swiper(".hero-slider", sliderProps.heroSlider);

    // Setup animations
    animatedSwiper(".hero-slider", swiperInstance);

    // Cleanup on unmount
    return () => {
      swiperInstance.destroy(true, true);
    };
  }, []);
}
