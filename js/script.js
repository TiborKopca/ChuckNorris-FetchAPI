'use strict'
/* RICK AND MORTY */

//API ROUTE
const API_URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'               

// esta constane es para jQuery - elegimos la opcion de que los recursos se encuentren fuera de la memoria local
const OPCIONES = { crossDomain: true }

// esta funcion servira de la funcion callback, es una funcion expresiva, que guardamos en una constane
const PERSONAJE = function (personaje) {
  document.write(`Hola mi nombre es ${personaje.name}, 
  mi especie es ${personaje.species}, soy originario de ${personaje.origin.name}.${'<br></br>'}`)
}

// la funcion get de la libreria jQuery, le pasamos los argumentos (la ruta, opciones y la funcion de callback, llamada "personaje")
function pedirPersonaje (id) {
  const URL = `${API_URL}${CHARACTER_URL.replace(':id', id)}`
  $.get(URL, OPCIONES, PERSONAJE)
}

// y aqui pedimos al usuario un prompt que entre un numero de ID
pedirPersonaje(prompt('Elige el ID del caracter cuyas propiedades quieres mostrar:'))
