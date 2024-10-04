let oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];

let actorsReference = oldHollywoodActors;

actorsReference.push("Marilyn Monroe");

console.log("old Array/Main: ", oldHollywoodActors);
console.log("new Array: ", actorsReference);

// ` Kopie mit concat()
let actorsConcatCopy = oldHollywoodActors.concat();
console.log("Concat Kopie:", actorsConcatCopy);

// ` Kopie mit slice()
let actorsSliceCopy = oldHollywoodActors.slice();
console.log("Slice Kopie:", actorsSliceCopy);

// ` Kopie mit Spread-Operator
let actorsSpreadCopy = [...oldHollywoodActors];
console.log("Spread Kopie:", actorsSpreadCopy);

actorsConcatCopy[0] = "James Dean";
actorsSliceCopy[1] = "Grace Kelly";
actorsSpreadCopy[2] = "Frank Sinatra";

console.log("Main Array:", oldHollywoodActors);
console.log("Concat Kopie changes und so:", actorsConcatCopy);
console.log("Slice Kopie changes und so:", actorsSliceCopy);
console.log("Spread Kopie changes und so:", actorsSpreadCopy);