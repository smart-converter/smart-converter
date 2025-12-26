document.addEventListener("DOMContentLoaded",()=>{
const burger=document.getElementById("burger");
const footer=document.getElementById("footerMenu");
const menu=document.getElementById("sideMenu");
const overlay=document.getElementById("overlay");

function openMenu(){
menu.classList.add("open");
overlay.classList.add("show");
}
function closeMenu(){
menu.classList.remove("open");
overlay.classList.remove("show");
}

burger.onclick=openMenu;
footer.onclick=openMenu;
overlay.onclick=closeMenu;
document.querySelectorAll("#sideMenu a").forEach(a=>a.onclick=closeMenu);

function lin(i,f,t,r){
const v=parseFloat(i.value);
if(isNaN(v)){r.textContent="";return}
r.textContent=(v*f.value/t.value).toFixed(3);
}

lenInput.oninput=()=>lin(lenInput,lenFrom,lenTo,lenResult);
wInput.oninput=()=>lin(wInput,wFrom,wTo,wResult);
sInput.oninput=()=>lin(sInput,sFrom,sTo,sResult);
vInput.oninput=()=>lin(vInput,vFrom,vTo,vResult);
aInput.oninput=()=>lin(aInput,aFrom,aTo,aResult);
timeInput.oninput=()=>lin(timeInput,timeFrom,timeTo,timeResult);
eInput.oninput=()=>lin(eInput,eFrom,eTo,eResult);
pInput.oninput=()=>lin(pInput,pFrom,pTo,pResult);

tInput.oninput=()=>{
const v=parseFloat(tInput.value);
if(isNaN(v)){tResult.textContent="";return}
let c=tFrom.value==="c"?v:(v-32)*5/9;
let r=tTo.value==="c"?c:c*9/5+32;
tResult.textContent=r.toFixed(2);
}

fInput.oninput=()=>{
const v=parseFloat(fInput.value);
if(isNaN(v)){fResult.textContent="";return}
let r=fFrom.value==="l100"?235.215/v:235.215/v;
fResult.textContent=r.toFixed(2);
}
});
