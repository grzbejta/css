const banner = document.getElementsByClassName("banner")[0];
const blocks = document.getElementsByClassName("blocks");
const numberOffColor = 400;

for (let i = 0; i < numberOffColor; i++) {
  banner.innerHTML += '<div class="blocks"></div>';

  const duration = Math.random() * 5;

  blocks[i].style.animationDuration = `${duration}s`;
  blocks[i].style.animationDelay = `${duration}s`;
}
