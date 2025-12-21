// ===== BURGER MENU =====
const burger = document.getElementById("burger");
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

window.toggleMenu = function (forceClose = false) {
  const body = document.body;

  if (forceClose || menu.classList.contains("open")) {
    menu.classList.remove("open");
    body.classList.remove("menu-open");
    overlay.style.display = "none";
  } else {
    menu.classList.add("open");
    body.classList.add("menu-open");
    overlay.style.display = "block";
  }
};
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

document.querySelectorAll("#sideMenu a").forEach(link => {
  link.onclick = () => toggleMenu(true);
});

// ===== LINEAR CONVERTER =====
function convertLinear(input, from, to, result) {
  const v = parseFloat(input.value);
  if (isNaN(v)) {
    result.textContent = "";
    return;
  }
  result.textContent = "Result: " + (v * from.value / to.value).toFixed(6);
}

// Length
lenInput.oninput = () => convertLinear(lenInput, lenFrom, lenTo, lenResult);
lenFrom.onchange = lenTo.onchange = lenInput.oninput;

// Weight
wInput.oninput = () => convertLinear(wInput, wFrom, wTo, wResult);
wFrom.onchange = wTo.onchange = wInput.oninput;

// Speed
sInput.oninput = () => convertLinear(sInput, sFrom, sTo, sResult);
sFrom.onchange = sTo.onchange = sInput.oninput;

// Volume
vInput.oninput = () => convertLinear(vInput, vFrom, vTo, vResult);
vFrom.onchange = vTo.onchange = vInput.oninput;

// Area
aInput.oninput = () => convertLinear(aInput, aFrom, aTo, aResult);
aFrom.onchange = aTo.onchange = aInput.oninput;

// Time
timeInput.oninput = () => convertLinear(timeInput, timeFrom, timeTo, timeResult);
timeFrom.onchange = timeTo.onchange = timeInput.oninput;

// Energy
eInput.oninput = () => convertLinear(eInput, eFrom, eTo, eResult);
eFrom.onchange = eTo.onchange = eInput.oninput;

// Pressure
pInput.oninput = () => convertLinear(pInput, pFrom, pTo, pResult);
pFrom.onchange = pTo.onchange = pInput.oninput;

// ===== TEMPERATURE =====
tInput.oninput = () => {
  const v = parseFloat(tInput.value);
  if (isNaN(v)) {
    tResult.textContent = "";
    return;
  }
  let c =
    tFrom.value === "c" ? v :
    tFrom.value === "f" ? (v - 32) * 5 / 9 :
    v - 273.15;

  let r =
    tTo.value === "c" ? c :
    tTo.value === "f" ? c * 9 / 5 + 32 :
    c + 273.15;

  tResult.textContent = "Result: " + r.toFixed(2);
};

// ===== FUEL =====
fInput.oninput = () => {
  const v = parseFloat(fInput.value);
  if (isNaN(v)) {
    fResult.textContent = "";
    return;
  }

  let r =
    fFrom.value === "l100" && fTo.value === "mpg" ? 235.215 / v :
    fFrom.value === "mpg" && fTo.value === "l100" ? 235.215 / v :
    v;

  fResult.textContent = "Result: " + r.toFixed(2);
};
window.toggleMenu = toggleMenu;
