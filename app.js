const navButton = document.querySelector(".navbar-mobile");
const navigation = document.querySelector(".nav");

navButton.addEventListener("click", (event) => {
  if (navigation.classList.contains("hidden")) {
    navigation.classList.remove("hidden");
  } else {
    navigation.classList.add("hidden");
  }
});
