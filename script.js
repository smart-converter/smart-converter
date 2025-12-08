// ===== BURGER MENU =====
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.left = (menu.style.left === "0px") ? "-250px" : "0px";
}

// ===== RESULT HELPER =====
function showResult(id, msg) {
    const el = document.getElementById(id);
    el.classList.remove("show");
    el.innerHTML = `<span class="result-label">Result:</span> ${msg}`;
    void el.offsetWidth; // trigger reflow
    el.classList.add("show");
}

// ===== CONVERTER DATA =====
const converters = {
    length: {units:["meter","kilometer","centimeter","millimeter","mile","yard","foot","inch"], map:{meter:1,kilometer:1000,centimeter:0.01,millimeter:0.001,mile:1609.344,yard:0.9144,foot:0.3048,inch:0.0254}},
    weight: {units:["kg","g","mg","lb","oz"], map:{kg:1,g:0.001,mg:0.000001,lb:0.453592,oz:0.0283495}},
    temperature: {units:["c","f","k"]},
    volume: {units:["l","ml","m3","gallon"], map:{l:1,ml:0.001,m3:1000,gallon:3.78541}},
    area: {units:["m2","km2","cm2","ft2"], map:{m2:1,km2:1000000,cm2:0.0001,ft2:0.092903}},
    speed: {units:["mps","kph","mph"], map:{mps:1,kph:0.277778,mph:0.44704}},
    time: {units:["sec","min","hr"], map:{sec:1,min:60,hr:3600}},
    energy: {units:["j","kj","cal"], map:{j:1,kj:1000,cal:4.184}},
    pressure: {units:["pa","bar","atm"], map:{pa:1,bar:100000,atm:101325}},
    fuel: {units:["l100","mpg"]}
};

// ===== INIT CONVERTERS =====
window.addEventListener("DOMContentLoaded",()=>{
    const main = document.getElementById("mainContent");

    for(let key in converters){
        const div = document.createElement("section");
        div.id = key;
        div.className = "converter";
        div.innerHTML = `<h2>${key.charAt(0).toUpperCase()+key.slice(1)} Converter</h2>
        <input type="number" id="${key}Input" placeholder="Enter value">
        <select id="${key}From"></select>
        <select id="${key}To"></select>
        <p class="result" id="${key}Result"></p>`;
        main.appendChild(div);

        const from = document.getElementById(`${key}From`);
        const to = document.getElementById(`${key}To`);
        converters[key].units.forEach(u=>{
            from.innerHTML += `<option value="${u}">${u}</option>`;
            to.innerHTML += `<option value="${u}">${u}</option>`;
        });

        const input = document.getElementById(`${key}Input`);
        input.addEventListener("input",()=>runConverter(key));
        from.addEventListener("change",()=>runConverter(key));
        to.addEventListener("change",()=>runConverter(key));
    }
});

// ===== RUN CONVERTER =====
function runConverter(key){
    const val = parseFloat(document.getElementById(`${key}Input`).value);
    if(isNaN(val)) return showResult(`${key}Result`,"Enter valid number");
    const from = document.getElementById(`${key}From`).value;
    const to = document.getElementById(`${key}To`).value;
    let result;

    if(key==="temperature"){
        let c;
        if(from==="c") c=val;
        else if(from==="f") c=(val-32)*5/9;
        else if(from==="k") c=val-273.15;
        if(to==="c") result=c;
        else if(to==="f") result=c*9/5+32;
        else if(to==="k") result=c+273.15;
    } else if(key==="fuel"){
        if(from==="l100" && to==="mpg") result=235.215/val;
        else if(from==="mpg" && to==="l100") result=235.215/val;
        else result=val;
    } else {
        const map = converters[key].map;
        result = val*map[from]/map[to];
    }
    showResult(`${key}Result`,`${val} ${from} → ${result} ${to}`);
}
