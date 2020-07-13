const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  e.target.classList.toggle("menuExtended");
});
