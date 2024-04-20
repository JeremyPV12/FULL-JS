
function cambiarTexto(){
    /* NUESTRO PRIMER ELEMENTO */
    /* hemos accedido al document, y hemos buscado al elemento que tenga el id:"elotroh1" */
    /* ese elemento lo hemos guardado en una variable llamada title */
    let titulo=document.getElementById("elotroh1")

    if(titulo.innerHTML=="Estoy cambiando el titulo"){
        titulo.innerHTML="Soy otro h1"
    }
    else{
        titulo.innerHTML="Estoy cambiando el titulo"
    }

    /* en el elemento hemos accedido a la propiedad innerHTML y hemos cambiado su valor */
    
}

function reseteando(){
    let res=document.getElementById("reset")
    let rest=document.getElementById("numero")

    res.innerHTML=0
}



let cont=document.getElementById("contar")
let more=document.getElementById("mas")
let less=document.getElementById("menos")

let contar = 0;
cont.innerHTML=contar

function incrementCounter() {
    cont++;
    cont.textContent = cont;
  }
  

  function decrementCounter() {
    cont--;
    cont.textContent = cont;
  }
  

  more.addEventListener('click', more);
  less.addEventListener('click', less);