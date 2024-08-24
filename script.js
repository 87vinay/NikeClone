window.addEventListener("load", () => {
  const timeline = gsap.timeline();
  timeline
    .fromTo(
      "#nike-logo",
      { scale: 0, rotation: 0 },
      { scale: 1.5, rotation: 360, duration: 1.5, ease: "power4.inOut" }
    )
    .to("#nike-logo", { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  timeline.to(
    "#loading-bar",
    { scaleX: 1, duration: 2, ease: "power2.inOut" },
    "-=1"
  );
  timeline.to("#preloader", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      document.getElementById("preloader").style.display = "none";
    },
  });
});

const cursor = document.querySelector(".cursor");
const cursorText = document.querySelector(".cursor-text");
const footer = document.querySelector("footer");
const slides = document.querySelectorAll(".slide");

function iLargeScreen() {
  return window.matchMedia("(min-width: 1024px)").matches;
}
if (iLargeScreen()) {
  const updateCursorX = gsap.quickTo(cursor, "x", {
    duration: 0.1,
    ease: "none",
  });
  const updateCursorY = gsap.quickTo(cursor, "y", {
    duration: 0.1,
    ease: "none",
  });
  document.addEventListener("mousemove", (e) => {
    updateCursorX(e.clientX);
    updateCursorY(e.clientY);
  });
  footer.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      backgroundColor: "white",
      duration: 0.1,
      ease: "none",
    });
  });
  footer.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundColor: "black",
      duration: 0.1,
      ease: "none",
    });
  });
}
gsap.from(".navbar a", {
  y: -100,
  duration: 0.6,
  opacity: 0,
  stagger: 0.3,
});
slides.forEach((slide) => {
  const img = slide.querySelector("img");
  img.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      width: 100,
      height: 100,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      duration: 0.2,
      ease: "none",
    });
    gsap.to(cursorText, { opacity: 1, duration: 0.2, ease: "none" });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      width: 10,
      height: 10,
      backgroundColor: "black",
      border: "none",
      duration: 0.1,
      ease: "none",
    });
    gsap.to(cursorText, { opacity: 0, duration: 0.1, ease: "none" });
  });
});
window.addEventListener("resize", () => {
  if (iLargeScreen()) {
    cursor.style.display = "block";
  } else {
    cursor.style.display = "none";
  }
});
function marqueAnimation() {
  let touchStartY;
  let animationInstance;

  function createAnimation(direction) {
    if (animationInstance) {
      animationInstance.kill();
    }
    animationInstance = gsap.to(".marque", {
      transform: direction > 0 ? "translateX(-200%)" : "translateX(0%)",
      duration: 3,
      repeat: -1,
      ease: "none",
      paused: true,
    });
    gsap.to(".marque img", {
      rotate: direction > 0 ? 180 : 0,
      duration: 0.5,
    });
    animationInstance.play();
  }
  function handleScroll(delta) {
    createAnimation(delta);
  }
  window.addEventListener("wheel", function (event) {
    handleScroll(event.deltaY);
  });
  window.addEventListener("touchstart", function (event) {
    touchStartY = event.touches[0].clientY;
  });
  window.addEventListener("touchmove", function (event) {
    if (touchStartY) {
      const touchEndY = event.touches[0].clientY;
      const delta = touchStartY - touchEndY;
      handleScroll(delta);
      touchStartY = null;
    }
  });
  createAnimation(1);
}

marqueAnimation();

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("Move");
};

window.addEventListener("DOMContentLoaded", () => {
  const logoImage = document.getElementById("logoImage");

  function toggleLogo() {
    if (window.innerWidth < 741) {
      logoImage.src = "images/Logo_nike_principal.jpg";
      logoImage.style.marginLeft = "10px";
    } else {
      logoImage.src = "images/Jumpman_logo.svg";
      logoImage.style.marginLeft = "";
    }
  }

  toggleLogo();
  window.addEventListener("resize", toggleLogo);
});

function toggleList(id) {
  if (window.innerWidth <= 768) {
    var list = document.getElementById(id).querySelector(".section-list");
    if (list.style.display === "none" || list.style.display === "") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }
}
