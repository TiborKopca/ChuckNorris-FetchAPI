'use strict'
//CONSTANTS//
const outputJoke = document.getElementById('jokeWrapper')
const chuckPic = document.getElementById('chuckPic')
const API_URL = 'https://api.chucknorris.io/jokes/random';

//FUNCTION

async function getJoke(){
  try{
    //response object
    const response = await fetch(API_URL);
    //check for response error
    if(!response.ok){
      throw new Error('Could not fetch resource.');
    }
    //this also returns a promise
    const data = await response.json();
    console.log(data)
  }
  catch(error){
    console.error(error)
  }
}
