'use strict'
//CONSTANTS//
const outputJoke = document.getElementById('jokeWrapper')
const chuckPic = document.getElementById('chuckPic')
const API_URL = 'https://api.chucknorris.io/jokes/random';

//FUNCTION
function getJoke() {
  fetch(API_URL)
    //First we attach the error handler function
    //The resource in not located f.e.
    .then(handleErrors)

    // next, if there was no error, we use the json method on our response object
    .then(function (response) {
      //We can check for HTTP status codes in console log
      // response => console.log(response)
      return response.json()
    })
    // since the response.json() method above results in another promise, we attach another handler on the data we receive
    .then(function (data) {
      //We can check for data in the JSON format
      //data => console.log(data)

      const newCharacterJSON = data;
      let phrase = newCharacterJSON.value;
      let imagePath = newCharacterJSON.icon_url;
      outputJoke.innerHTML = phrase;
      // chuckPic.setAttribute('src', 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png');
    })

    // this part of the code allows us to correctly catch the errors which might have appeared, both errors of the original promise being rejected as well as the errors which are thrown by our handleErrors function
    .catch(function (err) {
      console.error('Something went wrong!', err)
    })
}

//ERROR HANDLERS
function handleErrors (response) {
  if (response.ok) {
    return response
  }
  //This error will be catched by .catch later
  throw new Error('Could not fetch resource', response.statusText)
}
