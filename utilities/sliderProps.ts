import SwiperCore from "swiper";
import {
  A11y,
  Autoplay,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Manipulation,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from "swiper/modules";
SwiperCore.use([
  A11y,
  Autoplay,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Manipulation,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
]);

export const sliderProps = {
  heroSlider: {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".dot",
      clickable: true,
    },
  },
  herosSlider: {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  testimonialSlider: {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot2",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  testimonialSlider2: {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot2",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  testimonialBoxSlider: {
    spaceBetween: 20,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  },
  testimonialBoxSlider2: {
    slidesPerView: "auto",
    spaceBetween: 20,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  },
  AdventurelSlider: {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot3",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  brandSlider: {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1199: {
        slidesPerView: 7,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2,
      },
    },
  },
  destiSlider: {
    spaceBetween: 20,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1199: {
        slidesPerView: 6,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  destinationSlider4: {
    spaceBetween: 20,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    pagination: {
      el: ".dot2",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  teamSlide: {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: false },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    pagination: {
      el: ".dot3",
      clickable: true,
    },
    breakpoints: {
      1199: { slidesPerView: 4 },
      991: { slidesPerView: 3 },
      767: { slidesPerView: 2 },
      575: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  },
  topSlider: {
    spaceBetween: 20,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1199: {
        slidesPerView: 5,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1.3,
      },
    },
  },
  gallerySlider: {
    spaceBetween: 10,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1399: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3.5,
      },
      767: {
        slidesPerView: 2.8,
      },
      575: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1.1,
      },
    },
  },
  gallerySlider2: {
    spaceBetween: 10,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      reverseDirection: true,
    },

    breakpoints: {
      1399: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3.5,
      },
      767: {
        slidesPerView: 2.8,
      },
      575: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1.1,
      },
    },
  },
};
