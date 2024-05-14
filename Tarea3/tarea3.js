//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $BOTON_AGREGAR = document.querySelector("#agregar-video")
const $BOTON_CALCULAR = document.querySelector("#calcular")

const listaDeVideos = []

$BOTON_AGREGAR.onclick = function(){
    const HORAS_VIDEO = Number(document.querySelector("#horas").value)
    const MINUTOS_VIDEO = Number(document.querySelector("#minutos").value)
    const SEGUNDOS_VIDEO = Number(document.querySelector("#segundos").value)

    listaDeVideos.push([HORAS_VIDEO,MINUTOS_VIDEO,SEGUNDOS_VIDEO])
}

$BOTON_CALCULAR.onclick = function(){

    let segundosTotales = 0
    let minutosTotales = 0
    let horasTotales = 0

    for (let i = 0; i < listaDeVideos.length; i++) {
        const HORAS_VIDEO = listaDeVideos[i][0]
        const MINUTOS_VIDEO = listaDeVideos[i][1]
        const SEGUNDOS_VIDEO = listaDeVideos[i][2]

        horasTotales += HORAS_VIDEO
        minutosTotales += MINUTOS_VIDEO
        segundosTotales += SEGUNDOS_VIDEO
        
    }

    if(segundosTotales >= 60){
        minutosTotales += Math.floor(segundosTotales/60)    // Math.floot: Para redondear el numero 
        segundosTotales = segundosTotales % 60  
    }

    if(minutosTotales >= 60){
        horasTotales += Math.floor(minutosTotales/60)
        minutosTotales = minutosTotales % 60
    }



    document.querySelector("#resultado").innerHTML = (`Duracion total de los videos agregados : ${horasTotales} Horas; ${minutosTotales} Minutos; ${segundosTotales} Segundos` )
}


