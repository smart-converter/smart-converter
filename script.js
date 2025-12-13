function toggleMenu(){
document.getElementById("sideMenu").classList.toggle("open");
document.getElementById("overlay").style.display =
document.getElementById("sideMenu").classList.contains("open")?"block":"none";
}

function openConverter(id){
toggleMenu();
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function format(n){
if(!isFinite(n)) return "—";
if(Math.abs(n) < 1) return n.toPrecision(8);
return Number(n.toPrecision(10)).toString();
}

const maps={
length:{meter:1,kilometer:1000,centimeter:0.01,millimeter:0.001,mile:1609.344,yard:0.9144,foot:0.3048,inch:0.0254},
weight:{kg:1,g:0.001,mg:0.000001,lb:0.45359237,oz:0.028349523125},
volume:{l:1,ml:0.001,m3:1000},
area:{m2:1,km2:1e6,cm2:0.0001},
speed:{mps:1,kph:0.2777777778,mph:0.44704},
time:{sec:1,min:60,hr:3600},
energy:{j:1,kj:1000,cal:4.184},
pressure:{pa:1,bar:100000,atm:101325}
};

function setup(i,f,t,r,type){
const I=id=>document.getElementById(id);
function c(){
let v=parseFloat(I(i).value);
if(isNaN(v)) return;
let res;
if(type==="temperature"){
let c=f.value==="c"?v:f.value==="f"?(v-32)*5/9:v-273.15;
res=t.value==="c"?c:t.value==="f"?c*9/5+32:c+273.15;
}else if(type==="fuel"){
res=f.value==="l100"?235.215/v:235.215/v;
}else{
res=v*maps[type][f.value]/maps[type][t.value];
}
I(r).textContent=`Result: ${format(v)} ${f.value} → ${format(res)} ${t.value}`;
I(r).classList.add("show");
}
["input","change"].forEach(e=>{
I(i).addEventListener(e,c);
I(f).addEventListener(e,c);
I(t).addEventListener(e,c);
});
}

window.onload=()=>{
setup("lenInput","lenFrom","lenTo","lenResult","length");
setup("wInput","wFrom","wTo","wResult","weight");
setup("tInput","tFrom","tTo","tResult","temperature");
setup("vInput","vFrom","vTo","vResult","volume");
setup("aInput","aFrom","aTo","aResult","area");
setup("sInput","sFrom","sTo","sResult","speed");
setup("tiInput","tiFrom","tiTo","tiResult","time");
setup("eInput","eFrom","eTo","eResult","energy");
setup("pInput","pFrom","pTo","pResult","pressure");
setup("fInput","fFrom","fTo","fResult","fuel");
};
