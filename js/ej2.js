

let nombre
let nom2= ''
do {
    nombre = prompt("Ingrese un nombre:");
    if (nombre != "Voldemort") {
         nom2+= nombre + "\n";
    }


} while (nombre != "Voldemort");

alert(nom2)