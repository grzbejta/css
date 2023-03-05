const list = document.querySelectorAll(".navigation__list"),
  menu = document.querySelector(".navigation__lists"),
  opernMenu = document.querySelector(".nav__toggle");
function active() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
list.forEach((item) => {
  item.addEventListener("click", active);
});

// close-circle-outline
let flaga = true;
opernMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
  opernMenu.setAttribute(
    "name",
    `${flaga ? "close-circle-outline" : "menu-outline"}`
  );
  flaga = !flaga;
});
