import Swiper, { Autoplay, Pagination, EffectFade } from "swiper";

export const teamSlider = (function () {
  const init = function () {
    const teamSlider = new Swiper(".js-team-slider", {
      modules: [Autoplay, Pagination, EffectFade],
      autoplay: {
        delay: 3000,
      },
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
      on: {
        autoplay: function () {
          const videoElement =
            teamSlider.slides[teamSlider.activeIndex - 1].lastElementChild;
          const isVideoPlaying = videoElement.classList.contains("is-playing");

          if (isVideoPlaying) {
            teamSlider.slidePrev();
            teamSlider.autoplay.stop();
          }
        },
      },
    });
  };

  return {
    init,
  };
})();
