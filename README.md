# Pokemon Trivia

This repo is a Frontend challange assignment for Newgen Payments.

#### To view the output, please open *index.html* in a browser.

## Features:

This repo is a frontend assignment that manages and manipulates in operations using a JSON dataset on Pokemons (https://raw.githubusercontent.com/Biuni/PokemonGOPokedex/master/pokedex.json).

A bit of CSS styling & keyframes *load animation*  have been added too. :)
PS. The link with my name on the top leads to my website. :)

The code is written in **Vanilla JS** and uses the **XHR (XMLHttpRequest) API**.
It's a very useful JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets).

The XHR setup and data request is done as follows:

```JavaScript

//Storing JSON url in a variable
var requestURL = 'https://raw.githubusercontent.com/Biuni/PokemonGOPokedex/master/pokedex.json';

//XHR API used

//Creating a new object instance of XHR
var request = new XMLHttpRequest();

// Using open() method for a 'GET' request
request.open('GET', requestURL);

//Setting repsonse type & conversion from JSON to JS object
request.responseType = 'json';


```

It does the following tasks:

### Task 1:
#### Find the Top 10 Pokemon with the highest *spawn chance* and display all their details in a table in descending order.

The code can be found in the  ***task1.js***  file inside the *'JS/Method'* folder.


### Task 2:
#### Group the Pokemon based on their evolution and print in the following format:
*a) Pokemon 1: Base Pokemon Name (height, weight, spawn time) --> Evolution 1 Name (height, weight, spawn time) --> Evolution 2 Name (height, weight, spawn time) --> so on*

The code can be found in ***task2.js*** file inside the *'JS/Method'* folder.

**I have also included an extra piece of code in *"optional-task2-unique-cases.js"* file.
*This code has not been implemented and is just a concept I got while working on the assignment.*
What this does is it groups pokemon by their evolution series.
(*ie. it will display each evolution list once.*).**

So repeating chains like:

Bulbasaur (0.71 m, 6.9 kg, 20:00) --> Ivysaur (0.99 m, 13.0 kg, 07:00) --> Venusaur (2.01 m, 100.0 kg, 11:30)

will appear once.

#### The code implemented is as per the assigned tasks & is in *"task2.js"*

### Task 3:
#### From the list obtained in Task 1, Find the top 3 weaknesses found in these Pokemon and mention the number of Pokemon that have this weakness.

This code can be found in ***task3.js*** file inside the *'JS/Method'* folder.

**I have also mentioned the names of the pokemon(having that weakness) after each weaknesses' count in the output.**
