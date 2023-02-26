const list = document.querySelectorAll(".navigation__list");
function active() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
list.forEach((item) => {
  item.addEventListener("click", active);
});
