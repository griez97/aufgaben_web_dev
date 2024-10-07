let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];

function rising(a:number, b:number){
    return a - b
}

console.log(numArray.sort(rising));
