// * forEach
// * Itera dentro de un array y ejecuta una funcion (callback) por cada elemento del array iterado y no devuelve ningun valor.

let names = [
    "Damian Tapia",
    "Laura Valle",
    "Rob Cruz"
]

names.forEach( (nameToPrint) => console.log(nameToPrint) )


const uppercaseNames = (namesArray) => {
    let uppercased = []
    names.forEach( name => uppercased.push(name.toUpperCase()))
    console.log(uppercased)
}

uppercaseNames(names)

/* Dado un array necesito saber cuales de estos numeros son pares o impares */
let numbers = [45, 8, 26, 21, 45, 78, 3]

numbers.forEach((item) => (item % 2 === 0) ? console.log(`${item} es par`) : console.log(`${item} es impar`) )
