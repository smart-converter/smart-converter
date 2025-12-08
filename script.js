// ===============================
// LENGTH
// ===============================
function convertLength() {
    const input = parseFloat(document.getElementById("length-input").value);
    const from = document.getElementById("length-unit-from").value;
    const to = document.getElementById("length-unit-to").value;

    if (isNaN(input)) {
        document.getElementById("length-result").innerText = "Enter a valid number";
        return;
    }

    const units = {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        micrometer: 0.000001,
        nanometer: 0.000000001,
        mile: 1609.344,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    };

    const result = input * units[from] / units[to];
    document.getElementById("length-result").innerText = result;
}

// ===============================
// WEIGHT
// ===============================
function convertWeight() {
    const input = parseFloat(document.getElementById("weight-input").value);
    const from = document.getElementById("weight-unit-from").value;
    const to = document.getElementById("weight-unit-to").value;

    if (isNaN(input)) {
        document.getElementById("weight-result").innerText = "Enter a valid number";
        return;
    }

    const units = {
        gram: 1,
        kilogram: 1000,
        milligram: 0.001,
        pound: 453.59237,
        ounce: 28.3495
    };

    const result = input * units[from] / units[to];
    document.getElementById("weight-result").innerText = result;
}

// ===============================
// TEMPERATURE
// ===============================
function convertTemperature() {
    const input = parseFloat(document.getElementById("temp-input").value);
    const from = document.getElementById("temp-unit-from").value;
    const to = document.getElementById("temp-unit-to").value;

    if (isNaN(input)) {
        document.getElementById("temp-result").innerText = "Enter a valid number";
        return;
    }

    let celsius;

    // Convert FROM → Celsius
    if (from === "celsius") celsius = input;
    if (from === "fahrenheit") celsius = (input - 32) * 5/9;
    if (from === "kelvin") celsius = input - 273.15;

    let result;

    // Convert Celsius → TO
    if (to === "celsius") result = celsius;
    if (to === "fahrenheit") result = (celsius * 9/5) + 32;
    if (to === "kelvin") result = celsius + 273.15;

    document.getElementById("temp-result").innerText = result;
}
