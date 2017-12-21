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
    th.innerHTML = key;
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
            evol.innerHTML = pokemons[i][key][j].name + ': ' + pokemons[i][key][j].num; //Assign data to each 'div'
            td.appendChild(evol); //Append the 'div' to the 'td'
        }
      }
      else {
        td.innerHTML = pokemons[i][key]; // Default case for adding data to the 'td'
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

  //Loop through all pokemons
  for(var i = 0; i < pokemons.length; i++) {
    // create 'div' for each element
    var div = document.createElement('div');
    //create 'h3' for each element
    var h3 = document.createElement('h3');
    // create 'p' for each element
    var p = document.createElement('p');

    //name = pokemons[i].name (add to 'p')
    h3.innerHTML = pokemons[i].name + ': ';

    //if pokemon has no 'prev_evolution'
    if(!pokemons[i].prev_evolution) {
      //add current (name, height, weight, spawn_time) to 'p'
      p.innerHTML += pokemons[i].name + ' (' + pokemons[i].height + ', ' + pokemons[i].weight + ', ' + pokemons[i].spawn_time + ')';
      //if pokemon has 'next_evolution'
      if(pokemons[i].next_evolution) {
        //Loop through 'next_evolution'
        for(var j = 0; j < pokemons[i].next_evolution.length; j++) {
          //if pokemons[i].num == next_evolution[i].num
          for(var k = 0; k < pokemons.length; k++) {
            if(pokemons[k].num == pokemons[i].next_evolution[j].num) {
              //add (name, height, weight, spawn_time) of that evolution to 'p'
              p.innerHTML += ' --> ' + pokemons[k].name + ' (' + pokemons[k].height + ', ' + pokemons[k].weight + ', ' + pokemons[k].spawn_time + ')';
              break;
            }
          }
        }
      }
    }
    //Else (ie. if pokemons[i].prev_evolution exists)
    else {
      //Loop through 'prev_evolution'
      for(j = 0; j < pokemons[i].prev_evolution.length; j++) {
        //if pokemons[i].num == prev_evolution[i].num
        for(k = 0; k < pokemons.length; k++) {
          if(pokemons[k].num == pokemons[i].prev_evolution[j].num) {
            //add (name, height, weight, spawn_time) of that evolution ot 'p'
            p.innerHTML += pokemons[k].name + ' (' + pokemons[k].height + ', ' + pokemons[k].weight + ', ' + pokemons[k].spawn_time + ') --> ';
          }
        }
      }
      //add current (name, height, weight, spawn_time) to 'p'
      if(pokemons[i].prev_evolution && pokemons[i].next_evolution) {
        p.innerHTML += pokemons[i].name + ' (' + pokemons[i].height + ', ' + pokemons[i].weight + ', ' + pokemons[i].spawn_time + ') --> ';
      }
      else {
        p.innerHTML += pokemons[i].name + ' (' + pokemons[i].height + ', ' + pokemons[i].weight + ', ' + pokemons[i].spawn_time + ')';
      }
      //if pokemon has 'next_evolution'
      if(pokemons[i].next_evolution) {
        //Loop through 'next_evolution'
        for(var j = 0; j < pokemons[i].next_evolution.length; j++) {
          //if pokemons[i].num == next_evolution[i].num
          for(var k = 0; k < pokemons.length; k++) {
            if(pokemons[k].num == pokemons[i].next_evolution[j].num) {
              //add (name, height, weight, spawn_time) of that evolution to 'p'
              p.innerHTML += pokemons[k].name + ' (' + pokemons[k].height + ', ' + pokemons[k].weight + ', ' + pokemons[k].spawn_time + ')';
              break;
            }
          }
        }
      }
    }
    div.appendChild(h3);
    div.appendChild(p);
    section.appendChild(div);
  }
}

function task3(jsonObj) {
  var pokemons = jsonObj['pokemon'];

  //Declare a list for storing weaknesses
  var wList = [];

  //Store all weaknesses from the output of task1() in the list
  for(var i = 0; i < 10; i++) {
    for(var j = 0; j < pokemons[i].weaknesses.length; j++) {
      wList.push(pokemons[i].weaknesses[j]);
    }
  }

  //Array that stores unique weaknesses from wList
  var uniqueList = Array.from(new Set(wList));

  //Array that will keep the count of the no. of times a weakness appears
  var count = [];

  //Initializing count values as 0
  for(i = 0; i < uniqueList.length; i++) {
    count[i] = 0;
  }

  console.log(uniqueList);
  for(i = 0; i < 10; i++) {
    var index = pokemons[i];
    for(j = 0; j < index.weaknesses.length; j++) {
      for(var k = 0; k < uniqueList.length; k++) {
        if(index.weaknesses[j] == uniqueList[k]) {
          count[k]++;
        }
      }
    }
  }

  var div = document.createElement('div');
  var h2 = document.createElement('h2');
  var ul = document.createElement('ul');
  h2.innerHTML = 'Top 3 weaknesses found in the list of Pokemons obtained in Task 1 are: ';
  div.appendChild(h2);

  for(i = 0; i < 3; i++) {
    var li = document.createElement('li');
    li.innerHTML = uniqueList[i] + ' : ' + count[i] + ' times';
    var names = [];
    for(j = 0; j < 10; j++) {
      var index = pokemons[j];
      for(k = 0; k < index.weaknesses.length; k++) {
        if(index.weaknesses[k] == uniqueList[i])
        names.push(index.name);
      }
    }
    li.innerHTML += ' (';
    for(j = 0; j < names.length; j++) {
      if(j == names.length - 1) {
        li.innerHTML += names[j];
      }
      else {
        li.innerHTML += names[j] + ', ';
      }
    }
    li.innerHTML += ')';
    ul.appendChild(li);
  }
  div.appendChild(ul);
  section.appendChild(div);
  // console.log(count);

}
