//Task 2:  function
function task2(jsonObj) {
  //Grouping Based on Evolutions
  //Pokemon name : Base Name (height, weight, spawn_time) --> Evolution 1 (height, weight, spawn_time) --> Evolution 2 (height, weight, spawn_time)

  var pokemons = jsonObj['pokemon'];

  //Task2 heading
  var h2 = document.createElement('h2');
  var h4 = document.createElement('h4');
  h2.innerHTML = 'Task 2: Arranging all pokemons on the basis of their evolution: ';
  h4.innerHTML = 'Format: *a) Pokemon 1: Base Pokemon Name (height, weight, spawn time) --> Evolution 1 Name (height, weight, spawn time) --> Evolution 2 Name (height, weight, spawn time) --> so on*';

  section.appendChild(h2);
  section.appendChild(h4);

  var ol = document.createElement('ol');
  //Loop through all pokemons
  for(var i = 0; i < pokemons.length; i++) {
    // create 'li' for each element
    var li = document.createElement('li');
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
            //add (name, height, weight, spawn_time) of that evolution at 'p'
            p.innerHTML += pokemons[k].name + ' (' + pokemons[k].height + ', ' + pokemons[k].weight + ', ' + pokemons[k].spawn_time + ') --> ';
            break;
          }
        }
      }
      //if pokemon has 'next_evolution'
      if(pokemons[i].next_evolution) {
        //add current (name, height, weight, spawn_time) to 'p'
        p.innerHTML += pokemons[i].name + ' (' + pokemons[i].height + ', ' + pokemons[i].weight + ', ' + pokemons[i].spawn_time + ') --> ';
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
      else {
        //add current (name, height, weight, spawn_time) to 'p'
        p.innerHTML += pokemons[i].name + ' (' + pokemons[i].height + ', ' + pokemons[i].weight + ', ' + pokemons[i].spawn_time + ')';
      }
    }
    li.appendChild(h3);
    li.appendChild(p);
    ol.appendChild(li);
    section.appendChild(ol);
  }
}
