'use strict'

// ------ SAVING IN CONSTANTS THE DOM ELEMENTS WE NEED TO WORK WITH ------ //

// the inputValue allows us to access the value of the user's input, i.e. the chosen number
const inputValue = document.getElementById('number')

// this constant allows us to set the image to be displayed, by dynamically changing its "src" attribute
const avatar = document.getElementById('avatar')

// here we create a link to the image description element, so we can change the displayed character name
const imageDescription = document.getElementById('imageDescription')

// ------ SAVING THE URL OF THE API WE WANT TO REQUEST DATA FROM ------ //
const API_URL = 'https://rickandmortyapi.com/api/character/:id'

var request = new XMLHttpRequest()

function getCharacter (id) {
  const URL = API_URL.replace(':id', id)
  request.open('GET', URL)
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  request.responseType = 'json'
  request.onload = function () {
    // the response status tells us the HTTP status code, if it is 200, it means the response status is "OK"
    if (this.status === 200) {
      // we save the response into a variable
      var newCharacterJSON = this.response
      console.log(newCharacterJSON)

      // upon studying the response data structure, we know we need to access the "image" JSON key to get the image URL
      var imagePath = newCharacterJSON.image

      // now we set the src attribute of our image element to the URL from the reponse
      avatar.setAttribute('src', imagePath)

      // to get the image description, we access the "name" JSON key
      var characterName = newCharacterJSON.name
      if (characterName) {
      // we set the text to show the name we got from the response
        imageDescription.innerHTML = characterName
      } else {
        // if no input has been given, we display the message to choose one
        imageDescription.innerHTML = 'Please choose a number'
      }
    } else {
      // 
      imageDescription.innerHTML =
        `An error occurred during your request! Choose a different number. Code: ${request.status}`
    }
  }
  request.send()
}

inputValue.addEventListener('change', function () {
  const choosenNumber = inputValue.value
  getCharacter(choosenNumber)
})
