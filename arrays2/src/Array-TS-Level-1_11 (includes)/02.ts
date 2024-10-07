let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

console.log(string.includes("Piper"), "Piper");
console.log(string.includes("piper"), "piper");
console.log(string.toLowerCase().includes("piper"), "with lower case" );
console.log(string.includes("peck"), "peck");
