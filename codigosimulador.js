class Medico{
    constructor(nombre, especialidad, edad, Titulo) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.edad = edad;
        this.Titulo = Titulo;
    }
}
const medicos = [];//array de medicos
medicos.push(new Medico("Mariano Bischoff","cardiologia", 58, "Hospital Cardiologico"));
medicos.push(new Medico("Maricel Liendo","neurologia" , 46, "UNC"));
medicos.push(new Medico("Lara Bischoff", "dermatologia" , 32, "UNC"));
medicos.push(new Medico("Julian Bischoff","traumatologo", 38, "Hospital Privado"));
medicos.push(new Medico("Sol Pucheta","psiquiatria", 35, "UNC"));
console.table(medicos);



for(const med of medicos){
    console.log("Nombre del Medico:"+"\n"+ medicos.nombre +"\n"+" Especialidad"+"\n"+ medicos.Especialidad);


}

let ingresarNombre=prompt("Ingresar Nombre y Apellido");
let cliente =prompt("Sos cliente?").toLowerCase();

function sosCliente(){
    if (cliente = "si") {
    
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



function buscarMedico(nombre,especialidad){
   
    const encontrado=medicos.find((med)=>med.especialidad === medicos);
}


 for(let i=0;i<2;i++){
        let especialidad=prompt("Que especialista quieres ver?").toLocaleLowerCase();//especialidad queda en minuscula si o si
        const medEncontrado = buscarMedico(medicos.especialidad);
        if(medEncontrado==undefined){
           alert("No tenemos esa especialidad en esta clinica!")
        }else{
            alert(" Turno N° "+i+" Nombre: "+ingresarNombre+""+"va a ser asistido por"+""+ medEncontrado);
        }
 }

