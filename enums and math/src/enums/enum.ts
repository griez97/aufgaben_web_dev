// =====================
//     Enum-TS-Level-1_1
// =====================
console.log("%c Enum-TS-Level-1_1", "color: tomato; background: gold;");

/* 
- Definiere ein Enum Weekday mit den Wochentagen Monday bis Sunday
- Lass dir die Werte für Monday bis Sunday auf der Konsole ausgeben
- Definiere ein Enum Month mit den Monaten January bis December
- Lass dir alle Werte auf der Konsole ausgeben
*/

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Weekday);
console.log(Weekday.Monday);
console.log(Weekday.Tuesday);
console.log(Weekday.Friday);

enum Months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months);
console.log(Months.April);
console.log(Months.February);
console.log(Months.June);

// =====================
//     Enum-TS-Level-1_2
// =====================
console.log("%c Enum-TS-Level-1_2", "color: tomato; background: gold;");

/* 
- Definiere ein Enum PizzaSize mit den Größen Small, Medium, Large, Familie
- Definiere ein weiteres Enum PizzaIngredients mit Werten wie Cheese, Onion, Salami - werde selbst kreativ und denke dir weitere Zutaten aus
- Lege eine Typ Pizza mit den Eigenschaften size: PizzaSize und ingredients: PizzaIngredients[] an
- Lege 4 Pizza-Objekte mit verschiedenen Größen und Belägen an
*/

enum PizzaSize {
    Small,
    Medium,
    Large,
    Family
}

enum PizzaIngredients {
    Cheese,
    Onion,
    Salami,
    Sauce,
    Peppers,
    Mushrooms,
    Olives,
    Mozzarella,
    Pineapple,
    Ham,
    Chicken
}

type Pizza = {
    size: PizzaSize,
    ingredients: PizzaIngredients[]
}

let pizzaParty: Pizza[] = [];

const Margherita: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Sauce]
}

const Pepperoni: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Peppers, PizzaIngredients.Salami, PizzaIngredients.Sauce]
}

const Hawaiian: Pizza = {
    size: PizzaSize.Family,
    ingredients: [PizzaIngredients.Pineapple, PizzaIngredients.Ham, PizzaIngredients.Sauce]
}

const bbqChicken: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Chicken, PizzaIngredients.Mozzarella, PizzaIngredients.Sauce]
}

const fourCheese: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Mozzarella, PizzaIngredients.Sauce]
}

console.log(Margherita, Pepperoni, Hawaiian, bbqChicken, fourCheese);
console.log(Margherita.ingredients);
console.log(Pepperoni.ingredients);
console.log(Hawaiian.ingredients);
console.log(bbqChicken.ingredients);
console.log(fourCheese.ingredients);

// =====================
//     Enum-TS-Level-2_1
// =====================
console.log("%c Enum-TS-Level-2_1", "color: tomato; background: gold;");

/* 
- Definiere ein Enum HtmlError mit folgenden HTML-Error-Codes
- Das Enum soll sowohl den Fehlernamen als auch den Zahlenwert enthalten
- Schreibe eine Funktion showHtmlError()
- Lass dir in der Funktion mit Math.random zufällige Zahlen zwischen 1 - 5 generieren
- ist der Wert 0, 1 oder 2 gibt den HtmlError.OK aus
- ist der Wert 3 gibt HtmlError.Redirect aus
- ist der Wert 4 gib HtmlError.BadRequest aus
- ist der Wert 5 gibt HtmlError.InternalServerError aus
*/

enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

const showHtmlErrow = () => {
    const random = Math.floor(Math.random() * 5) + 1;

    if(random === 0 || random === 1 || random === 2){
        console.log(HtmlError.OK);
    } else if( random === 3){
        console.log(HtmlError.Redirect);
    } else if( random === 4){
        console.log(HtmlError.BadRequest);
    } else {
        console.log(HtmlError.InternalServerError);
    }

}

showHtmlErrow();

// =====================
//     Enum-TS-Level-2_2
// =====================
console.log("%c Enum-TS-Level-2_2", "color: tomato; background: gold;");

/* 
- Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen
- Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten
- Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau
- Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00)
- Lege dir ein Array mit allen Farben an: allColors: Color[]
- Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe
*/

enum ClothingColor {
    Yellow = '#FFFF00',
    Orange = '#FFA500',
    Pink = '#FFC0CB',
    Blue = '#0000FF',
    Purple = '#800080',
    Gray = '#808080'
}



const allColors: ClothingColor[] = [
    ClothingColor.Yellow,
    ClothingColor.Orange,
    ClothingColor.Pink,
    ClothingColor.Blue,
    ClothingColor.Purple,
    ClothingColor.Gray
];

function createColorButtons() {
    allColors.forEach(color => {
        console.log(color);
        
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        button.style.width = '50px';
        button.style.height = '50px';
        button.style.margin = '5px';

        document.body.appendChild(button);
    });
}

createColorButtons();