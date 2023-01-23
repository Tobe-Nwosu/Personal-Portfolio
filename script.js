const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
const tobe = document.getElementsByClassName("tobe-img")[0]

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle('active')
} )

toggleButton.addEventListener("click", () => {
  header.classList.toggle('hidden')
} )


toggleButton.addEventListener("click", () => {
  tobe.classList.toggle('hidden')
} )


click.addEventListener("click", () => {
  audio.play();
});
