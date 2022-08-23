
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

const enJSON  = JSON.stringify(medicos);


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
                let contenedor = document.getElementById("TurneroOnline");
                    contenedor.innerHTML= "<h2>No tenemos esa especialidad en esta clinica!</h2>";
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

    function sosCliente() { 
        let cliente =prompt("Sos cliente?").toLowerCase();
        function sosCliente() {
     if (cliente == "si"){
                for (let i = 0; i < localStorage.length; i++) {
                    let clave = localStorage.key(i);
                    console.log("Clave: "+ clave);
                    console.log("Valor: "+ localStorage.getItem(clave));
                }

                    let contenedor = document.getElementById("VerificarCliente");
                    contenedor.innerHTML= "<h2> GENIAL , cuentas con todos nuestro beneficios! VAS A ESPERAR MENOS TIEMPO PARA TU CONSULTA </h2>";
             

    
     }else{
                    let contenedor = document.getElementById("VerificarCliente")               
    
                    contenedor.innerHTML= "<h2>te recomendamos sacar nuestra credencial! tenes el link en nuestra pagina principal </h2>";
    
            }

    
    
            sosCliente();

        }
    }
}


// Storage
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("todosLosMedicos", JSON.stringify(medicos));



localStorage.setItem(`1`,`Franco Luzi`);
localStorage.setItem(`2`,`Valentina Moyano`);
localStorage.setItem(`3`,`Alfredo Lopez`);
localStorage.setItem(`4`,`Matias Morelli`);
localStorage.setItem(`5`,`Francisco Theiler`);
localStorage.setItem(`6`,`Tomas Bergero`);





