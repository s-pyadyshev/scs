import Swiper, { Pagination } from "swiper";

export const carsdSlider = (function () {
  const init = function () {
    const swipers = document.querySelectorAll(".js-cards-slider");

    swipers.forEach((value) => {
      let swiper = new Swiper(value, {
        modules: [Pagination],
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
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 52,
          },
        },
        // on: {
        //   slideChange: function () {
        //     const currentIndex = swiper.activeIndex;
        //     const currentSlideImage =
        //       swiper.slides[currentIndex].querySelector(".card-facts__icon");
        //     currentSlideImage.style.display = "flex";
        //   },
        //   beforeSlideChangeStart: function () {
        //     const currentIndex = swiper.activeIndex;
        //     const currentSlideImage =
        //       swiper.slides[currentIndex].querySelector(".card-facts__icon");
        //     currentSlideImage.style.display = "none";
        //   },
        // },
      });
    });
  };

  return {
    init,
  };
})();
