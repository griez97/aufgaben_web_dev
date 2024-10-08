let getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

function myDrinks(){
    getraenke.sort();

    const ol = document.createElement('ol');

    getraenke.forEach((drink) => {
        console.log(drink);
        
        const li = document.createElement('li');
        li.textContent = drink;
        ol.appendChild(li);
    });

    document.body.appendChild(ol);
}

myDrinks();