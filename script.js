function toggleMenu(){
    document.getElementById("sideMenu").classList.toggle("open");
    document.getElementById("overlay").style.display =
    document.getElementById("sideMenu").classList.contains("open") ? "block" : "none";
}

function showResult(id, text){
    const el = document.getElementById(id);
    el.innerHTML = text;
    el.classList.add("show");
}

const maps = {
    length:{meter:1,kilometer:1000,centimeter:0.01,millimeter:0.001},
    weight:{kilogram:1,gram:0.001,pound:0.453592},
    energy:{joule:1,kilojoule:1000},
    pressure:{pascal:1,bar:100000}
};

function setup(input, from, to, result, type){
    function convert(){
        const v = parseFloat(input.value);
        if(isNaN(v)) return;

        let r;

        if(type==="temperature"){
            let c = from.value==="c"?v:from.value==="f"?(v-32)*5/9:v-273.15;
            r = to.value==="c"?c:to.value==="f"?c*9/5+32:c+273.15;
        }
        else if(type==="fuel"){
            r = from.value==="l100" ? 235.215/v : 235.215/v;
        }
        else{
            r = v * maps[type][from.value] / maps[type][to.value];
        }

        showResult(result,
            `From ${from.options[from.selectedIndex].text} → 
             To ${to.options[to.selectedIndex].text}<br>
             <strong>Result: ${r.toFixed(6)}</strong>`
        );
    }

    input.addEventListener("input",convert);
    from.addEventListener("change",convert);
    to.addEventListener("change",convert);
}

window.onload = ()=>{
setup(lenInput,lenFrom,lenTo,lenResult,"length");
setup(wInput,wFrom,wTo,wResult,"weight");
setup(tInput,tFrom,tTo,tResult,"temperature");
setup(eInput,eFrom,eTo,eResult,"energy");
setup(pInput,pFrom,pTo,pResult,"pressure");
setup(fInput,fFrom,fTo,fResult,"fuel");
};
