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
  // task3(pokemons);
}

//Task one function
function task1(jsonObj) {
  var pokemons = jsonObj['pokemon'], temp, swapped;
  //Sorting pokemons in decreasing order of spawn_chance
  for(var i = 0; i < pokemons.length; i++) {
    swapped = false;
    for(var j = 0; j < pokemons.length-1; j++) {
      if(pokemons[j].spawn_chance < pokemons[j+1].spawn_chance) {
        temp = pokemons[j];
        pokemons[j] = pokemons[j+1];
        pokemons[j+1] = temp;
        swapped = true;
      }
    }
    if(!swapped) {
      break;
    }
  }
  //Creating table headings
  var tr_head = document.createElement('tr');
  p = pokemons[1];
  for(var key in p) {
    var th = document.createElement('th');
    th.textContent = key;
    tr_head.appendChild(th);
  }
  section.appendChild(tr_head);

  //Filling tble with data
  for(i = 0; i < 10; i++) { //Select first 10 entries of the sorted list
    var tr = document.createElement('tr'); //Create 'tr' for each pokemon

    for(key in pokemons[i]) { //Loop thorugh all the keys of each pokemon object
      var td = document.createElement('td'); //Create a 'td' for each key
      if(key === 'img') {  //If 'key' is img
        var img = document.createElement('img'); //Create an 'img'
        img.setAttribute('src', pokemons[i][key]); //Set 'img' URL as the 'key' value
        td.appendChild(img); //Append 'img' to 'td'
      }
      else if(key === 'next_evolution' || key === 'prev_evolution') {  //If 'key' is 'next_evolution'  or 'prev_evolution' array

        for(j = 0; j < pokemons[i][key].length; j++) { //Loop through the array
          var evol = document.createElement('div'); //Create a 'div' for each evolution
            evol.textContent = pokemons[i][key][j].name + ': ' + pokemons[i][key][j].num; //Assign data to each 'div'
            td.appendChild(evol); //Append the 'div' to the 'td'
        }
      }
      else {
        td.textContent = pokemons[i][key]; // Default case for adding data to the 'td'
      }
      tr.appendChild(td); //Append all 'td' to the 'tr'
    } // Data filled in all 'tr'
    section.appendChild(tr); //Add the table to the section area of the page
  }
}

//Task two function
function task2(jsonObj) {
  //Grouping Based on Evolutions
  //Pokemon name : Base Name (height, weight, spawn_time) --> Evolution 1 (height, weight, spawn_time) --> Evolution 2 (height, weight, spawn_time)
  var pokemons = jsonObj['pokemon'];
  var list = [];

  for(var i = 0; i < pokemons.length; i++) {
    if(pokemons[i].prev_evolution) {
      list.push(pokemons[i].prev_evolution[0].num);
    }
    else{
      list.push(pokemons[i].num);
    }
  }

  var uniqueList = Array.from(new Set(list));

  for(i = 0; i < pokemons.length; i++) {
    for(var j = 0; j < uniqueList.length; j++) {
      if(pokemons[i].num == uniqueList[j]) {
        console.log(pokemons[i].name + ' (' + pokemons[i].height + ', ' + pokemons[i].weight + ', ' + pokemons[i].spawn_time + ')');
      }
    }
  }
}
