let ent
let frut= ''
do {
    ent = prompt('Ingrese un numero:')
    if (ent > 4) {
        ent = prompt('Ingrese un numero entre 1 a 4')
    }
    else if (ent == 1) {
        frut += 'Tomate \n' 
    }
     else if (ent == 2) {
         frut += 'Papa \n'
     }
     else if (ent == 3) {
         frut += 'Carne  \n'
     }
     else if (ent == 4) {
         frut += 'Pollo \n'
     } 



} while (ent != 'ESC');

alert(frut)