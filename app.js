const navOpenBtn = document.querySelector(".navbar-open");
const navCloseBtn = document.querySelector(".navbar-close");
const navMenu = document.querySelector(".navbar-menu");
const navigation = document.querySelector(".nav");
const header = document.querySelector(".header");
const navLogo = document.querySelector(".navbar-logo");

navOpenBtn.style.display = "block";
navCloseBtn.style.display = "none";

const handleMenuClick = () => {
  if (navOpenBtn.style.display === "block") {
    // To open the mobile navigation
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "block";
    navigation.classList.remove("nav-hide");

    // To change the bg color of header & navigation
    navigation.classList.add("nav-active");
    header.classList.add("nav-active");
    navLogo.classList.add("nav-active");
  } else {
    // To close the mobile navigation
    navOpenBtn.style.display = "block";
    navCloseBtn.style.display = "none";
    navigation.classList.add("nav-hide");

    // To revert the bg color of header & navigation
    navigation.classList.remove("nav-active");
    header.classList.remove("nav-active");
    navLogo.classList.remove("nav-active");
  }
};

navMenu.addEventListener("click", handleMenuClick);
