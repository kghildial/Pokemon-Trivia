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
  task1(obj);
  // task2(pokemons);
  // task3(pokemons);
}

function task1(jsonObj) {
  var pokemons = jsonObj['pokemon'], temp, swapped;
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

  var tr_head = document.createElement('tr');
  p = pokemons[1];
  for(var key in p) {
    var th = document.createElement('th');
    th.textContent = key;
    tr_head.appendChild(th);
    // console.log(key);
  }
  section.appendChild(tr_head);

  for(i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    for(key in pokemons[i]) {
      var td = document.createElement('td');
      if(key === 'img') {
        var img = document.createElement('img');
        img.setAttribute('src', pokemons[i][key]);
        td.appendChild(img);
      }
      else if(key === 'next_evolution') {
        for(j = 0; j < pokemons[i][key].length; j++) {
          // console.log(pokemons[i][key][j]);
          var evol = document.createElement('div');
            evol.textContent = pokemons[i][key][j].name + ': ' + pokemons[i][key][j].num;
            td.appendChild(evol);
        }
        // console.log(pokemons[i][key].length);
      }
      else if(key === 'prev_evolution') {
        // console.log('prev_evol found for' + pokemons[i]['name']);
        var evol = document.createElement('div');
          evol.textContent = pokemons[i][key][j].name + ': ' + pokemons[i][key][j].num;
          td.appendChild(evol);
      }
      else {
        td.textContent = pokemons[i][key];
      }
      tr.appendChild(td);
    }
    section.appendChild(tr);
    // console.log(pokemons[i]);
  }
}
