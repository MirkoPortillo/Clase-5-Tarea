//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/



let $BOTON_INGRESAR = document.querySelector('#ingresar');

$BOTON_INGRESAR.onclick = function(){
const PRIMER_NOMBRE = document.querySelector('#primer-nombre-usuario').value
const SEGUNDO_NOMBRE = document.querySelector('#segundo-nombre-usuario').value
const APELLIDO_USUARIO = document.querySelector('#apellido-usuario').value
const edadUsuario = document.querySelector('#edad-usuario').value
document.querySelector('#resultado').innerText = (`Bienvenido, ${PRIMER_NOMBRE} ${SEGUNDO_NOMBRE} ${APELLIDO_USUARIO} de ${edadUsuario} años de edad!`)
}






