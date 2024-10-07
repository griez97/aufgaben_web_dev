let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

function rising(a:number, b:number){
    return a - b
}

function descending(a:number, b:number){
    return b - a
}

console.log(numArray1.sort());
console.log(numArray1.sort(rising));
console.log(numArray1.sort(descending));
