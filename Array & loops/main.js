
// const listNameAndPrice = (productList) => {
//     for (const key in productList) {
//         let name = productList[key].name
//         let price = productList[key].price
//         console.log(`El producto ${name} y su precio es de ${price} peso`)
//         //return `El producto ${name} y su precio es de ${price} peso`
//     }
// }

// products = [
//     {
//         name: "cake topper",
//         price: 30
//     },
//     {
//         name: "taza",
//         price: 20
//     },
//     {
//         name: "caja",
//         price: 37.5
//     }
// ]

// console.log(listNameAndPrice(products))



/*
    1. Necesitamos saber la cantidad de letras que tiene los nombres de la lista de nombres
    2. Necesito saber el nombre completo de cada personaje en la lista
    3. Necesito saber el nombre, precio y precio final de cada uno de los productos que tengo en mi lista de productos
*/

let names = [
    "Israel",
    "Charles",
    "David",
    "Naomi"
]
let lastnames = [
    "Salinas Martínez",
    "Silva",
    "Cermeño Moranchel",
    "López Puertos"
]
let products = [
{
    name: "Cake topper",
    price: 150,
    discount:10,
},
{
    name: "taza",
    price: 750,
    discount:5,
},
{
    name: "caja",
    price: 370.5,
    discount:15,
},
];

const lengthNames = (firstNames) => firstNames.length
const appendNamesLastNames = (firstNames, lastNames) => `${firstNames} ${lastNames}`

for (let i=0; i < names.length; i++) {
    let getLength = lengthNames (names[i])
    let fullName = appendNamesLastNames(names[i], lastnames[i])
    //let fullName = `${names[i]} ${lastnames[i]}`
    console.log (getLength +"\n" +fullName) 
}

const namePrice = (products) => {
    let productName = products.name
    let discount = (products.discount * 0.01) * products.price
    let discountPrice = products.price - discount
    return `El nombre del producto es: ${productName}\nEl precio original es: ${products.price}\nEl precio del producto con descuento es: ${discountPrice} `
}

for (let i=0; i < products.length; i++) {
    let getNamePrice = namePrice (products[i])
    console.log (getNamePrice)
}

/*
Necesito poder ver palabra por palabra cada una de las palabras que conforman cualquier frase
*/

let phrase = "La mejor forma de predecir el futuro es creandolo"
let motto = "if you gotta be dumb you gotta be tough"

const turnPhraseToWords = (phrase) =>  phrase.split(" ")

let splitedPhrase = turnPhraseToWords(motto);

for (let i = 0; i < splitedPhrase.length; i++) {
    console.log(splitedPhrase[i])
}

/*
    Que son los array, y como iterar con for.

    Metodos de array
*/