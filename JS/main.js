var header = document.querySelector('header');
var section = document.querySelector('section');

//Storing JSON url in a variable
var requestURL = 'https://raw.githubusercontent.com/Biuni/PokemonGOPokedex/master/pokedex.json';

//XHR API used

//Creating a new object instance of XHR
var request = new XMLHttpRequest();

// Using open() method for a 'GET' request
request.open('GET', requestURL);

//Setting repsonse type & conversion from JSON to JS object
request.responseType = 'json';

//Sending the request
request.send();

request.onload = function() {
  var obj = request.response;
  var sort_obj = request.response;
  task1(sort_obj);
  task2(obj);
  task3(sort_obj);
}
