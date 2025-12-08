// Clean, reliable converter script for all panels
// - tabs wiring
// - unit tables
// - live conversion with formatting

// ---------- helper: format numbers ----------
function formatNumber(n){
  if(!isFinite(n)) return 'NaN';
  // show up to 10 significant digits, trim trailing zeros
  const abs = Math.abs(n);
  if(abs !== 0 && (abs < 1e-6 || abs >= 1e9)) return n.toExponential(6);
  let s = Number(n).toPrecision(10);
  s = s.replace(/(?:\.0+|(\.\d+?)0+)$/,'$1');
  return s;
}

// ---------- tabs ----------
const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = Array.from(document.querySelectorAll('.panel'));
tabs.forEach(t=>{
  t.addEventListener('click', ()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const id = t.getAttribute('data-tab');
    panels.forEach(p=>p.classList.toggle('active-panel', p.id === id));
    // after switching panels, trigger update for visible panel
    if(id === 'length') updateLength();
    if(id === 'temperature') updateTemp();
    if(id === 'area') updateArea();
    if(id === 'volume') updateVolume();
    if(id === 'weight') updateWeight();
    if(id === 'time') updateTime();
  });
});

// ---------- unit tables (base units) ----------
const TABLES = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    micrometer: 1e-6,
    nanometer: 1e-9,
    mile: 1609.344,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
    lightyear: 9.4607e15
  },
  area: {
    square_meter: 1,
    square_kilometer: 1e6,
    square_centimeter: 0.0001,
    square_mile: 2589988.110336,
    acre: 4046.8564224,
    hectare: 10000
  },
  volume: {
    liter: 1,
    milliliter: 0.001,
    cubic_meter: 1000,
    cubic_inch: 0.016387064,
    cubic_foot: 28.316846592,
    gallon: 3.785411784
  },
  weight: {
    kilogram: 1,
    gram: 0.001,
    milligram: 1e-6,
    pound: 0.45359237,
    ounce: 0.028349523125
  },
  time: {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400
  }
};

// ---------- populate selects helper ----------
function populateSelect(selectEl, entries, prettyFn){
  selectEl.innerHTML = '';
  for(const key in entries){
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = prettyFn ? prettyFn(key) : key;
    selectEl.appendChild(opt);
  }
}

// pretty names
function prettyUnit(key){
  return key
    .replace(/_/g,' ')
    .replace(/([a-z])([A-Z])/g,'$1 $2')
    .replace(/\b([a-z])/g, s=>s.toUpperCase())
    .replace('Lightyear','Light year');
}

// ---------- LENGTH ----------
const lengthInput = document.getElementById('lengthInput');
const lengthFrom = document.getElementById('lengthFrom');
const lengthTo = document.getElementById('lengthTo');
const lengthResult = document.getElementById('lengthResult');
populateSelect(lengthFrom, TABLES.length, prettyUnit);
populateSelect(lengthTo, TABLES.length, prettyUnit);
lengthFrom.value = 'meter';
lengthTo.value = 'kilometer';

function updateLength(){
  const v = parseFloat(lengthInput.value);
  if(isNaN(v)){ lengthResult.textContent = '0'; return; }
  const from = TABLES.length[lengthFrom.value];
  const to = TABLES.length[lengthTo.value];
  const res = v * from / to;
  lengthResult.textContent = formatNumber(res);
  pulse(lengthResult);
}
[lengthInput, lengthFrom, lengthTo].forEach(el=>el.addEventListener('input', updateLength));

// ---------- TEMPERATURE ----------
const tempInput = document.getElementById('tempInput');
const tempFrom = document.getElementById('tempFrom');
const tempTo = document.getElementById('tempTo');
const tempResult = document.getElementById('tempResult');

function convertTempValue(v, f, t){
  // v numeric
  if(f === t) return v;
  let c;
  if(f === 'C') c = v;
  else if(f === 'F') c = (v - 32) * 5/9;
  else if(f === 'K') c = v - 273.15;
  if(t === 'C') return c;
  if(t === 'F') return c * 9/5 + 32;
  if(t === 'K') return c + 273.15;
  return NaN;
}

function updateTemp(){
  const v = parseFloat(tempInput.value);
  if(isNaN(v)){ tempResult.textContent = '0'; return; }
  const res = convertTempValue(v, tempFrom.value, tempTo.value);
  tempResult.textContent = formatNumber(res);
  pulse(tempResult);
}
[tempInput, tempFrom, tempTo].forEach(el=>el.addEventListener('input', updateTemp));

// ---------- AREA ----------
const areaInput = document.getElementById('areaInput');
const areaFrom = document.getElementById('areaFrom');
const areaTo = document.getElementById('areaTo');
const areaResult = document.getElementById('areaResult');
populateSelect(areaFrom, TABLES.area, prettyUnit);
populateSelect(areaTo, TABLES.area, prettyUnit);
areaFrom.value = 'square_meter';
areaTo.value = 'square_meter';

function updateArea(){
  const v = parseFloat(areaInput.value);
  if(isNaN(v)){ areaResult.textContent = '0'; return; }
  const res = v * TABLES.area[areaFrom.value] / TABLES.area[areaTo.value];
  areaResult.textContent = formatNumber(res);
  pulse(areaResult);
}
[areaInput, areaFrom, areaTo].forEach(el=>el.addEventListener('input', updateArea));

// ---------- VOLUME ----------
const volumeInput = document.getElementById('volumeInput');
const volumeFrom = document.getElementById('volumeFrom');
const volumeTo = document.getElementById('volumeTo');
const volumeResult = document.getElementById('volumeResult');
populateSelect(volumeFrom, TABLES.volume, prettyUnit);
populateSelect(volumeTo, TABLES.volume, prettyUnit);
volumeFrom.value = 'liter';
volumeTo.value = 'liter';

function updateVolume(){
  const v = parseFloat(volumeInput.value);
  if(isNaN(v)){ volumeResult.textContent = '0'; return; }
  const res = v * TABLES.volume[volumeFrom.value] / TABLES.volume[volumeTo.value];
  volumeResult.textContent = formatNumber(res);
  pulse(volumeResult);
}
[volumeInput, volumeFrom, volumeTo].forEach(el=>el.addEventListener('input', updateVolume));

// ---------- WEIGHT ----------
const weightInput = document.getElementById('weightInput');
const weightFrom = document.getElementById('weightFrom');
const weightTo = document.getElementById('weightTo');
const weightResult = document.getElementById('weightResult');
populateSelect(weightFrom, TABLES.weight, prettyUnit);
populateSelect(weightTo, TABLES.weight, prettyUnit);
weightFrom.value = 'kilogram';
weightTo.value = 'kilogram';

function updateWeight(){
  const v = parseFloat(weightInput.value);
  if(isNaN(v)){ weightResult.textContent = '0'; return; }
  const res = v * TABLES.weight[weightFrom.value] / TABLES.weight[weightTo.value];
  weightResult.textContent = formatNumber(res);
  pulse(weightResult);
}
[weightInput, weightFrom, weightTo].forEach(el=>el.addEventListener('input', updateWeight));

// ---------- TIME ----------
const timeInput = document.getElementById('timeInput');
const timeFrom = document.getElementById('timeFrom');
const timeTo = document.getElementById('timeTo');
const timeResult = document.getElementById('timeResult');
populateSelect(timeFrom, TABLES.time, prettyUnit);
populateSelect(timeTo, TABLES.time, prettyUnit);
timeFrom.value = 'second';
timeTo.value = 'minute';

function updateTime(){
  const v = parseFloat(timeInput.value);
  if(isNaN(v)){ timeResult.textContent = '0'; return; }
  const res = v * TABLES.time[timeFrom.value] / TABLES.time[timeTo.value];
  timeResult.textContent = formatNumber(res);
  pulse(timeResult);
}
[timeInput, timeFrom, timeTo].forEach(el=>el.addEventListener('input', updateTime));

// ---------- small pulse animation ----------
function pulse(el){
  if(!el) return;
  el.classList.remove('pulse');
  // force reflow
  void el.offsetWidth;
  el.classList.add('pulse');
}

// initialize defaults
document.addEventListener('DOMContentLoaded', ()=>{
  updateLength();
  updateTemp();
  updateArea();
  updateVolume();
  updateWeight();
  updateTime();
});
