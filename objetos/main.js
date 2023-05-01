//* Objects

let mentor = {
    name: 'Israel',
    lastName: 'Salinas',
    age: 33,
    signatures: ['HTML', 'CSS', 'JS', 'BS', 'TW', 'Firebase'],
    greeting: () => {
        console.log("Que Onda")
    },
    greetAKoder: (koderToGreet) => {
        console.log(`Que Onda ${koderToGreet}`)
    },
    bringSomething: () => {
        return "Lo que sea que se me ocurra"
    }
}

//* Template Strings

/*
    1. Crear un objeto de javascript que represente su programa favorito de television
        - Nombre, Genero, Lanzamiento
        - metodo: presentShow
            - Regresar texto con la presentacion del programa.

    2. Crear una funcion que me permita preguntar algo del programa.
        (Nombre, genero o Lanzamiento)
*/

let favoriteShow = {
  name: "True Detective",
  gender: "Thriller",
  release: 2012,
  presentShow: () => {
    console.log(
      `El show ${favoriteShow.name} es del genero ${favoriteShow.gender} que fue lanzada en el año ${favoriteShow.release} En Luisiana, en 1995, dos detectives investigan el atroz asesinato de una joven que fue sometida a un ritual pagano. En el año 2012, unos policías interrogan a estos dos detectives, dado que sospechan que el asesino de 1995 ha regresado.`
    );
  }
};

favoriteShow.presentShow();

let askQuestionsAboutShow = "name"

const getShowData = (tvShow, askQuestionsAboutShow) => {    
    switch (askQuestionsAboutShow) {
        case "name":
          return tvShow.name;
        case "gender":
          return tvShow.gender;
        case "release":
          return tvShow.release;
        default:
          return "Eso no se encuentra en caracteristicas del show";
      }
}

let showName = getShowData(favoriteShow, "name")
console.log(showName)


/*
    ! Tarea
    1. Necesito saber si un producto cualquiera esta fresco o ya caduco
    2. Necesito que un auto me muestre su descripcion
    3. Necesito saber los años que han pasado desde el lanzamiento de un disco
*/

/* 
* Definicion del Problema 
     Necesito saber si un producto cualquiera esta fresco o ya caduco
* Analisis del Problema
     Se necesita saber si cualquier producto con x fecha de caducidad, y si supera o iguala esa fecha el producto esta vencido, sino aun esta fresco.
* Definicion de herramientas
    1. Javascript - Funcion Flecha - metodo hasOwnProperty - Obj Date - Condicional IF
    2. Javascript - Funcion Flecha - metodo hasOwnProperty - Obj Date - Operador Ternario
    3. Javascript - Funcion Flecha - metodo hasOwnProperty - Obj Date - Switch
* Analisis de Herramientas
    Es necesario usar Javascript ya que es la herramienta central que estamos intentando aprender en este momento.
    Una funcion nos sirve para evaluar cualquier tipo de objeto, volviendolo reutilizable.
    El Evaluar con el metodo hasOwnProperty nos permite descartar productos no perecederos.
    El objeto date nos permite definir una fecha comparable a nuestro objeto con su metodo getTime, ya que nos da los milisegundos desde 1970.
    Condicional If, sirve para lo que queremos hacer, pero es poco facil de modificar si queremos agregar o quitar algo.
    El Operador ternario es concreto, tambien sirve, pero el codigo seria muy poco legible ya que tendriamos que anidar dos operadores ternarios.
    Switch, funciona, es facil de modificar si queremos agregar o quitar algo, y es legible.
* Definicion de Soluciones
    1. 
        Pro: Nos permitiria agregar las 2 condiciones principales, mas un else en caso de que el producto no sea un producto perecedero.
        Con: Usariamos mas lineas de codigo.
    2. 
        Pro: Nos permitiria agregar las 2 condiciones principales, en una sola linea de codigo
        Con: No podriamos obtener solo con el operador alguna informacion extra si el producto no es perecedero.
    3. 
        Pro: Nos permitiria agregar las 2 condiciones principales, mas un default en caso de que el producto no sea un producto perecedero.
        Con: Usariamos mas lineas de codigo pero el codigo es mas facilmente modificable en caso de agregar mas condiciones en un futuro.
* Analisis de Soluciones
    Me parece que la mas optima por la legibilidad seria usar el ternario con la condicion si el producto esta vencido o no, dentro de un condicional if para delimitar los productos no perecederos.
*/

let oldProduct = {
    expirationDate: new Date(2006, 10, 17)
};

let newProduct = {
    expirationDate: new Date(2027, 11, 17)
};

let todayExpiringProduct = {
    expirationDate: new Date(2023, 03, 25)
};

let notPerishableProduct = {
};

// let isExpired = (product) => (product.hasOwnProperty('expirationDate')) ? (product.expirationDate > Date()) ? "El Producto esta fresco" : `El producto caduco en ${product.expirationDate}` : "El producto no es perecedero"

let isExpired = (product) => {
    if (product.hasOwnProperty('expirationDate')) {
        let currentDate = new Date();
        return (product.expirationDate.getTime() > currentDate.getTime()) ? 
                `El Producto esta fresco vence el ${product.expirationDate}` : 
                `El Producto vencio el ${product.expirationDate}`;
    } else {
        return "El Producto no es Perecedero";
    }
};


console.log(isExpired(oldProduct));
console.log(isExpired(newProduct));
console.log(isExpired(notPerishableProduct));
console.log(isExpired(todayExpiringProduct));

/* 
* Definicion del Problema 
     Necesito saber los años que han pasado desde el lanzamiento de un disco
* Analisis del Problema
     Se necesita saber el año de lanzamiento del disco y compararlo con la fecha actual para saber diferencia, que seria la edad del disco.
* Definicion de herramientas
    1. Javascript - Funcion Flecha - Obj Date - Condicional if - Operador de resta
    2. Javascript - Funcion Flecha - Propiedades en el objeto album independientes (dia, mes, año) - Condicional IF y Operador Resta.
    3. Javascript - Funcion Flecha - Solo propiedad año en Entero - Operador resta
* Analisis de Herramientas
    Es necesario usar Javascript ya que es la herramienta central que estamos intentando aprender en este momento.
    Una funcion nos sirve para evaluar cualquier tipo de objeto, volviendolo reutilizable.
    El objeto date nos permite definir una fecha comparable a nuestro objeto con su metodo getYear con el que obtenemos el año y su metodo getDate con el que obtenemos el dia de una fecha.
    Las propiedades independientes nos permitirian no lidiar con el objeto date y hacer la comparacion de manera directa.
    La propiedad del año entero, nos evitaria lidiar con la comparacion de dia y mes, pero el resultado seria inexacto.
    Operador de resta para restar el año de lanzamiento con el año actual y poder comparar el mes y dia de salida.
* Definicion de Soluciones
    1. 
        Pro: El objeto date hace mas maniobrable el codigo gracias a sus metodos
        Con: Si no definimos claramente los metodos podemos tener errores.
    2. 
        Pro: Seria la manera mas clara ya que manejamos numeros
        Con: Podriamos tener errores al separar las propiedades y objetos con mas propiedades
    3. 
        Pro: Seria una forma sencilla de comparar y con menos lineas de codigo
        Con: No nos permitiria definir la edad correcta del album
* Analisis de Soluciones
    Me parece que la mas optima seria el uso del metodo date por el hecho de que puedo definir la fecha en una linea y puedo controlar la edad correcta del album con un if interno.
*/

let OKComputer = {
    name: "OK Computer",
    artist: "Radiohead",
    releaseDate: new Date(1997, 04, 21)
}

let BlondeOnBlonde = {
    name: "Blonde on Blonde",
    artist: "Bob Dylan",
    releaseDate: new Date(1966, 04, 17)
}

let DelousedInTheComatorium = {
    name: "De-loused in the Comatorium",
    artist: "The Mars Volta",
    releaseDate: new Date(2003, 05, 24)
}

let ShallowGrave = {
    name: "Shallow Grave",
    artist: "The Tallest Man on Earth",
    releaseDate: new Date(2008, 02, 05)
}

let Parklife = {
    name: "Parklife",
    artist: "Blur",
    releaseDate: new Date(1994, 03, 25)
}

let currentDate = new Date().getDate();
console.log(currentDate)
console.log(ShallowGrave.releaseDate.getDate())

let albumAge = (album) => {
    let currentDate = new Date();
    let albumAge = currentDate.getFullYear() - album.releaseDate.getFullYear()

    if ((currentDate.getMonth() < album.releaseDate.getMonth()) || (currentDate.getMonth() === album.releaseDate.getMonth() && currentDate.getDate() < album.releaseDate.getDate())) {
        albumAge -= 1
    }

    return `El album ${album.name} de ${album.artist} tiene ${albumAge} años`
}

console.log(albumAge(Parklife))
console.log(albumAge(ShallowGrave))
console.log(albumAge(DelousedInTheComatorium))
console.log(albumAge(BlondeOnBlonde))
console.log(albumAge(OKComputer))

/* 
* Definicion del Problema 
     Necesito que un auto me muestre su descripcion
* Analisis del Problema
     Dando el nombre de un auto x, necesitamos que nos de la descripcion de ese auto
* Definicion de herramientas
    1. Javascript - Funcion Flecha - Switch
    2. Javascript - Funcion Flecha - IF else 
* Analisis de Herramientas
    Es necesario usar Javascript ya que es la herramienta central que estamos intentando aprender en este momento.
    Una funcion nos sirve para evaluar cualquier tipo de objeto, volviendolo reutilizable.
    El switch es la opcion mas ordenada y clara para los condicionales multiples
    El if else es facil de seguir, pero tambien el mas dificil de modificar.
* Definicion de Soluciones
    1. 
        Pro: El Switch es mas claro y mas facil de modificar en el caso de necesitar agregar mas autos a describir
        Con: No encuentro contras en esta solucion
    2. 
        Pro: El if else es muy facil de seguir y la primera solucion en cuanto a condiciones simples
        Con: tambien es muy facil tener errores de llaves y es dificil de modificar en cuanto mas condiciones tenemos.
* Analisis de Soluciones
    Me parece que la mas optima seria el uso del metodo switch
*/

let auto1 = "Prius"
let auto2 = "Duster"
let auto3 = "Versa"
let auto4 = "Vento"

const carCatalog = (carName) => {
    switch (carName) {
        case "Prius":
            return "Su diseño avanzado y su icónica silueta triangular lo hacen único, además el avanzado y moderno interior del Toyota Prius cuenta con materiales blandos al tacto y sofisticados acabados metálicos."
        case "Duster":
            return "La Renault Duster Posee un performance único, es la SUV más potente del segmento, con dos versiones de motorización, 1.3L turbo y 1.6 L te enseñarán que la vida no tiene un solo camino."
        case "Versa":
            return "Prepárate para retar lo establecido a bordo de Nissan Versa, un vehículo que vuelve a elevar los estándares de seguridad y tecnología en su segmento. Atrévete a recorrer tus caminos de una forma distinta."
        default:
            return "No tenemos ese auto en el catalogo"
    }
}

console.log(carCatalog(auto1))
console.log(carCatalog(auto2))
console.log(carCatalog(auto3))
console.log(carCatalog(auto4))
