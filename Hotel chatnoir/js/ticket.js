let conceptos=JSON.parse(localStorage.getItem('ticket'));
let nc=JSON.parse(localStorage.getItem('nc '));
let rfc=JSON.parse(localStorage.getItem('CE'));
let tc=JSON.parse(localStorage.getItem('TC'));
let te=JSON.parse(localStorage.getItem('TE'));
let sub=JSON.parse(localStorage.getItem('subTotal'));
let iva=JSON.parse(localStorage.getItem('iva'));
let total=JSON.parse(localStorage.getItem('total'));


(
    function(){
        let con="";
        for(var i=0; i<conceptos.length;i++){
            con+='<div> <label> Cantidad <div name="Personas" id="cantidad">'+conceptos[i].cantidad+'</div></label><label> Cabaña o acampar <div name="descripcion" id="descripcion"><div></div>'+conceptos[i].descripcion+'</div></label><label> Cabaña o acampar <div name="descripcion1" id="descripcion1"><div></div>'+conceptos[i].descripcion1+'</div></label><label> Cabaña o acampar <div name="descripcion2" id="descripcion2"><div></div>'+conceptos[i].descripcion2+'</div></label><label> DIAS <div name="valorUnitario" id="valorUnitario"><div></div>'+conceptos[i].valorUnitario+'</div></label><label> importe <div name="importe" id="importe"><div></div>'+conceptos[i].importe+'</div></label></div>';
        }
        document.getElementById('conceptos').innerHTML=con;
        document.getElementById('nc').innerHTML="hola"+nc;
        document.getElementById('rfc').innerHTML=rfc;
        document.getElementById('subtotal').innerHTML= sub;
        document.getElementById('iva').innerHTML= iva;
        document.getElementById('total').innerHTML="el total de su compra es: " +total;
    
    }
)();