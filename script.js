// ===== Conversion Tables =====

// Length in meters
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

// Weight in kilograms
const weightUnits = {
    kg: 1,
    g: 0.001,
    mg: 1e-6,
    lb: 0.45359237,
    oz: 0.028349523125
};

// Volume in liters
const volumeUnits = {
    l: 1,
    ml: 0.001,
    m3: 1000,
    ft3: 28.316846592,
    in3: 0.016387064,
    gal: 3.785411784
};

// Temperature conversion functions
function convertTemperature(value, from, to) {
    if(from === to) return value;

    // Convert from source to Celsius
    let celsius;
    if(from === "C") celsius = value;
    else if(from === "F") celsius = (value - 32) * 5/9;
    else if(from === "K") celsius = value - 273.15;

    // Convert from Celsius to target
    if(to === "C") return celsius;
    else if(to === "F") return celsius * 9/5 + 32;
    else if(to === "K") return celsius + 273.15;
}

// ===== Conversion Functions =====
function convertLength() {
    const value = parseFloat(document.getElementById('lengthInput').value) || 0;
    const from = document.getElementById('lengthUnitFrom').value;
    const to = document.getElementById('lengthUnitTo').value;
    const meters = value * lengthUnits[from];
    const result = meters / lengthUnits[to];
    document.getElementById('lengthResult').textContent = result;
}

function convertWeight() {
    const value = parseFloat(document.getElementById('weightInput').value) || 0;
    const from = document.getElementById('weightUnitFrom').value;
    const to = document.getElementById('weightUnitTo').value;
    const kg = value * weightUnits[from];
    const result = kg / weightUnits[to];
    document.getElementById('weightResult').textContent = result;
}

function convertVolume() {
    const value = parseFloat(document.getElementById('volumeInput').value) || 0;
    const from = document.getElementById('volumeUnitFrom').value;
    const to = document.getElementById('volumeUnitTo').value;
    const liters = value * volumeUnits[from];
    const result = liters / volumeUnits[to];
    document.getElementById('volumeResult').textContent = result;
}

function convertTemp() {
    const value = parseFloat(document.getElementById('tempInput').value) || 0;
    const from = document.getElementById('tempUnitFrom').value;
    const to = document.getElementById('tempUnitTo').value;
    const result = convertTemperature(value, from, to);
    document.getElementById('tempResult').textContent = result;
}

// ===== Live Conversion =====
const inputs = [
    'lengthInput', 'lengthUnitFrom', 'lengthUnitTo',
    'weightInput', 'weightUnitFrom', 'weightUnitTo',
    'tempInput', 'tempUnitFrom', 'tempUnitTo',
    'volumeInput', 'volumeUnitFrom', 'volumeUnitTo'
];

inputs.forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        convertLength();
        convertWeight();
        convertTemp();
        convertVolume();
    });
});
