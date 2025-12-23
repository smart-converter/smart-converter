document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const footerMenu = document.getElementById("footerMenu");
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("show");
  }

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("show");
  }

  burger.onclick = openMenu;
  footerMenu.onclick = openMenu;
  overlay.onclick = closeMenu;

  document.querySelectorAll("#sideMenu a").forEach(link => {
    link.onclick = closeMenu;
  });
});
