let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

console.log(fahrenheit);

const celsius: number[] = fahrenheit.map((number) => {
        return (number - 32) / 1.8;
    })

console.log(celsius.map(result => result.toFixed(2)));
