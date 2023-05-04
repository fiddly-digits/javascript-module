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


// * map
// * Itera en los elementos de un array aplica una funcion callback de transformacion a cada elemento y luego devuelve cada elemento transformado dentro de un nuevo array. El array resultante siempre tendra la misma cantidad de elementos que el array original.

let mentors = [
    {
        name: "Israel",
        lastname:"Salinas"
    },
    {
        name: "Charles",
        lastname:"Silva"
    }
]

const mapMentors = (mentorsArray) =>  { 
    let result = mentorsArray.map((item) => `${item.name} ${item.lastname}`) 
    return result
}

console.log(mapMentors(mentors))

let people = [
    {
        name:"Israel",
        lastname:"Salinas Martínez"
    },
    {
        name:"Ariana Naomi",
        lastname:"Lopez Puertos"
    },
    {
        name:"Maydeli Berenice",
        lastname:"Sanchez Loera"
    }
]

const getPeopleInitials = (peopleArray) => {
    let initialsArray = peopleArray.map( (item) => {
        let splittedName = item.name.split(" ")
        let splittedLastName = item.lastname.split(" ")
        let initialsName = splittedName.map((item) => `${item.charAt(0).toUpperCase()}`)
        let initialsLastName = splittedLastName.map((item) => `${item.charAt(0).toUpperCase()}`)
        let fullNameInitials = initialsName.concat(initialsLastName)
        return fullNameInitials.join(". ") + "."
    })
    return initialsArray
}

let procesedPeople = getPeopleInitials(people)
console.log(procesedPeople)

//Israel|[Israel]|["I"]|

// [ 'A', 'N', 'L', 'P' ]
// A.N.L.P

//lista += item + "."

/* Dado un array de autos, (el descuento dentro del array es en porcentaje) necesitamos una lista con el nombre y precio final despues del descuento aplicado */

let cars = [
    {
        name:"Sentra",
        year:2023,
        price:380000,
        discount:15
    },
    {
        name:"Toledo",
        year:2023,
        price:375000,
        discount:10
    },
    {
        name:"Versa",
        year:2023,
        price:330000,
        discount:20
    },
]

const getCarDiscountPrice = (carsArray) => {
    let {name, price, discount} = carsArray
    let carPercentage = discount * .01 
    let discountQty = carPercentage * price
    let finalPrice = price - discountQty
    return [name, finalPrice]
}

console.log(cars.map(getCarDiscountPrice))