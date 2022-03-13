
let val=20

let meter=" meters "
let liter=" liters "
let kilos=" kilos "
let out1=document.getElementById('lenth')
let out2=document.getElementById('volume')
let out3=document.getElementById('mass')


function lenth()
{
  let feet=val/3.28084
    let result=val*3.28084
    out1.textContent=val+meter+"="+result.toPrecision(4)+" feet "+"||"+val+" feets "+"="+feet.toPrecision(4)+"meters"
}
function volume()
{
  let liters=val*0.2199692
  let galons=val/0.2199692
    out2.textContent=val+"liters ="+liters.toPrecision(4)+" Gallons"+"||"+val+" Gallons "+"="+galons.toPrecision(4)+"liters"
}
function mass()
{
  let kilos=val*2.204623
  let pound=val/2.204623
    out3.textContent=val+"kilos ="+kilos.toPrecision(4)+" pounds"+"||"+val+" pounds "+"="+pound.toPrecision(4)+"kilos"
}
