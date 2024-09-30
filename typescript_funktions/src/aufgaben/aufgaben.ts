// Functions-TS-Level-1_3

function showPersonInfo(name: string, city: string, age: number) {
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${age} Jahre alt. Ich komme aus ${city}.`);
}

showPersonInfo("Daniel", "Kraków", 27);

// Functions-TS-Grundlagen-Level-1_4

function showHero(heroName: string, heroPower: string, heroEnemy: string) {
    let nameOutput = "Mein:e Lieblingsheld:in ist: " + heroName;
    let powerOutput = " Er/sie hat die Fähigkeit: " + heroPower;
    let enemyOutput = " Sein/ihr größte/r Gegner:in ist: " + heroEnemy;

    console.log(nameOutput + powerOutput + enemyOutput);
}

showHero("Batman", "cooles auto, keine Eltern :( ", "Joker");

// Functions-TS-Level-1_5

function multiplyAndDivide(num1:number, num2:number){
    if(num1 == 0 || num2 == 0){
        console.log("Division durch 0 nicht erlaubt");
        
    } else{
        console.log("Multiplikation: " + num1 * num2);
        console.log("Division : " + num1 / num2);
        
    }
}