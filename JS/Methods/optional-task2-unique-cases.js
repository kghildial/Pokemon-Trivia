//Contains code for task2() if we want unique cases of grouping by evolution
//This enables each evolution list to come once
function task2(jsonObj) {
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

  var count = 0;
  var div = document.createElement('div');
  for(i = 0; i < pokemons.length; i++) {
    for(var j = 0; j < uniqueList.length; j++) {
      var inner_div = document.createElement('div')
      inner_div.setAttribute('class', 'inner-div');
      var h3 = document.createElement('h3');
      var p = document.createElement('p');
      if(pokemons[i].num == uniqueList[j]) {
        var index = pokemons[i];
        h3.innerHTML = index.name + ':';
        p.innerHTML = index.name + ' (' + index.height + ', ' + index.weight + ', ' + index.spawn_time + ')';
        if(index.next_evolution) {
          var evol = [];
          for(var k = 0; k < index.next_evolution.length; k++) {
            for(var l = 0; l < pokemons.length; l++) {
              // console.log(index.next_evolution[k].num);
              if(pokemons[l].num == index.next_evolution[k].num) {
                evol[k] = pokemons[l];
                break;
              }
            }
            console.log(evol[k]);
            p.innerHTML += '-->' + evol[k].name + '(' + evol[k].height + ', ' + evol[k].weight + ', ' + evol[k].spawn_time + ')';
          }
        }
        inner_div.appendChild(h3);
        inner_div.appendChild(p);
        div.appendChild(inner_div);
      }
      section.appendChild(div);
    }
  }
}
