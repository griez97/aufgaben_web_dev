// =====================
//     Math-TS-Level-1_1
// =====================
console.log("%c Math-TS-Level-1_1", "color: tomato; background: gold;");

/* 
- Zeige in der Konsole Math.PI.
- Deklariere die const PI mit dem passenden Wert.
- Runde den Wert von PI auf zwei Dezimalstellen und weise den Wert der Variablen roundedPI zu.
- Gib roundedPI in der Konsole aus.
*/

console.log(Math.PI);

const roundedPI = Math.PI.toFixed(2);
console.log(roundedPI);

// =====================
//     Math-TS-Level-1_2
// =====================
console.log("%c Math-TS-Level-1_2", "color: tomato; background: gold;");

/* 
- Schreibe eine Function, die eine Zahl rundet.
- Verwende die Zahlen aus dem Code-Snippet.
- Gib das Ergebnis anschließend in der Konsole aus.
*/

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

const roundNumber = (num: number): number => Math.round(num);

randomNumbers.forEach(number => {
    const roundedNumber = roundNumber(number);
    console.log(roundedNumber);
});

// =====================
//     Math-TS-Level-1_3
// =====================
console.log("%c Math-TS-Level-1_3", "color: tomato; background: gold;");

/* 
- Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
- Deklariere die Variable randomNum1\_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
- Deklariere die Variable randomNum1\_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.
*/

let randomNum = Math.random();
let randomNum10 = Math.floor(Math.random() * 10);
let randomNum100 = Math.floor(Math.random() * 100);


console.log(randomNum);
console.log(randomNum10);
console.log(randomNum100);

// =====================
//     Math-TS-Level-1_4
// =====================
console.log("%c Math-TS-Level-1_4", "color: tomato; background: gold;");

/* 
- Finde mit Math.min den niedrigsten Wert aus den Zahlen im Code-Snippet.
- Finde nun mit Math.max den höchsten Wert aus den Zahlen im Code-Snippet.
- Lass dir das Ergebnis auf der Konsole ausgeben
*/

console.log(Math.min(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));

console.log(Math.max(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));


// =====================
//     Math-TS-Level-2_2
// =====================
console.log("%c Math-TS-Level-2_2", "color: tomato; background: gold;");

// Funktion zur Generierung einer zufälligen Zahl zwischen 1 und 10
const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * 10) + 1;
};

// Funktion zum Überprüfen der Benutzereingabe
const checkGuess = (userGuess: number, randomNumber: number): void => {
    if (userGuess === randomNumber) {
        console.log("Gratulation! Du hast die richtige Zahl erraten!");
    } else {
        console.log(`Leider falsch. Die richtige Zahl war ${randomNumber}.`);
    }
};

// Hauptfunktion des Spiels
const playGuessingGame = (): void => {
    const randomNumber = generateRandomNumber(); // Random aus der Funktion oben
    
    const userInput = prompt("Rate eine Zahl zwischen 1 und 10:"); //Prompt - Fenster im Browser
    
    const userGuess = Number(userInput); // Angabe aus dem Prompt
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {  //wenn not a number oder kleiner als 1 oder grosser als 10 dann
        console.log("Ungültige Eingabe. Bitte gib eine Zahl zwischen 1 und 10 ein.");
        return;
    }
    
    checkGuess(userGuess, randomNumber); // Erste if else zum prufen ob die gleiche Zahl
};

// Starte das Spiel
playGuessingGame(); //Calling
