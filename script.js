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

  document.querySelectorAll("#sideMenu a").forEach(a => {
    a.onclick = closeMenu;
  });

  function linear(input, from, to, result) {
    const v = parseFloat(input.value);
    if (isNaN(v)) { result.textContent = ""; return; }
    result.textContent = "Result: " + (v * from.value / to.value).toFixed(4);
  }

  lenInput.oninput = () => linear(lenInput, lenFrom, lenTo, lenResult);
  wInput.oninput   = () => linear(wInput, wFrom, wTo, wResult);
  eInput.oninput   = () => linear(eInput, eFrom, eTo, eResult);

  tInput.oninput = () => {
    let v = parseFloat(tInput.value);
    if (isNaN(v)) { tResult.textContent = ""; return; }

    let c = tFrom.value === "c" ? v :
            tFrom.value === "f" ? (v - 32) * 5/9 :
            v - 273.15;

    let r = tTo.value === "c" ? c :
            tTo.value === "f" ? c * 9/5 + 32 :
            c + 273.15;

    tResult.textContent = "Result: " + r.toFixed(2);
  };

});
