import gsap from "gsap";

function animateBackground() {
  const timeline = gsap.timeline({ delay: 1.1 });

  timeline.fromTo(
    ".welcome__background img",
    {
      scale: "1.5",
      translateX: "-25%",
      translateY: "-25%",
      ease: "expo.inOut",
    },
    {
      scale: "1",
      translateX: "0",
      translateY: "0",
      duration: 0.7,
    }
  );

  return timeline;
}

function animateTitleFirst() {
  const timeline = gsap.timeline({ delay: 1.5 }),
    firstWordTitle = document.querySelector("[data-first-title-word]");
  timeline.fromTo(
    firstWordTitle,
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );
}

function animateTitleSecond() {
  const timeline = gsap.timeline({ delay: 1.8 }),
    otherWordTitle = document.querySelector("[data-other-title-words]");
  timeline.fromTo(
    otherWordTitle,
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );
}

function animateText() {
  const timeline = gsap.timeline({ delay: 1.8 });
  timeline.fromTo(
    ".welcome__description",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }
  );
}

function animateButton() {
  const timeline = gsap.timeline({ delay: 1.9 });
  timeline.fromTo(
    ".welcome__wrap .button",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.8,
    }
  );
}

function animateImg() {
  const timeline = gsap.timeline({ delay: 1.9 }),
    mainWorkerImg = document.querySelector(
      "[data-image-fade-in='data-image-fade-in']"
    );
  timeline.fromTo(
    mainWorkerImg,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.8,
    }
  );
}

function animateScrollTo() {
  const timeline = gsap.timeline({ delay: 2 });
  timeline.fromTo(
    ".hero__scroll-to",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );
}

function animateLine() {
  const timeline = gsap.timeline({ delay: 1 });
  timeline.fromTo(
    ".welcome__line",
    {
      y: "-100%",
    },
    {
      y: 0,
      ease: "expo.inOut",
      duration: 1,
    }
  );
}

const welcomeSlider = document.querySelector(".welcome");

if (welcomeSlider) {
  const master = gsap.timeline();

  master
    .add(animateBackground())
    .add(animateLine())
    .add(animateTitleFirst())
    .add(animateTitleSecond())
    .add(animateText())
    .add(animateButton())
    .add(animateImg())
    .add(animateScrollTo());
}
