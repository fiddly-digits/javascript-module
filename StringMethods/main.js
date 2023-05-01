let str = "cAmELLo"

console.log(str)

const capitalizeWord = (wordToCapitalize) => `${wordToCapitalize.substring(0, 1).toUpperCase()}${wordToCapitalize.substring(1).toLowerCase()}`

 /*
 * Podemos reducir con la notacion flecha lo mas posible
const capitalizeWord = (wordToCapitalize) => {
    let substr1 = wordToCapitalize.substring(0,1).toUpperCase()
    let substr2 = wordToCapitalize.substring(1).toLowerCase()
    return substr1.concat(substr2)
}
*/

console.log(capitalizeWord(str))
console.log(capitalizeWord("peRRiTo"))


/*
    1. Necesito las iniciales de cualquier nombre completo (Nombre, Apellido Materno, y Apellido Paterno) -> R. C. L.
    2. Necesito evaluar que los nombres de mis productos sean faciles de recordar
        -Los productos cuyo nombre tiene menos de 5 letras son fáciles
        -Los demas son dificiles
    3. Si la palabra es impar, lo divide y quita la letra de enmedio y sino solo la divide
        - Si mi entrada es anglosajon
        - Salida: anglo
                  sajon
        - Entrada: Entrada
        - Salida: Ent
                  ada
*/

// !  Necesito las iniciales de cualquier nombre completo (Nombre, Apellido Materno, y Apellido Paterno)

const nameToInitials = (name, fathersName, mothersName) => `${name.substring(0, 1)}. ${fathersName.substring(0, 1)}. ${mothersName.substring(0, 1)}.`

let primerNombre = "Roberto"
let apellidoPaterno = "Cruz"
let apellidoMaterno = "Luna"

let initials = nameToInitials(primerNombre, apellidoPaterno, apellidoMaterno)

console.log(initials)

// let nombres = "Roberto Daniel"
// let apellidos = "Cruz Luna"

// const namesToInitial = (firstnames, lastnames) => {
//     fullNames = firstnames.split(" ").concat(lastnames.split(" "))
//     let initials = ""

//     for (element in fullNames) {
//         initials += `${fullNames[element].substring(0, 1)}. `
//     }
//     return initials
// }

// console.log(namesToInitial(nombres, apellidos))

// ! Necesito evaluar que los nombres de mis productos sean faciles de recordar

let ipad = {
    name: "iPad"
}

let panditas = {
    name: "Panditas"
}

const isEasyToRemember = (product) => (product.name.length < 5) ? "El nombre del producto es facil de recordar" : "El producto es dificil de recordar"

let brandingChecker1 = isEasyToRemember(ipad)
let brandingChecker2 = isEasyToRemember(panditas)

console.log(brandingChecker1)
console.log(brandingChecker2)


// ! Si la palabra es impar, lo divide y quita la letra de enmedio y sino solo la divide

let strOne = "anglosajon"
let strTwo = "Entrada"
let strThree = "Salida"
let strFour = "Salinas"
let strFive = "Roberto"
let strSix = "Astrid"

const strSplitter = (string) => (string.length % 2) ? `${string.slice(0, (string.length)/ 2)}\n${string.slice((string.length+1)/ 2, string.length)}` : `${string.slice(0, (string.length+1)/ 2)}\n${string.slice((string.length+1)/ 2, string.length)}`

console.log(strSplitter(strOne))
console.log(strSplitter(strTwo))
console.log(strSplitter(strThree))
console.log(strSplitter(strFour))
console.log(strSplitter(strFive))
console.log(strSplitter(strSix))





































