const body = document.querySelector("body");
const arrowIcon = document.querySelector(".arrow");
const nav = document.querySelector("nav");
const navButton = document.querySelector(".nav-button");
const navSecondSection = document.querySelector(".second-section");

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-link");
  var currentPage = window.location.href;

  navLinks.forEach(function (link) {
    if (link.href === currentPage) {
      link.classList.add("active");
    }
  });
});

navButton.addEventListener("click", () => {
  if (nav.classList.contains("active-menu")) {
    console.log(nav);
    nav.classList.remove("active-menu");
    navSecondSection.style.display = "none";
    body.style.overflow = "visible";
  } else {
    nav.classList.add("active-menu");
    navSecondSection.style.display = "flex";
    body.style.overflow = "hidden";
    console.log(nav);
  }
});
