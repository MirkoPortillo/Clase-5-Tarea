//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $BOTON_CALCULAR = document.querySelector("#calcular")

let listaDeNumeros = [11 , 22, 18, 22, 48, 4]

function calcularPromedio(listaDeNumeros){

  let numero = 0  
  for(let i = 0 ; i < listaDeNumeros.length ; i++){

   numero = numero + listaDeNumeros[i]

  }
  return numero / listaDeNumeros.length
}
let resultadoPromedio = calcularPromedio(listaDeNumeros)


function obtenerMasPequeño(listaDeNumeros){

  let numeroMinimo = listaDeNumeros[0]
  for(let i = 1 ; i < listaDeNumeros.length; i++){

    if(listaDeNumeros[i] < numeroMinimo){

    numeroMinimo = listaDeNumeros[i]

    }

  }
  return numeroMinimo
}
let numeroMinimo = obtenerMasPequeño(listaDeNumeros)


function obtenerMasGrande(listaDeNumeros){

  let numeroMaximo = listaDeNumeros[0]
  for(let i = 1 ; i < listaDeNumeros.length ; i++){

    if(listaDeNumeros[i] > numeroMaximo){

      numeroMaximo = listaDeNumeros[i]

    }
    
  }
  return numeroMaximo
}
let numeroMaximo = obtenerMasGrande(listaDeNumeros)

function obtenerRepetido(listaDeNumeros){
  
  let numeroMasRepetido;
  let maxRepetido = 0

  for(let i = 0 ; i < listaDeNumeros.length ; i++){

    let numero = listaDeNumeros[i]
    let repetidos = 0

    for (let j = 0; j < listaDeNumeros.length; j++) {

      if(listaDeNumeros[j] === numero){

      repetidos ++

      }

      if(repetidos > maxRepetido){

        maxRepetido = repetidos
        numeroMasRepetido = numero

      }
    }
  }
  return numeroMasRepetido
}
let numeroMasRepetido = obtenerRepetido(listaDeNumeros)
console.log(numeroMasRepetido)

let mensaje = 
$BOTON_CALCULAR.onclick = function(){
  let mensaje = `El promedio es : ${resultadoPromedio}<br>`
  mensaje += `El número más pequeño es : ${numeroMinimo}<br>`
  mensaje += `El número más grande es : ${numeroMaximo}<br>`
  mensaje += `El numero mas frecuente es : ${numeroMasRepetido}<br>`

  document.querySelector("#resultado").innerHTML = mensaje
  return false
}


  
