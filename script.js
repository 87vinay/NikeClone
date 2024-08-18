const cursor = document.querySelector(".cursor");
const cursorText = document.querySelector(".cursor-text");
const footer = document.querySelector("footer");
const slides = document.querySelectorAll(".slide");

const updateCursorX = gsap.quickTo(cursor, "x", {
  duration: 0.1,
  ease: "none",
});
const updateCursorY = gsap.quickTo(cursor, "y", {
  duration: 0.1,
  ease: "none",
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
document.addEventListener("mousemove", (e) => {
  updateCursorX(e.clientX);
  updateCursorY(e.clientY);
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
