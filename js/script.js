const typed = new Typed(".auto-type", {
  strings: ["menambah", "meluaskan", "mengupgrade", "me level up kan"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const friesIcon = document.getElementsByClassName("fries-menu")[0];
const navMobileContent = document.getElementsByClassName("nav-link-wrapper-mobile")[0];
var x = window.scrollX;
var y = window.scrollY;

friesIcon.addEventListener("click", () => {
  navMobileContent.classList.toggle("mobile-nav-show-content");
  if (navMobileContent.classList.contains("mobile-nav-show-content") === true) {
    enableScrolling();
    friesIcon.classList.add("fries-icon-click");
  } else {
    enableScrolling();
    friesIcon.classList.remove("fries-icon-click");
  }
});

function disableScrolling() {
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
function enableScrolling() {
  window.onscroll = function () {};
}

// todo GSAP
// gsap.from(".how-this-wrapper", {
//   x: 100,
//   opacity: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".how-this-website-works",
//     start: "center center",
//   },
// });

// gsap.to(".how-this-wrapper", {
//   x: 0,
//   opacity: 1,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".how-this-website-works",
//     start: "top center",
//     end: "bottom center",
//     markers: true,
//     toggleActions: "play none reverse none",
//     // *onEnter onLeave onEnterBack onLeaveBack
//   },
// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".header-icon-background", {
//   x: 0,
//   duration: 3,
//   scale: 1,
//   scrollTrigger: {
//     trigger: ".header-icon-background",
//     end: "center center",
//     markers: false,
//     toggleActions: "restart reverse",
//   },
// });

// gsap.from(".header-icon-background", {
//   x: 0,
//   scale: 0,
//   opacity: 0,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".header-icon-background",
//     start: "center center",
//     markers: false,
//   },
// });

gsap.from(".plane-img", {
  x: -400,
  duration: 3,
  scrollTrigger: {
    trigger: ".plane-img",
    // markers: true,
    // start: "top 50%",
    // end: "top 30%",
  },
});

gsap.to(".plane-img", {
  x: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".plane-img",
    start: "top 60%",
    end: "top 10%",
    scrub: true,
    toggleActions: "play none reverse none",
    // *onEnter onLeave onEnterBack onLeaveBack
    // markers: true,
  },
});

// gsap.from(".tank-img", {
//   x: -400,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".tank-img",
//     markers: true,
//   },
// });

// gsap.to(".tank-img", {
//   // x: 440,
//   x: 0,
//   duration: 5,
//   scrollTrigger: {
//     trigger: ".tank-img",
//     start: "top center",
//     end: "bottom bottom",
//     markers: true,
//     toggleActions: "play none reverse restart",
//     // toggleActions: "play none reverse none",
//   },
// });
