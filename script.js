// =======================
// BURGER MENU
// =======================
const burger = document.getElementById("burger");
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu(forceClose = false) {
  if (forceClose || menu.classList.contains("open")) {
    menu.classList.remove("open");
    overlay.style.display = "none";
    document.body.classList.remove("menu-open");
  } else {
    menu.classList.add("open");
    overlay.style.display = "block";
    document.body.classList.add("menu-open");
  }
}

burger.onclick = () => toggleMenu();
overlay.onclick = () => toggleMenu(true);
document.querySelectorAll('#sideMenu a').forEach(link => {
  link.addEventListener('click', () => toggleMenu(true));
});

// =======================
// GENERAL CONVERTER FUNCTION
// =======================
function convertLinear(input, from, to, result) {
  const v = parseFloat(input.value);
  if (isNaN(v)) return;
  result.textContent = "Result: " + (v * parseFloat(from.value) / parseFloat(to.value)).toFixed(6);
}

// =======================
// LENGTH
// =======================
lenInput.oninput = () => convertLinear(lenInput, lenFrom, lenTo, lenResult);
lenFrom.onchange = lenTo.onchange = lenInput.oninput;

// =======================
// WEIGHT
// =======================
wInput.oninput = () => convertLinear(wInput, wFrom, wTo, wResult);
wFrom.onchange = wTo.onchange = wInput.oninput;

// =======================
// SPEED
// =======================
sInput.oninput = () => convertLinear(sInput, sFrom, sTo, sResult);
sFrom.onchange = sTo.onchange = sInput.oninput;

// =======================
// VOLUME
// =======================
vInput.oninput = () => convertLinear(vInput, vFrom, vTo, vResult);
vFrom.onchange = vTo.onchange = vInput.oninput;

// =======================
// AREA
// =======================
aInput.oninput = () => convertLinear(aInput, aFrom, aTo, aResult);
aFrom.onchange = aTo.onchange = aInput.oninput;

// =======================
// TIME
// =======================
timeInput.oninput = () => convertLinear(timeInput, timeFrom, timeTo, timeResult);
timeFrom.onchange = timeTo.onchange = timeInput.oninput;

// =======================
// ENERGY
// =======================
eInput.oninput = () => convertLinear(eInput, eFrom, eTo, eResult);
eFrom.onchange = eTo.onchange = eInput.oninput;

// =======================
// PRESSURE
// =======================
pInput.oninput = () => convertLinear(pInput, pFrom, pTo, pResult);
pFrom.onchange = pTo.onchange = pInput.oninput;

// =======================
// TEMPERATURE
// =======================
tInput.oninput = () => {
  let v = parseFloat(tInput.value);
  if (isNaN(v)) return;
  let c = tFrom.value === "c" ? v : tFrom.value === "f" ? (v-32)*5/9 : v-273.15;
  let r = tTo.value === "c" ? c : tTo.value === "f" ? c*9/5+32 : c+273.15;
  tResult.textContent = "Result: " + r.toFixed(2);
};

// =======================
// FUEL
// =======================
fInput.oninput = () => {
  let v = parseFloat(fInput.value);
  if (isNaN(v)) return;
  let r = fFrom.value === "l100" ? 235.215 / v : 235.215 / v; // простий перевід
  fResult.textContent = "Result: " + r.toFixed(2);
};
