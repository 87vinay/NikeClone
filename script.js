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
