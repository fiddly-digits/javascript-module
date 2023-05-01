//* Tipos de Variable
let ratio = 10 //variables
const PI = 3.14 //constantes

//* Tipos de dato

// number (no hay enteros, ni flotantes, solo existe number)
// string (no existe char, si es solo 1 caracter lo toma como string, puede ser en comilla doble o sencilla)
// boolean
/* object {
    properties
    methods
    }*/
// Array [ ] (cosas semanticamente similares)
// funciones {---} bloques de instrucciones reutilizables

//* Operadores aritmeticos
// suma +
// resta -
// multiplicacion *
// division /
// modulo %
// asignacion =
// asignacion aditiva +=
// asignacion sustractiva -=
// asignacion multiplicativa *=
// asignacion divisiva /=
// asignacion modular %=
// decremento --
// incremento ++

//* Operadores de comparacion

// mayor que >
// menor que <
// igual que (evaluacion de valor) ==
// identico que (evaluacion de identidad y valor) ===
// diferente de !=
// mayor o igual que >=
// menor o igual que <=

//* Operadores logicos

// and A && B regresan un booleano, solo si A y B son verdaderos
// or A || B regresan verdadero o falso si al menos una se condicion se cumple
// not(!) !A 

//* Condicionales
// if( condicion ) {.. hace algo }
// ternario condicion ? que hace si se cumple : que hace si no se cumple


/* 
    1.- Escribir el codigo que me muestre el area de un circulo cuyo radio es igual a 15
    2.- Escribir el codigo que me indique si el area de mi circulo es mayor a 10
    3.- Escribir el codigo que me permita juntar las palabras "Somos" y "Koders" en un solo string
*/

let radio = 15
let resultado = PI * (radio * radio )
console.log("El resultado es: ", resultado)

if(resultado > 10){
    console.log("El resultado es mayor a 10")
}

let first = "Somos"
let second = "Koders"
let togetherString = first + " " + second

console.log(togetherString)


