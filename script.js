// --- unit tables (base units: meters, kilograms, liters) ---
const LENGTH = {
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

const WEIGHT = {
  kg: 1,
  g: 0.001,
  mg: 1e-6,
  lb: 0.45359237,
  oz: 0.028349523125
};

const VOLUME = {
  l: 1,
  ml: 0.001,
  m3: 1000,
  ft3: 28.316846592,
  in3: 0.016387064,
  gal: 3.785411784
};

// Temperature conversion helper
function convertTempValue(v, from, to){
  if(from === to) return v;
  // convert to Celsius first
  let c;
  if(from === 'C') c = v;
  else if(from === 'F') c = (v - 32) * 5/9;
  else if(from === 'K') c = v - 273.15;
  // convert Celsius to target
  if(to === 'C') return c;
  if(to === 'F') return c * 9/5 + 32;
  if(to === 'K') return c + 273.15;
  return NaN;
}

// formatting: show full precision but trim unnecessary zeros; use scientific for extremes
function formatNumber(n){
  if(!isFinite(n)) return 'NaN';
  // very small or very large -> scientific with 6 significant digits
  const abs = Math.abs(n);
  if((abs !== 0 && (abs < 1e-6 || abs >= 1e9))) {
    return n.toExponential(6);
  }
  // otherwise show up to 12 significant digits, trim trailing zeros
  // use toPrecision then remove trailing zeros and possible dot
  let s = Number(n).toPrecision(12);
  // remove trailing zeros and trailing dot
  s = s.replace(/(?:\.0+|(\.\d+?)0+)$/,'$1');
  return s;
}

// safe conversion generic
function convertGeneric(amount, fromKey, toKey, table){
  const a = parseFloat(amount);
  if(isNaN(a)) return 0;
  const base = table[fromKey];
  const target = table[toKey];
  if(base === undefined || target === undefined) return NaN;
  const inBase = a * base;           // convert to base (meters/kg/liters)
  const result = inBase / target;    // to target
  return result;
}

// animate result helper
function pulseId(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.classList.remove('pulse');
  void el.offsetWidth;
  el.classList.add('pulse');
}

// --- wire up elements and live conversion ---
function initConverters(){
  // length
  const lengthAmount = document.getElementById('lengthAmount');
  const lengthFrom = document.getElementById('lengthFrom');
  const lengthTo = document.getElementById('lengthTo');
  const lengthResult = document.getElementById('lengthResult');

  function updateLength(){
    const res = convertGeneric(lengthAmount.value, lengthFrom.value, lengthTo.value, LENGTH);
    lengthResult.textContent = formatNumber(res);
    pulseId('lengthResult');
  }
  [lengthAmount,lengthFrom,lengthTo].forEach(el=>el.addEventListener('input', updateLength));
  // init
  updateLength();

  // temp
  const tempAmount = document.getElementById('tempAmount');
  const tempFrom = document.getElementById('tempFrom');
  const tempTo = document.getElementById('tempTo');
  const tempResult = document.getElementById('tempResult');

  function updateTemp(){
    const a = parseFloat(tempAmount.value);
    const res = convertTempValue(isNaN(a)?0:a, tempFrom.value, tempTo.value);
    tempResult.textContent = formatNumber(res);
    pulseId('tempResult');
  }
  [tempAmount,tempFrom,tempTo].forEach(el=>el.addEventListener('input', updateTemp));
  updateTemp();

  // volume
  const volAmount = document.getElementById('volumeAmount');
  const volFrom = document.getElementById('volumeFrom');
  const volTo = document.getElementById('volumeTo');
  const volResult = document.getElementById('volumeResult');

  function updateVol(){
    const res = convertGeneric(volAmount.value, volFrom.value, volTo.value, VOLUME);
    volResult.textContent = formatNumber(res);
    pulseId('volumeResult');
  }
  [volAmount,volFrom,volTo].forEach(el=>el.addEventListener('input', updateVol));
  updateVol();

  // weight
  const wAmount = document.getElementById('weightAmount');
  const wFrom = document.getElementById('weightFrom');
  const wTo = document.getElementById('weightTo');
  const wResult = document.getElementById('weightResult');

  function updateWeight(){
    const res = convertGeneric(wAmount.value, wFrom.value, wTo.value, WEIGHT);
    wResult.textContent = formatNumber(res);
    pulseId('weightResult');
  }
  [wAmount,wFrom,wTo].forEach(el=>el.addEventListener('input', updateWeight));
  updateWeight();
}

// run after DOM
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initConverters);
} else {
  initConverters();
}
