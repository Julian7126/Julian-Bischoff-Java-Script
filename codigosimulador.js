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

let cualMedico=prompt("Que especialista quiere ver?");
            if (cualMedico = "cardiologia") {
                for (let i = 1; i <= 10 ; i++) {
                    let ingresarNombre = prompt("Ingresar nombre");
                    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre+"va a ser asistido por"+cardiologia);
                }
                
            }


