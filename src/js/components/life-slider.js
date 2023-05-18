import Swiper, { Navigation, EffectFade } from "swiper";

export const lifeSlider = (function () {
  const init = function () {
    const swiper = new Swiper(".js-life-slider", {
      modules: [Navigation, EffectFade],
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoHeight: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  };

  return {
    init,
  };
})();
