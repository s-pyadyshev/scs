import Swiper, { Pagination, EffectFade } from "swiper";

export const teamSlider = (function () {
  const init = function () {
    const teamSlider = new Swiper(".js-team-slider", {
      modules: [Pagination, EffectFade],
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        bulletElement: "button",
        renderBullet(index, className) {
          return `<button class="pagination__link ${className}">${
            index + 1
          }</button>`;
        },
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  };

  return {
    init,
  };
})();
