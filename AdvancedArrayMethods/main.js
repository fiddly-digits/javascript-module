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

let carsFinalPrice = cars.map(getCarDiscountPrice)
console.log(carsFinalPrice)

// .filter()
// * El metodo filter itera en el array, aplica una condicion a cada elemento y devuelve un nuevo array con aquellos elementos que cumplan con la condicion proporcionada. Si ningun elemento cumple con la condicion, devuelve un array vacio.

let numbersFilter = [8, 4, 6, 2, 3, 4]

const getEvens = (numbersArray) =>  {
    let result = numbersArray.filter( (item) => item % 2 === 0 )
    return result
}

let evensArray  = getEvens(numbersFilter)
console.log(evensArray);

// * .reduce()
// * Itera en los elementos de un array y a cada elemento le aplica lo que llamamos una "funcion reductora" esta funcion procesa los elementos y los agrega a algo que llamaremos acumulador. El acumulador sera el resultado final de mi reduccion y puede ser de cualquier tipo de dato y cualquier valor.
// ! reduce callback (acomulador, current, index, array)
// ! Acumulador el lugar donde almacenamos el resultado | Current el elemento en cada iteracion (como item) | index el indice de cada elemento | Array el array original

let numbersRed = [25, 12, 85, 78, 10]

const addNumbers = (numbersArray) => {
    let result = numbersArray.reduce( (accum, current) => {
        return accum + current
    }, 0)
    return result
}

let result = addNumbers(numbersRed)
console.log(result)

//! ... operador de propagacion -> funciona con arrays y objetos

let namesRed = ["Roberto Cruz", "Damian Tapia", "Israel Morales", "Mara Villela"]

const getInitials = (namesArray) => {
    let result = namesArray.reduce((accum, current) => {
        let initials = current.split(" "). map((word) => word.charAt(0).toUpperCase()).join(". ") + "."
        return [...accum, initials]
    }, []) 
    return result
}

console.log(getInitials(namesRed))



let songs = [
    {
        name: "Paranoid Android",
        singer: "Radiohead" 
    },
    {
        name: "Let Down",
        singer: "Radiohead" 
    },
    {
        name: "Carousels",
        singer: "Beirut" 
    }
]

let singers = songs.reduce((accum, current) =>  !accum.includes(current.singer) ? [...accum, current.singer] : [...accum] , [])

console.log(singers);
