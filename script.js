const lengthUnits = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  um: 1e-6,
  nm: 1e-9,
  mi: 1609.344,
  yd: 0.9144,
  ft: 0.3048,
  in: 0.0254,
  ly: 9.4607e15
};

const weightUnits = {
  kg: 1,
  g: 0.001,
  mg: 1e-6,
  lb: 0.45359237,
  oz: 0.028349523125
};

const volumeUnits = {
  l: 1,
  ml: 0.001,
  m3: 1000,
  ft3: 28.316846592,
  in3: 0.016387064,
  gal: 3.785411784
};

function convertLength() {
  const v = parseFloat(lengthInput.value) || 0;
  lengthResult.textContent = (v * lengthUnits[lengthUnitFrom.value]) / lengthUnits[lengthUnitTo.value];
}

function convertWeight() {
  const v = parseFloat(weightInput.value) || 0;
  weightResult.textContent = (v * weightUnits[weightUnitFrom.value]) / weightUnits[weightUnitTo.value];
}

function convertVolume() {
  const v = parseFloat(volumeInput.value) || 0;
  volumeResult.textContent = (v * volumeUnits[volumeUnitFrom.value]) / volumeUnits[volumeUnitTo.value];
}

function convertTemp() {
  const v = parseFloat(tempInput.value) || 0;
  const f = tempUnitFrom.value;
  const t = tempUnitTo.value;

  let c;
  if (f === "C") c = v;
  if (f === "F") c = (v - 32) * 5/9;
  if (f === "K") c = v - 273.15;

  if (t === "C") tempResult.textContent = c;
  if (t === "F") tempResult.textContent = c * 9/5 + 32;
  if (t === "K") tempResult.textContent = c + 273.15;
}
