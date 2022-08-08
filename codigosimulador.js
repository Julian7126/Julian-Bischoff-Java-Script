const medicos=[
    {       
        nombre:"Mariano Bischoff",
        Especialidad:"cardiologia",
        edad:58,
        Titulo:"Hospital Cardiologico"
    },


    {
        nombre:"Maricel Liendo",
        Especialidad:"neurologia",
        edad:46,
        Titulo:"UNC"

    },


    {
        nombre:"Lara Bischoff",
        Especialidad:"nermatologia",
        edad:31,
        Titulo:"UNC"


    },

    {
        nombre:"Julian Bischoff",
        Especialidad:"traumatologo",
        edad:38,
        Titulo:"Hospital Privado"


    },

];

medicos.push({
    nombre:"Sol Pucheta",
    Especialidad:"psiquiatria",
    edad:34,
    Titulo:"UNC"


});

for(const medico of medicos){
    console.log("Nombre del Medico:"+"\n"+medico.nombre +"\n"+" Especialidad"+"\n"+ medico.Especialidad);


}


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
        const resultado = medicos.find(medico => medico.Especialidad === cualMedico);
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+""+"va a ser asistido por"+""+ resultado);
    }
    else if ((cualMedico === "neurologo") || (cualMedico === "Neurologo")){
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+""+"va a ser asistido por"+""+medicos.find(medico => medico.Especialidad));
    }
    else if ((cualMedico === "dermatologo") || (cualMedico === "Dermatologo")){
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+""+"va a ser asistido por"+""+ medicos.find(medico => medico.Especialidad));
    }
    else if ((cualMedico === "traumatologo") || (cualMedico === "Traumatologo")){
        alert(" Turno N° "+i+" Nombre: "+ingresarNombre+""+"va a ser asistido por"+""+medicos.find(medico => medico.Especialidad));
    }
    else{
        alert("No tenemos esa especialidad en esta CLINICA , Mil disculpas");        
    }
    }
}

 asociados()