// ===== Conversion Functions =====
function convertLength() {
    const value = parseFloat(document.getElementById('lengthInput').value) || 0;
    const from = document.getElementById('lengthUnitFrom').value;
    const to = document.getElementById('lengthUnitTo').value;

    let meters = from === 'm' ? value : from === 'km' ? value * 1000 : value / 100;
    let result = to === 'm' ? meters : to === 'km' ? meters / 1000 : meters * 100;

    document.getElementById('lengthResult').textContent = result.toFixed(2);
}

function convertWeight() {
    const value = parseFloat(document.getElementById('weightInput').value) || 0;
    const from = document.getElementById('weightUnitFrom').value;
    const to = document.getElementById('weightUnitTo').value;

    let kg = from === 'kg' ? value : from === 'g' ? value / 1000 : value * 0.453592;
    let result = to === 'kg' ? kg : to === 'g' ? kg * 1000 : kg / 0.453592;

    document.getElementById('weightResult').textContent = result.toFixed(2);
}

function convertTemp() {
    const value = parseFloat(document.getElementById('tempInput').value) || 0;
    const from = document.getElementById('tempUnitFrom').value;
    const to = document.getElementById('tempUnitTo').value;

    let result = from === 'C' && to === 'F' ? (value * 9/5 + 32) :
                 from === 'F' && to === 'C' ? ((value - 32) * 5/9) : value;

    document.getElementById('tempResult').textContent = result.toFixed(2);
}

function convertVolume() {
    const value = parseFloat(document.getElementById('volumeInput').value) || 0;
    const from = document.getElementById('volumeUnitFrom').value;
    const to = document.getElementById('volumeUnitTo').value;

    let liters = from === 'l' ? value : from === 'ml' ? value / 1000 : value * 1000;
    let result = to === 'l' ? liters : to === 'ml' ? liters * 1000 : liters / 1000;

    document.getElementById('volumeResult').textContent = result.toFixed(2);
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
