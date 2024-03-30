'use strict'
/* RICK AND MORTY */

// we save in constants the DOM elements we want to work with
const text = document.getElementById('text')
const btn = document.getElementById('btn')
const avatar = document.getElementById('avatar')

// API URL ENDPOINT
const API_URL = 'https://rickandmortyapi.com/api/character/:id'

var numberOfResults
var requestNumbers = new XMLHttpRequest()
getMaxCharactersNumber()
totalNumberOfCharacters(showResult)

function showResult (result) {
  console.log(result)
  numberOfResults = result

  const random = getRandomInt(numberOfResults)
  console.log(random)
  return numberOfResults
}

function totalNumberOfCharacters (callback) {
  requestNumbers.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      const numberOfCharacters = this.response
      console.log('total number of characters ' + numberOfCharacters.info.count)
      console.log('type: ' + typeof (numberOfCharacters.info.count))
      callback(numberOfCharacters.info.count)
    } else {
      text.innerHTML = 'hovno'
    }
  }
}

function getMaxCharactersNumber () {
  console.log('querying number of characters')
  requestNumbers.open('GET', 'https://rickandmortyapi.com/api/character/')
  requestNumbers.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  requestNumbers.responseType = 'json'
  requestNumbers.send()
}

 function getRandomInt (max) {
  console.log('here!')
  return Math.floor(Math.random() * Math.floor(max))
}

//
/* var request = new XMLHttpRequest()

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    var newCharacterJSON = this.response
    var image = newCharacterJSON.image
    var imagePath = newCharacterJSON.image.toLowerCase()
    console.log(newCharacterJSON)
    avatar.setAttribute('src', imagePath)
  } else {
    text.innerHTML =
      `An error occurred during your request: ${request.status} ${request.statusText}`
  }
} */

/* function pedirPersonaje (id) {
  console.log('pidiendo personaje')
  console.log(totalNumberOfCharacters)
  var id = getRandomInt(totalNumberOfCharacters)
  console.log(id)
  const URL = API_URL.replace(':id', id)
  request.open('GET', URL)
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  request.responseType = 'json'
  request.send()
} */

// if you want to pass a parameter, you need an anonymous function to call the custom function with parameters
/* btn.addEventListener('click', function () {
  pedirPersonaje()
})
 */
