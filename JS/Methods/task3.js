//Task 3: function
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
  h2.innerHTML = 'Task 3: Top 3 weaknesses found in the list of Pokemons obtained in Task 1 are: ';
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
