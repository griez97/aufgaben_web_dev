const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const printEvenNumbers: number[] = zahlen.filter((num) => {
    if (num % 2 === 0) {
        return num;
    }
})
console.log(printEvenNumbers);

const printOddNumbers: number[] = zahlen.filter((num) => {
    if (num % 2 !== 0) {
        return num
    }
})
console.log(printOddNumbers);