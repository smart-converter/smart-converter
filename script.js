function toggleMenu(){
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("open");
    overlay.style.display = menu.classList.contains("open") ? "block" : "none";
}

function openBlock(id){
    toggleMenu();
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function showResult(el, text){
    el.innerHTML = text;
    el.classList.add("show");
}

const maps = {
length:{meter:1,kilometer:1000,centimeter:0.01},
weight:{kg:1,g:0.001,lb:0.453592},
energy:{j:1,kj:1000},
pressure:{pa:1,bar:100000}
};

function setup(i,f,t,r,type){
    function calc(){
        const v=parseFloat(i.value);
        if(isNaN(v)) return;

        let res;
        if(type==="temperature"){
            let c=f.value==="c"?v:f.value==="f"?(v-32)*5/9:v-273.15;
            res=t.value==="c"?c:t.value==="f"?c*9/5+32:c+273.15;
        } else if(type==="fuel"){
            res=235.215/v;
        } else {
            res=v*maps[type][f.value]/maps[type][t.value];
        }

        showResult(r,`From ${f.options[f.selectedIndex].text} → To ${t.options[t.selectedIndex].text}<br><b>Result: ${res.toFixed(6)}</b>`);
    }
    i.oninput=f.onchange=t.onchange=calc;
}

window.onload=()=>{
setup(lenInput,lenFrom,lenTo,lenResult,"length");
setup(wInput,wFrom,wTo,wResult,"weight");
setup(tInput,tFrom,tTo,tResult,"temperature");
setup(eInput,eFrom,eTo,eResult,"energy");
setup(pInput,pFrom,pTo,pResult,"pressure");
setup(fInput,fFrom,fTo,fResult,"fuel");
};
