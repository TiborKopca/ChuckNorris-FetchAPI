'use strict'

// the inputValue allows us to access the value of the user's input, i.e. the chosen number
const inputValue = document.getElementById('number')

// this constant allows us to set the image to be displayed, by dynamically changing its "src" attribute
const avatar = document.getElementById('avatar')

const API_URL = 'https://rickandmortyapi.com/api/character/:id'

function getCharacter (id) {
  const URL = API_URL.replace(':id', id)
  fetch(URL)
  // first we attach the error handler function
    .then(handleErrors)

    // next, if there was no error, we use the json method on our response object
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    // since the response.json() method resulst in another promise, we attach another then handler on the data we receive
    .then(function (data) {
      const newCharacterJSON = data
      // upon studying the response data structure, we know we need to access the "image" JSON key to get the image URL
      var imagePath = newCharacterJSON.image

      // now we set the src attribute of our image element to the URL from the reponse
      avatar.setAttribute('src', imagePath)
    })
    // this part of the code allows us to correctly catch the errors which might have appeared, both errors of the original promise being rejected as well as the errors which are thrown by our handleErrors function
    .catch(function (err) {
      console.log('Something went wrong!', err)
    })
}

inputValue.addEventListener('change', function () {
  const choosenNumber = inputValue.value
  getCharacter(choosenNumber)
})

function handleErrors (response) {
  if (response.ok) {
    return response
  }
  throw new Error(response.statusText)
}
