
let cardiologia = "mariano bischoff";
let neurologo = "maricel liendo";
let dermatologo= "lara bischoff";
let traumatologo= "julian bischoff";
let ingresarNombre=prompt("Ingresar Nombre y Apellido");
let cliente =prompt("Sos cliente?");


function sosCliente(){
    if ((cliente = "si") || (cliente = "Si")) {
    
    alert("GENIAL , cuentas con todos nuestro beneficios! VAS A ESPERAR MENOS TIEMPO PARA TU CONSULTA");
    
    }else{
    
    alert("te recomendamos sacar nuestra credencial! tenes el link en nuestra pagina principal");
    
    }

}

sosCliente()


function aplicarDescuentosEnBar(){

let descuentoEnBar= 10%

console.log("Por ser Cliente tienes un "+ "" + descuentoEnBar + " "+ "de DESCUENTO!");

}

function asociados() {

    let cualMedico=prompt("Que especialista quiere ver?");

    for (let i=1; i < 3; i++) {

    if ((cualMedico === "cardiologia") || (cualMedico === "Cardiologia")) {
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+cardiologia);
    }
    else if ((cualMedico === "neurologo") || (cualMedico === "Neurologo")){
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+neurologo);
    }
    else if ((cualMedico === "dermatologo") || (cualMedico === "Dermatologo")){
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+ dermatologo);
    }
    else if ((cualMedico === "traumatologo") || (cualMedico === "Traumatologo")){
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+dermatologo);
    }
    else{
        alert("No tenemos esa especialidad en esta CLINICA , Mil disculpas");        
    }
    }
}

 asociados()