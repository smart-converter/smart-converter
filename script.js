// Length conversion in meters
const lengthUnits = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  mile: 1609.34,
  yard: 0.9144,
  foot: 0.3048,
  inch: 0.0254
};

// Weight conversion in grams
const weightUnits = {
  gram: 1,
  kilogram: 1000,
  pound: 453.592,
  ounce: 28.3495
};

// Animate result
function animateResult(id) {
  const el = document.getElementById(id);
  el.classList.remove("pulse");
  void el.offsetWidth; // reflow для перезапуску анімації
  el.classList.add("pulse");
}

// Generic conversion function
function convertValue(value, fromUnit, toUnit, units) {
  return value * units[fromUnit] / units[toUnit];
}

// Length
function convertLength() {
  let value = parseFloat(document.getElementById('length-input').value);
  let from = document.getElementById('length-from').value;
  let to = document.getElementById('length-to').value;
  let result = convertValue(value, from, to, lengthUnits);
  document.getElementById('length-result').textContent = result;
  animateResult('length-result');
}

// Weight
function convertWeight() {
  let value = parseFloat(document.getElementById('weight-input').value);
  let from = document.getElementById('weight-from').value;
  let to = document.getElementById('weight-to').value;
  let result = convertValue(value, from, to, weightUnits);
  document.getElementById('weight-result').textContent = result;
  animateResult('weight-result');
}

// Temperature
function convertTemp() {
  let value = parseFloat(document.getElementById('temp-input').value);
  let from = document.getElementById('temp-from').value;
  let to = document.getElementById('temp-to').value;
  let result;

  if (from === to) result = value;
  else if (from === 'c' && to === 'f') result = value * 9/5 + 32;
  else if (from === 'c' && to === 'k') result = value + 273.15;
  else if (from === 'f' && to === 'c') result = (value - 32) * 5/9;
  else if (from === 'f' && to === 'k') result = (value - 32) * 5/9 + 273.15;
  else if (from === 'k' && to === 'c') result = value - 273.15;
  else if (from === 'k' && to === 'f') result = (value - 273.15) * 9/5 + 32;

  document.getElementById('temp-result').textContent = result;
  animateResult('temp-result');
}
