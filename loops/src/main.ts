import './style.css'

//-----------------------
//  Loops-TS-Level-1_1
//-----------------------

console.log("%cLoops-TS-Level-1_1", "color:tomato;")

for (let i = 1; i <= 10; i++) {
  console.log("Hello Word " + i);
}

//-----------------------
//  Loops-TS-Level-1_2
//-----------------------

console.log("%cLoops-TS-Level-1_2", "color:tomato;")

let numbersToTen: number[]  = [];

for (let x = 0; x < 11; x++) {
  numbersToTen.push(x);
}

console.log(numbersToTen);

//-----------------------
//  Loops-TS-Level-1_4
//-----------------------

console.log("%cLoops-TS-Level-1_4", "color:tomato;")

const friendNames: string[] = [ "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let y = 0; y < friendNames.length; y++) {
  console.log(friendNames[y]);
}

console.log("%cwith for of", "color:lightblue;")

for (const y2 of friendNames) {
  console.log(y2);
}

//-----------------------
//  Loops-TS-Level-1_9
//-----------------------

console.log("%cLoops-TS-Level-1_9", "color:tomato;")

let words: string[] = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

/* for(let i =0; i < ) */


//-----------------------
//  Loops-TS-Level-1_10
//-----------------------

console.log("%cLoops-TS-Level-1_10", "color:tomato;")

function getHighestNumber(numbers) {
  if (numbers.length === 0) {
      return undefined;
  }

  let highestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > highestNumber) {
          highestNumber = numbers[i];
      }
  }

  return highestNumber;
}

console.log(getHighestNumber([1, 5, 3, 9, 2, 15, 156, 17, 8496, 45, 645, 9999, 155, 84, 1235, 54]));
console.log(getHighestNumber([-1, -5, -3]));
console.log(getHighestNumber([]));

//-----------------------
//  Loops-TS-Level-1_11
//-----------------------

console.log("%cLoops-TS-Level-1_11", "color:tomato;")

function calculateSum(maxNumber) {
  let sum = 0;
  for (let i = 1; i <= maxNumber; i++) {
      sum += i;
  }
  return sum;
}

console.log(calculateSum(5));
console.log(calculateSum(10));
console.log(calculateSum(100));
console.log(calculateSum(1000));
console.log(calculateSum(9999));

