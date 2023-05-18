import "./vendor";
// import { vhFix } from "./vendor/vh-fix";
import { accordion } from "./components/accordion";
import { mobileMenu } from "./components/mobile-menu";
import { lifeSlider } from "./components/life-slider";
import { slider } from "./components/slider";
import { sliderPagination } from "./components/sliderPagination";
import { carsdSlider } from "./components/cards-slider";
import { toggle } from "./components/toggle";
import { videoVimeo } from "./components/video-vimeo";
import "./components/gsap-animations";
import "./components/scrollto";
import { scrollspy } from "./components/scrollspy";

window.addEventListener(
  "load",
  () => {
    accordion.init();
    mobileMenu.init();
    lifeSlider.init();
    slider.init();
    sliderPagination.init();
    carsdSlider.init();
    toggle.init();
    videoVimeo.init();
    scrollspy.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
