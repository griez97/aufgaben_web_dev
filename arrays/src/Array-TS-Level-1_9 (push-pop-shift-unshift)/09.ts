let numbers: number[] = [23, 54, 75];
console.log("Initiales Array:", numbers);

numbers.push(11, 22, 33, 44, 55);
console.log("Nach Push:", numbers);

numbers.unshift(101, 202, 303, 404, 505);
console.log("Nach Unshift:", numbers);

numbers.pop();
numbers.pop();
console.log("Nach 2x Pop:", numbers);


numbers.shift();
numbers.shift();
console.log("Nach 2x Shift:", numbers);
