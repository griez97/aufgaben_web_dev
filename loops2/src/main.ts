import './style.css'

//----------------------------
//      Loops-TS-Level-1_3
//----------------------------

/* 
- Lernziel: while-Schleife verstehen und anwenden.
- Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
- Lege dazu eine Variable counter mit dem Wert 0 an.
- Als Bedingung nutze in der Schleife "counter < 10".
- Gib den String "Hallo World + counter" in der Konsole aus.
- Erhöhe counter um eins.
*/


/* 
const counter = 0;

while (counter < 10) {
  console.log("hello world, " + counter);
}  


let counter = 0;

while (counter < 10) {
  console.log("hello world, " + counter);
} 
*/


let counter = 0;

while (counter < 10) {
  console.log("hello world, " + counter);
  counter++
} 

//----------------------------
//      Loops-TS_Level-1_7
//----------------------------

let number = 1;
let output = "";

do {
  output += `this number is:  <div> ${number} </div>`;
  number++;
} while (number <= 5);

document.body.innerHTML = output;