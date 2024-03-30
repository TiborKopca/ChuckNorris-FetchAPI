'use strict'

const text = document.getElementById('text')
const btn = document.getElementById('btn')

const API_URL = 'https://catfact.ninja/breeds?limit=1';

var request = new XMLHttpRequest()

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    var catFactJSON = this.response
    console.log(catFactJSON)
  //  var catFact = catFactJSON.fact
  //  console.log(catFact)
  } else {
    text.innerHTML =
      'An error occurred during your request.'
  }
}


function getCatFact (id) {
  const URL = API_URL
  request.open('GET', URL)
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  request.responseType = 'json'
  request.send()
}

// if you want to pass a parameter, you need an anonymous function to call the custom function with parameters
btn.addEventListener('click', function () {
  getCatFact()
})

