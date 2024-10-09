import './style.css'
import { movies } from './database';
console.log(movies);

// ich brauch *i guess* feld indem in namen angeben kann aufrufen so wie:
//search btn der zsm mit o.g. feld funktioniert
//3 btns fur die 3 filter die mit den movie divs irgendwie spater funktionieren werden 

const inputName = document.querySelector('#inputName') as HTMLInputElement;

const searchBtn = document.querySelector('#searchBtn') as HTMLInputElement;

const yearUp = document.querySelector('#yearUp') as HTMLInputElement;

const yearDown = document.querySelector('#yearDown') as HTMLInputElement;

const bestRate = document.querySelector('#bestRate') as HTMLInputElement;

//-----------------------------------
// what do i need now?
// 1. funktion fur die suche
// 2. onClick event fur search btn
// 3. yearUp => aufsteigend (a-b)
// 4. yearDown => absteigend (b-a)
// 5. bestRate => nach bewertung sortieren (b-a)
// => 3/4/5 sort, 1 mit includes und toLowerCase | else needed => sort, filter, forEach, map
//-----------------------------------

// movie search 

function filterMovies(searchTerm: string): typeof movies {
  return movies.filter(movie => 
      movie[0].toLowerCase().includes(searchTerm.toLowerCase())
  );
}

//btn verbinden 
searchBtn.addEventListener('click', () => {

});

// sorting functions

function yearUpSort (): typeof movies {
  return [...movies].sort((a, b) => a[1] - b[1]);
}

function yearDownSort (): typeof movies {
  return [...movies].sort((a, b) => b[1] - a[1]);
}

function ratingSort (): typeof movies {
  return [...movies].sort((a, b) => b[5] - a[5]);
}

// neue liste also kinda a copy?
function newMovieList(movieList: typeof movies) {

  console.log(movieList);

}

// btns verbinden mit functions oder so 

// nameVonVariable punkt addEventListener(~function~) 
//~function~ => event aka hier 'click' comma arrowFunction () => {}
// {} => const erstellen und fuctions von oben anwenden =>  neue listen ausgeben

searchBtn.addEventListener('click', () => {
  const searchTerm = inputName.value;
  const filteredMovies = filterMovies(searchTerm);
  newMovieList(filteredMovies);
});

yearUp.addEventListener('click', () => {
  const goUp = yearUpSort();
  newMovieList(goUp);
});

yearDown.addEventListener('click', () => {
  const goDown = yearDownSort();
  newMovieList(goDown);
});

bestRate.addEventListener('click', () => {
  const ratePoints = ratingSort();
  newMovieList(ratePoints);
});

// bis hier: das grosste problem war klar zu wissen wie ich die funktionen zeile fur zeile (und zeichen fur zeichen lol) aufbauen sollte - warum ich const in addEvent erstellen musste 