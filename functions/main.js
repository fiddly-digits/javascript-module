
// let ratio = 15;

//* Funciones convencionales
// Recibe parametros y entrega resultados


function getCircleArea (ratio) {
    const PI = 3.1415;
    let area = PI * (ratio * ratio);
    //console.log("El area es: ", area);
    return area
}

let circle1 = getCircleArea(5)

console.log(circle1)


function getRectangleArea (base, height) {
    let area = base * height;
    return area
}

let rect1 = getRectangleArea(15, 15)

console.log(rect1)


function getPolygonArea(numberOfSides, sideLenght, apothem) {
    let perimeter = numberOfSides * sideLenght
    let area = (perimeter * apothem)/2
    return area
}

let pentagon1 = getPolygonArea(5, 5, 3.44)

console.log(pentagon1)

//* Arrow Functions

// Tienen return implicito

// const ArrowRectangleArea = (base, height) => {
//     let area = base * height;
//     return area;
// }

const ArrowRectangleArea = (base, height) => base * height

let arrowArea = ArrowRectangleArea(3, 8)
console.log(arrowArea)

const isMinor = (num1, num2) => num1 < num2  

console.log(isMinor(5, 3))

/* 
    1. Crear una funcion que me indique si un numero es par 
    2. Crear una funcion que me indique si una persona es mayor o menor de edad
*/

let isPairNumber = (number) => (number % 2) === 0

console.log(isPairNumber(7))
console.log(isPairNumber(4))

let isUnderage = (number) => (number >= 18) ? "Es Mayor de edad" : "Es menor de edad"

console.log(isUnderage(19))
console.log(isUnderage(18))
console.log(isUnderage(15))