'use strict'
//CONSTANTS//
const outputJoke = document.getElementById('jokeWrapper')
const chuckPic = document.getElementById('chuckPic')
const API_URL = 'https://api.chucknorris.io/jokes/random';

//FUNCTION
function getJoke() {
  fetch(API_URL)
  // first we attach the error handler function
    .then(handleErrors)

    // next, if there was no error, we use the json method on our response object
    .then(function (response) {
      return response.json()
    })
    // since the response.json() method results in another promise, we attach another handler on the data we receive
    .then(function (data) {
      const newCharacterJSON = data;
      let phrase = newCharacterJSON.value;
      let imagePath = newCharacterJSON.icon_url;
      outputJoke.innerHTML = phrase;
      // chuckPic.setAttribute('src', 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png');
    })
    // this part of the code allows us to correctly catch the errors which might have appeared, both errors of the original promise being rejected as well as the errors which are thrown by our handleErrors function
    .catch(function (err) {
      console.log('Something went wrong!', err)
    })
}

//ERROR HANDLERS
function handleErrors (response) {
  if (response.ok) {
    return response
  }
  throw new Error(response.statusText)
}
