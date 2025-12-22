document.addEventListener("DOMContentLoaded", () => {

  // ===== BURGER MENU =====
  const burger = document.getElementById("burger");
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  function toggleMenu(forceClose = false) {
    if (!menu || !overlay) return;

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

  if (burger) burger.addEventListener("click", () => toggleMenu());
  if (overlay) overlay.addEventListener("click", () => toggleMenu(true));

  document.querySelectorAll("#sideMenu a").forEach(link => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  // доступ з футера
  window.toggleMenu = toggleMenu;

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
  const lenInput = document.getElementById("lenInput");
  const lenFrom = document.getElementById("lenFrom");
  const lenTo = document.getElementById("lenTo");
  const lenResult = document.getElementById("lenResult");

  if (lenInput) {
    lenInput.oninput = () => convertLinear(lenInput, lenFrom, lenTo, lenResult);
    lenFrom.onchange = lenTo.onchange = lenInput.oninput;
  }

  // Weight
  const wInput = document.getElementById("wInput");
  const wFrom = document.getElementById("wFrom");
  const wTo = document.getElementById("wTo");
  const wResult = document.getElementById("wResult");

  if (wInput) {
    wInput.oninput = () => convertLinear(wInput, wFrom, wTo, wResult);
    wFrom.onchange = wTo.onchange = wInput.oninput;
  }

  // Speed
  const sInput = document.getElementById("sInput");
  const sFrom = document.getElementById("sFrom");
  const sTo = document.getElementById("sTo");
  const sResult = document.getElementById("sResult");

  if (sInput) {
    sInput.oninput = () => convertLinear(sInput, sFrom, sTo, sResult);
    sFrom.onchange = sTo.onchange = sInput.oninput;
  }

  // Volume
  const vInput = document.getElementById("vInput");
  const vFrom = document.getElementById("vFrom");
  const vTo = document.getElementById("vTo");
  const vResult = document.getElementById("vResult");

  if (vInput) {
    vInput.oninput = () => convertLinear(vInput, vFrom, vTo, vResult);
    vFrom.onchange = vTo.onchange = vInput.oninput;
  }

  // Area
  const aInput = document.getElementById("aInput");
  const aFrom = document.getElementById("aFrom");
  const aTo = document.getElementById("aTo");
  const aResult = document.getElementById("aResult");

  if (aInput) {
    aInput.oninput = () => convertLinear(aInput, aFrom, aTo, aResult);
    aFrom.onchange = aTo.onchange = aInput.oninput;
  }

  // Time
  const timeInput = document.getElementById("timeInput");
  const timeFrom = document.getElementById("timeFrom");
  const timeTo = document.getElementById("timeTo");
  const timeResult = document.getElementById("timeResult");

  if (timeInput) {
    timeInput.oninput = () => convertLinear(timeInput, timeFrom, timeTo, timeResult);
    timeFrom.onchange = timeTo.onchange = timeInput.oninput;
  }

  // Energy
  const eInput = document.getElementById("eInput");
  const eFrom = document.getElementById("eFrom");
  const eTo = document.getElementById("eTo");
  const eResult = document.getElementById("eResult");

  if (eInput) {
    eInput.oninput = () => convertLinear(eInput, eFrom, eTo, eResult);
    eFrom.onchange = eTo.onchange = eInput.oninput;
  }

  // Pressure
  const pInput = document.getElementById("pInput");
  const pFrom = document.getElementById("pFrom");
  const pTo = document.getElementById("pTo");
  const pResult = document.getElementById("pResult");

  if (pInput) {
    pInput.oninput = () => convertLinear(pInput, pFrom, pTo, pResult);
    pFrom.onchange = pTo.onchange = pInput.oninput;
  }

  // ===== TEMPERATURE =====
  const tInput = document.getElementById("tInput");
  const tFrom = document.getElementById("tFrom");
  const tTo = document.getElementById("tTo");
  const tResult = document.getElementById("tResult");

  if (tInput) {
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
  }

  // ===== FUEL =====
  const fInput = document.getElementById("fInput");
  const fFrom = document.getElementById("fFrom");
  const fTo = document.getElementById("fTo");
  const fResult = document.getElementById("fResult");

  if (fInput) {
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
  }

});
