const navOpenBtn = document.querySelector(".navbar-open");
const navCloseBtn = document.querySelector(".navbar-close");
const navMenu = document.querySelector(".navbar-menu");
const navigation = document.querySelector(".nav");
const header = document.querySelector(".header");
const navLogo = document.querySelector(".navbar-logo");
const featuresNav = document.querySelector(".features-nav-links");
const featureTabs = document.querySelector(".features-tabs").children;

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

const addClass = (elements, className) => {
  for (let element of elements) {
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    }
  }
};

const removeClass = (elements, className) => {
  for (let element of elements) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }
};

const changeTab = (tabNumber) => {
  addClass(featureTabs, "hide");
  featureTabs[tabNumber].classList.remove("hide");
};

const handleTabClick = (e) => {
  const parent = e.target.parentElement;
  const tabNumber = parseInt(parent.getAttribute("data-value"));

  if (tabNumber >= 0) {
    removeClass(featuresNav.children, "tab-active");
    parent.classList.add("tab-active");
    changeTab(tabNumber);
  }
};

for (let child of featuresNav.children) {
  child.addEventListener("click", handleTabClick);
}

navMenu.addEventListener("click", handleMenuClick);
