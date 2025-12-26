document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const footerMenu = document.getElementById("footerMenu");
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!burger || !footerMenu || !menu || !overlay) {
    console.error("Menu elements missing");
    return;
  }

  function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("show");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("show");
    document.body.classList.remove("menu-open");
  }

  burger.addEventListener("click", openMenu);
  footerMenu.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll("#sideMenu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});
