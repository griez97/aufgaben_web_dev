let array: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const numnum: number[] = array.map((number) => {
    let doubled = number * 2;
    return doubled;
    //mit {} muss ich return'en sonst 'undefined' fur die numOrdered const / ohne {} und als oneLine habe ich 'auto-return'
})

console.log(numnum);

const numOrdered:number[] = numnum.sort((a:number, b:number) =>{
    return a - b;
})

console.log(numOrdered);

// gefundenes Beispiel wie ich es kurzer schreiben kann
let multipliedAndSorted: number[] = array
    .map(num => num * 2)
    .sort((a, b) => a - b);

console.log(multipliedAndSorted);


