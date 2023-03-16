//para almacenar inofrmacion delcliente que esta realizando la compra
var receptor={
  nombrecompleto:"",
  correoelectronico: "",
  tarjeta:"",
  telefono:"",
  
}
//se almacena los valores para la reservacion 
function generar(){
  receptor.nombrecompleto=document.getElementById("NC").value;
  receptor.correoelectronico=document.getElementById("CE").value;
  receptor.tarjeta=document.getElementById("TC").value;
  receptor.telefono=document.getElementById("TE").value;
  //escuchador para ejecutar la accion de generar los conceptos 
  document.getElementById('generar').addEventListener('click',function(){generarConceptos()});
  //aqui se vera reflejado en el ticket
  localStorage.setItem('NC',JSON.stringify(receptor.nombrecompleto));
  localStorage.setItem('CE',JSON.stringify(receptor.correoelectronico));
  localStorage.setItem('TC',JSON.stringify(receptor.tarjeta));
  localStorage.setItem('TE',JSON.stringify(receptor.telefono));

}
let conceptos=document.getElementById('conceptos').innerHTML;

let generarConceptos=function(){

   let num=document.getElementById("n-conceptos").value;
   if(num>0){
       for(let i=0; i<num;i++){
           conceptos+=estructuraConcepto(i);
       }
       document.getElementById("conceptos").innerHTML=conceptos;
       //mostrar los botones de agregar y generar ticket
       document.getElementById("agregar").classList.add('mostrar-agregar');
       document.getElementById("ticket").classList.add('mostrar-ticket');
       //quitar la funcionalidad de conceptos
       document.getElementById("titulo-conceptos").classList.add=('quitar-titulo-conceptos');
   }
}
function estructuraConcepto(num){
return `<div>
<label>Numero de dias:
<input type="number" name="Numerodias" id="c${num}" value="" onblur="CalcularImporte(${num});"/></label>
<label>Cuantos adultos son:
<input type="number" name:"cuantosadultos"  id="v${num}" value="" step="" onblur="CalcularImporte(${num});" /></label>
<label>Cuantos niños son :
<input type="number" name="cuantosniños"  id="y${num}" value="" step="" onblur="CalcularImporte(${num});" /></label>
<label>cosas a tomar en cuenta:
<input type="text" name="descripcion" placeholder="" /></label>
<label>Importe:
<input type="number" name="importe"  id="i${num}" value="" step=""/></label>
</div>
`;


}

document.getElementById('agregar').addEventListener('click',function(){agregarConcepto()});
document.getElementById('ticket').addEventListener('click',function(){generarTicket()});
let agregarConcepto=function(){
   let totalConceptos=document.getElementsByTagName('cantidad');
   let concepto=document.createElement('div');
   concepto.innerHTML=estructuraConcepto('totalConceptos.length');
   document.getElementById('conceptos').appendChild(concepto);
}

var CalcularImporte=function(x){
document.getElementById('i'+x).value=document.getElementById('c'+x).value*document.getElementById('v'+x).value*document.getElementById('y'+x).value;
calculosAdicionales();
}


let calculosAdicionales=function(){
   let importes=document.getElementsByName('importe');
   let j=
   subtotal=0;
   while(importes.length>j){
   subtotal+=parseFloat(importes[j].value);
   j++

   }
   let iva=subtotal * .16;
   let total=subtotal + iva;
   document.getElementById('subTotal').innerHTML=subtotal;
   document.getElementById('iva').innerHTML=iva;
   document.getElementById('total').innerHTML=total;
   //para mostrarlo en otra pagina 
   localStorage.setItem('subTotal',JSON.stringify(subtotal));
   localStorage.setItem('iva',JSON.stringify(iva));
   localStorage.setItem('total',JSON.stringify(total));

}











