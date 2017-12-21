//Task 1: function
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

  var h2 = document.createElement('h2');
  h2.innerHTML = 'Task 1: Top 10 Pokemon with the highest *spawn chance* and all their details in a table in descending order: '
  section.appendChild(h2);
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
