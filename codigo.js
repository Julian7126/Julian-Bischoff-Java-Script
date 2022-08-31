
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


// Funcion para buscar especialista en la class (array)- 

let botonUsuario= document.getElementById("ingresarUsuario");
ingresarUsuario.onClick=()=>{
  Swal.fire({
      title: 'Formulario de Login!',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Ingresar',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Ingresar Usuario y Contrasaseña`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
        Login: ${result.value.login}
        Password: ${result.value.password}
      `.trim())
    });
}      







// ACA EMPIEZA TURNERO
  


function buscarMedico() {

   const encontrado = medicos.filter(med => {
      if(med.especialidad == 'cardiologia') {
        console.log('hola')
      } 
   })

}

  


//  Div inyectado con dom , no funciona
let contenedor = document.getElementById("personal");
contenedor.innerHTML= "<h2> Nuestro Medicos </h2> <p> Podras ver aqui a los especialistas a elegir</p>";


// article inyectado con dom , no funciona

let campoMedicos = document.getElementById("contadorMedicos");
let campoEspecialidad = document.getElementById("contadorEspecialidad");

campoMedicos.value ="5";
campoEspecialidad="5";


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
             let especialidad =prompt("Que especialista quieres ver?").toLowerCase();
             const medEncontrado = buscarMedico();
  
             if(medEncontrado == undefined){
              // let contenedor = document.getElementById("TurneroOnline");
              Swal.fire('No tenemos esa especialidad en este Sanatorio!');
             }else{
              Swal.fire(" Turno N° "+i+" Nombre: "+""+"va a ser asistido por"+""+ medEncontrado);
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
      
   if (cliente == "si"){
              for (let i = 0; i < localStorage.length; i++) 
              
                                          {
                                              let clave = localStorage.key(i);
                                              console.log("Clave: "+ clave);
                                              console.log("Valor: "+ localStorage.getItem(clave));
                                          }

                  let contenedor = document.getElementById("VerificarCliente");
                  contenedor.innerHTML= "<h2> GENIAL , cuentas con todos nuestro beneficios! VAS A ESPERAR MENOS TIEMPO PARA TU CONSULTA </h2>";
           }else{
      Swal.fire({
          title: '<strong>A sacar nuestra Credit! </strong>',
          icon: 'info',
          html:
            'You can use <b>bold text</b>, ' +
            '<a href="http://127.0.0.1:5500/index.html">links</a> ',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
          cancelButtonAriaLabel: 'Thumbs down'
           });
          }

      }
      sosCliente();
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





