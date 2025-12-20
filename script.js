const burger = document.getElementById("burger");
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu(forceClose = false) {
  if (!menu) return;

  if (forceClose) {
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
    if (overlay) overlay.style.display = "none";
  } else {
    menu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
    if (overlay) overlay.style.display = menu.classList.contains("open") ? "block" : "none";
  }
}

if (burger) {
  burger.onclick = () => toggleMenu();
}

if (overlay) {
  overlay.onclick = () => toggleMenu(true);
}

document.querySelectorAll('#sideMenu a').forEach(link => {
  link.addEventListener('click', () => toggleMenu(true));
});

/* ===== CONVERTERS (safe) ===== */

function convertLinear(input, from, to, result) {
  if (!input || !from || !to || !result) return;
  const v = parseFloat(input.value);
  if (isNaN(v)) return;
  result.textContent = "Result: " + (v * from.value / to.value).toFixed(6);
}

if (window.lenInput) {
  lenInput.oninput = () => convertLinear(lenInput, lenFrom, lenTo, lenResult);
  lenFrom.onchange = lenTo.onchange = lenInput.oninput;
}

if (window.wInput) {
  wInput.oninput = () => convertLinear(wInput, wFrom, wTo, wResult);
  wFrom.onchange = wTo.onchange = wInput.oninput;
}

if (window.sInput) {
  sInput.oninput = () => convertLinear(sInput, sFrom, sTo, sResult);
  sFrom.onchange = sTo.onchange = sInput.oninput;
}

if (window.tInput) {
  tInput.oninput = () => {
    let v = parseFloat(tInput.value);
    if (isNaN(v)) return;
    let c = tFrom.value === "c" ? v : tFrom.value === "f" ? (v - 32) * 5 / 9 : v - 273.15;
    let r = tTo.value === "c" ? c : tTo.value === "f" ? c * 9 / 5 + 32 : c + 273.15;
    tResult.textContent = "Result: " + r.toFixed(2);
  };
}

if (window.fInput) {
  fInput.oninput = () => {
    let v = parseFloat(fInput.value);
    if (isNaN(v)) return;
    let r = fFrom.value === "l100" ? 235.215 / v : 235.215 / v;
    fResult.textContent = "Result: " + r.toFixed(2);
  };
}
