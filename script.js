/* variables y constantes */
/* var nombre="Pepito" */
/* let nombre="hola"; */ /* scope:  tiene dos diferenciales, local y global, var scot loca, y let como global*/
/* alert(nombre); */ /* alerta */
/* constantes const */

/* const pi=3.14116
console.log(pi) */

/* function saludar(){
    let nameCompany="Gladiolos Company"
    console.log(nameCompany)
}
saludar() */

/* function greet(){
    return "Hola mundo"
}

let gretting=greet()
console.log(gretting) */

function greet(){
    /* funcion anonima:  */
    return function(){
        console.log("Hello from la second function")
    }
}
/* () llamando a la funcion greet */
/*    ejecutando la funcion anonima ()*/
greet()()

/* NaN : NOt a number : no es un numero
    hay 3 tiplos de variable: 
    cadena: string, char, etc
    numerica: Integer, float, decimal, NaN (es un tipo numerico, no se reliza operaciones)
    objeto: arrays, boolean, objectos js
    
    undefined: no esta definido , puede ser */
function plus(a=1,b=5){
    return a+b;
}
console.log(plus(1,2)) /* si poner en " ", va a concatenar */

/* arrays */
let array=[1,2,3,4,5]
console.log(array[2])

/* se podria considerar un array asociativo */
let object={
    /* clave o llave: valor */
    nombre:"juanito",
    apellido:"Perez",
    trabajo:"con mucha maña",
    direccion:{
        "ciudad":"Huancayo",
        "lugar":"Mi casa"
    }
}
console.log(object.direccion.ciudad)

/* json */

/* shorthand */
let namePepito="pepito"
let apellido="El grande"

/* los : es para asignar  */
let pepito={
    namePepito,
    apellido
}

console.log(pepito.namePepito)
console.log(pepito.apellido)

/* dom Document object model : api DOM = object clave o llave : valor */
/* DOM : NODO (todo lo que esta en el codigo) Y ELEMENT (elementos html: o etiqueta), todo nodo es elemento, pero no todo elemento es nodo */
/* tiene multiples atributos a los cuales podremos acceder */


/* intefaz, interaccion entre dos sistemas / api: app programmer interface paquete para desarrollar muchas cosas */
/*  document: todo lo que esta en html, y window todo lo que esta en la web*/
console.log(document.body.children.h1.innerHTML)
