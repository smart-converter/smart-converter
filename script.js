document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const footerMenu = document.getElementById("footerMenu");
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("show");
    body.classList.add("menu-open");
  }

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("show");
    body.classList.remove("menu-open");
  }

  burger.onclick = openMenu;
  footerMenu.onclick = openMenu;
  overlay.onclick = closeMenu;

  document.querySelectorAll("#sideMenu a").forEach(link => {
    link.onclick = closeMenu;
  });
});

// ===== CONVERTERS =====
function convertLinear(input, from, to, result) {
  const v = parseFloat(input.value);
  if (isNaN(v)) {
    result.textContent = "";
    return;
  }
  result.textContent = "Result: " + (v * from.value / to.value).toFixed(6);
}
