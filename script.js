const burger = document.getElementById("burger");
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu(forceClose = false) {
  const body = document.body;

  if (forceClose || menu.classList.contains("open")) {
    menu.classList.remove("open");
    overlay.style.display = "none";
    body.classList.remove("menu-open");
  } else {
    menu.classList.add("open");
    overlay.style.display = "block";
    body.classList.add("menu-open");
  }
}

burger.onclick = () => toggleMenu();
overlay.onclick = () => toggleMenu(true);

function convertLinear(input, from, to, result) {
  const v = parseFloat(input.value);
  if (isNaN(v)) return;
  result.textContent = "Result: " + (v * from.value / to.value).toFixed(6);
}

lenInput.oninput = () => convertLinear(lenInput, lenFrom, lenTo, lenResult);
lenFrom.onchange = lenTo.onchange = lenInput.oninput;

wInput.oninput = () => convertLinear(wInput, wFrom, wTo, wResult);
wFrom.onchange = wTo.onchange = wInput.oninput;

sInput.oninput = () => convertLinear(sInput, sFrom, sTo, sResult);
sFrom.onchange = sTo.onchange = sInput.oninput;

tInput.oninput = () => {
  let v = parseFloat(tInput.value);
  if (isNaN(v)) return;
  let c = tFrom.value === "c" ? v : tFrom.value === "f" ? (v-32)*5/9 : v-273.15;
  let r = tTo.value === "c" ? c : tTo.value === "f" ? c*9/5+32 : c+273.15;
  tResult.textContent = "Result: " + r.toFixed(2);
};

fInput.oninput = () => {
  let v = parseFloat(fInput.value);
  if (isNaN(v)) return;
  let r = fFrom.value === "l100" ? 235.215 / v : 235.215 / v;
  fResult.textContent = "Result: " + r.toFixed(2);
};
document.querySelectorAll('#sideMenu a').forEach(link => {
  link.addEventListener('click', () => toggleMenu(true));
});
