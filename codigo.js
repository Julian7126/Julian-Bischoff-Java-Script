
class Medico{
    constructor(nombre, especialidad, edad, titulo) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.edad = edad;
        this.titulo = titulo;
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
// Aplicador de descuentos para el futurp

// function aplicarDescuentosEnBar(){

// let descuentoEnBar= 10%

// alert("Por ser Cliente tienes un "+ "" + descuentoEnBar + ""+ "de DESCUENTO!");

// }

// aplicarDescuentosEnBar();


// Funcion para buscar especialista en la class (array)- 
function buscarMedico(medicos,especialidad){
   
    const encontrado=medicos.find((med)=>med.especialidad === especialidad);
    return especialidadEncontrada;
}



//  Div inyectado con dom , no funciona
let contenedor = document.getElementById("personal");
contenedor.innerHTML= "<h2> Nuestro Medicos </h2> <p> Podras ver aqui a los especialistas a elegir</p>";


// article inyectado con dom , no funciona

let campoMedicos = document.getElementById("contadorMedicos");
let campoEspecialidad = document.getElementById("contadorEspecialidad");

campoMedicos.value ="5";


// Tabla
let tabla=document.createElement("table");
tabla.className="table table-dark table-striped";
let tablaBody=document.createElement("tbody");
for(const meds of medicos){
    tablaBody.innerHTML+=`
        <tr>
            <td>${medicos.nombre}</td>
            <td>${medicos.especialidad}</td>
            <td>${medicos.edad}</td>
            <td>${medicos.titulo}</td>
        </tr>       
    `;
}

tabla.append(tablaBody);
let articuloTable=document.getElementById("table");
articuloTable.append(tabla);




// Eventos 


// boton de turnero Online

let botonTurnero = document.getElementById("buttonTur");
buttonTur.onclick=()=>{
    function asociados (){
        for(let i=0;i<2;i++){
               let especialidad=prompt("Que especialista quieres ver?").toLowerCase();
               const medEncontrado = buscarMedico(especialidadEncontrada);
               if(medEncontrado==undefined){
                  alert("No tenemos esa especialidad en esta clinica!")
               }else{
                   alert(" Turno N° "+i+" Nombre: "+ingresarNombre+""+"va a ser asistido por"+""+ medEncontrado);
               }
        }
       
       }
       
       asociados();      
}

// boton para preguntar si es cliente

let botonCliente = document.getElementById("buttonCli");

buttonCli.onClick=()=>{

    let cliente =prompt("Sos cliente?").toLowerCase();

function sosCliente() {
            if (cliente == "si"){
    
                alert("GENIAL , cuentas con todos nuestro beneficios! VAS A ESPERAR MENOS TIEMPO PARA TU CONSULTA");
    
    
                }else{
    
                alert("te recomendamos sacar nuestra credencial! tenes el link en nuestra pagina principal");
    
                }

                }

sosCliente();

}
