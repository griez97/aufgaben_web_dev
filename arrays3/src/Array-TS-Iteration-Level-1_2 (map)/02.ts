const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const upperDrinks: string[] = drinks.map((soda) => soda.toUpperCase())

console.log(upperDrinks);

const favDrink: string[] = drinks.map((item) => {
    //return "I like " + item;
    return `I like ${item}`;
})

console.log(favDrink);
console.log(favDrink.sort());
