let medicos = cardiologia + neurologo + dermatologo +traumatologo;



let cardiologia = "mariano bischoff";
let neurologo = "maricel liendo";
let dermatologo= "lara bischoff";
let traumatologo= "julian bischoff";


let turnos= 0;

let nuevosUsuarios= 0;






// let cliente =prompt("Sos cliente?");
//     if ((cliente = "si") && (cliente = "Si")) {
//         alert("GENIAL , cuentas con todos nuestro beneficios! VAS A ESPERAR MENOS TIEMPO PARA TU CONSULTA!");
//     }else{
//         alert("te recomendamos sacar nuestra credencial! tenes el link en nuestra pagina principal");

//     }
   
let ingresarNombre=prompt("Nombre y Apellido");

                for (let i = 1; i <= 10 ; i++) {
                    let cualMedico=prompt("Que especialista quiere ver?");
                    if ((cualMedico === "cardiologia") && (cualMedico === "Cardiologia")) {
                    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+cardiologia);
                    }else if ((cualMedico === "neurologo") && (cualMedico === "Neurologo")){
                    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+neurologo); 
                    }else if ((cualMedico === "Dermatologo") && (cualMedico === "Dermatologo")){
                        alert(" Turno  N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+dermatologo);
                    }else if ((cualMedico === "traumatologo") && (cualMedico === "Traumatologo")){
                            alert(" Turno  N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+dermatologo);
                    }else{
                        alert("No tenemos esa especialidad en esta CLINICA , Mil disculpas");

                    }                  
                }
            


