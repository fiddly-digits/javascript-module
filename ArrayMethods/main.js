let arr1 = ["perro", "gato", "iguana"]
let arr2 = ["guepardo", "leon", "tigre"]

arr1.push("lagarto")

console.log(arr1)

let concatenatedArrays = arr1.concat(arr2)

console.log(concatenatedArrays)

concatenatedArrays.shift()

console.log(concatenatedArrays)

concatenatedArrays.pop()

console.log(concatenatedArrays)

concatenatedArrays.splice(3, 1, "Elefante", "pinguino")

console.log(concatenatedArrays)

concatenatedArrays.fill("araña", 2, 8)

console.log(concatenatedArrays)

let emptyArray = new Array(10)

emptyArray.fill("araña", 2, 8)

console.log(emptyArray)


let numbersArray = [1, 5, 3, 6, 2]

console.log(numbersArray.sort((a, b) => a - b))


let mentors = [
    ["Naomi", "López"],
    ["Israel", "Salinas"],
    ["Charles", "Silva"],
    ["Rose", "Ortega"],
];

let koders = [
    {
      name: "Verónica Cruz",
      scores: {
        html: 10,
        css: 9.2,
        js: 9.7,
        bootstrap: 8,
      },
      isGraduated: true,
    },
    {
      name: "Miguel Aceves",
      scores: {
        html: 8.7,
        css: 10,
        js: 8.3,
        bootstrap: 9.8,
      },
      isGraduated: false,
    },
    {
      name: "Antonio Cano",
      scores: {
        html: 9.2,
        css: 10,
        js: 10,
        bootstrap: 6.5,
      },
      isGraduated: false,
    },
  ];


  /*
      1.- Necesito una lista que contenga los nombres completos de los mentores ordenados alfabéticamente
      2.- Necesito una lista con los nombres y promedios generales de todos los koders
      3.- Necesito una lista con los nombres de aquellos koders que aún no se han graduado
      4.- Necesito conocer el promedio grupal de cada materia impartida en el bootcamp
          html -> 9
          css -> 10
      5.- Necesito saber cúal es el koder con el promedio más alto y cúal el que tiene el promedio más bajo
*/

/**
 * * Ejercicio 1
 * * Recibe un arreglo de mentores como parametro.
 * * Dentro de la funcion crea un arreglo de nombres completos de mentores
 * * Este ejecuta un for desde 0, con el limite del tamaño del array, con un aumento de 1
 * * Se crea una nueva variable para almacenar el nombre completo del mentor iterando el array del mentor, asumiendo que es solamente nombre y apellido (2 indices)
 * * Se hace Push al arreglo de nombres completos que creamos anteriormente, la variable que creamos en el paso anterior y salimos del loop
 * * Regresamos el arreglo de nombres completos de los mentores, en el mismo return usamos el metodo sort para dejarlos en orden alfabetico
 */


const getMentorsFullNames = (mentorsArray) => {
  let mentorsFullnames = []
  for (let i = 0; i < mentorsArray.length; i++) {
      let mentorsName = mentorsArray[i][0] +" "+ mentorsArray[i][1]
      mentorsFullnames.push(mentorsName)
  } 
  return mentorsFullnames.sort()
}

console.log(getMentorsFullNames(mentors))

/**
 * * Ejercicio 2
 * * Recibe un arreglo de koders como parametro.
 * * Dentro de la funcion crea un arreglo que recibira una lista de un koder y su promedio
 * * Este ejecuta un for desde 0, con el limite del tamaño del array, con un aumento de 1
 * * Dentro del for, creamos una variable para guardar el nombre del koder y una para sumar las calificaciones obtenidas del koder (Al ser un objeto se ingresa con la notacion punto a los contenidos de cada koder)
 * * tambien dentro del for, dividimos la variable para sumar las calificaciones obtenidas del koder entre 4
 * * Hacemos push de una lista con el [nombre, promedio] al arreglo que creamos fuera del for.
 * * Regresamos el arreglo de koders y promedios
 */

const getKodersAndGrades = (kodersArray) => {
  let kodersAndGrades = []
  for (let i = 0; i < koders.length; i++) {
      let koderName = koders[i].name
      let koderScores = koders[i].scores.html + koders[i].scores.css + koders[i].scores.js + koders[i].scores.bootstrap;
      let koderAverage = koderScores / 4
      kodersAndGrades.push([koderName, koderAverage])
  }
  return kodersAndGrades
}


console.log(getKodersAndGrades(koders))


/**
 * * Ejercicio 3
 * * Recibe un arreglo de koders como parametro.
 * * crea un arreglo donde almacenaremos a los koders que no se han graduado
 * * Este ejecuta un for desde 0, con el limite del tamaño del array, con un aumento de 1
 * * Comparamos si la propiedad del koder "isGraduated" es verdadera o falsa y lo negamos con el operador ! para evitar usar el else
 * * De esta manera hacemos push a todos los nombres de los koders que no esten graduados al arreglo ungraduatedKoders
 * * Y por ultimo egresamos el arreglo
 */

const  getGraduatedKoders = (kodersArray) => {
  let ungraduatedKoders = []
  for (let i = 0; i < kodersArray.length; i++) {
    if (!kodersArray[i].isGraduated) {
      ungraduatedKoders.push(kodersArray[i].name)
    }
  }
  return ungraduatedKoders
}

console.log(getGraduatedKoders(koders));


/**
 * * Ejercicio 4
 * * Recibe un arreglo de koders como parametro.
 * * creamos las variables correspondientes para poder usar suma acomulada en ellos.
 * * Este ejecuta un for desde 0, con el limite del tamaño del array, con un aumento de 1
 * * En las variables que usamos anteriormente hacemos la suma acomulada de cada calificacion en cada materia de cada Koder con ayuda del for y la notacion punto.
 * * Y por ultimo regresamos una template string la que aprovechamos para hacer una division entre la suma de las calificaciones de cada materia obtenida anteriormente y la cantidad de koders en el primer arreglo.
 */

const getSubjectAverage = (kodersArray) => {
  let html = 0
  let css = 0
  let js = 0
  let bootstrap = 0
  for (let i = 0; i < kodersArray.length; i++) {
    html += kodersArray[i].scores.html
    css += kodersArray[i].scores.css
    js += kodersArray[i].scores.js
    bootstrap += kodersArray[i].scores.bootstrap
  }
  return `El promedio de html es: ${html/kodersArray.length}\nEl promedio de css es: ${css/kodersArray.length}\nEl promedio de js es: ${js/kodersArray.length}\nEl promedio de bootstrap es: ${bootstrap/kodersArray.length}`
} 

console.log(getSubjectAverage(koders));

/**
 * * Ejercicio 5
 * * Recibe un arreglo de koders como parametro.
 * * Dentro de la funcion crea un arreglo que recibira un objeto
 * * Este ejecuta un for desde 0, con el limite del tamaño del array, con un aumento de 1
 * * Dentro del for, creamos una variable para guardar el nombre del koder y una para sumar las calificaciones obtenidas del koder (Al ser un objeto se ingresa con la notacion punto a los contenidos de cada koder)
 * * tambien dentro del for, dividimos la variable para sumar las calificaciones obtenidas del koder entre 4
 * * Hacemos push de un objeto con el {nombre, promedio} al arreglo que creamos fuera del for.
 * * Hacemos el sort del arreglo, usando la funcion de comparacion con base en el promedio de los objetos creados en el push anterior
 * * y regresamos una template string teniendo en cuenta que el koder con mayor promedio sera el ultimo y el menor el primero (para saber cual es el ultimo usamos el length y le restamos uno, ya que length nos regresa la cantidad total desde 1 y los indices inician en 0.)
 */

const highestAndLowestAvgKoder = (kodersArray) => {
  let kodersAverages = []
  for (let i = 0; i < koders.length; i++) {
    let koderName = koders[i].name
    let koderScores = koders[i].scores.html + koders[i].scores.css + koders[i].scores.js + koders[i].scores.bootstrap;
    let koderAverage = koderScores / 4
    kodersAverages.push({koderName, koderAverage})
  }
  kodersAverages.sort((a, b) => a.koderAverage - b.koderAverage)
  return `El Koder con el promedio mas alto es ${kodersAverages[kodersAverages.length-1].koderName}\nEl Koder con el promedio mas bajo es ${kodersAverages[0].koderName}`
}

console.log(highestAndLowestAvgKoder(koders));