/* Modifier le code ci dessous pour réaliser l'exercice */

let x = 2;
let y = 2;

if (x === y) {
    x++;
    x++;
    x++;
}

if( x === y) {
    document.getElementById('monDiv').innerHTML = "La variable x est strictement égale à la variable y";
}

else{
    document.getElementById('monDiv').innerHTML = "La variable x n'est pas strictement égale à la variable y";
}

console.log(x);

